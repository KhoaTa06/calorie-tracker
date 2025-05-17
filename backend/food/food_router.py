from fastapi import APIRouter, Depends, HTTPException, status

from auth.auth_handler import get_current_active_user

from sqlModels import Food, FoodLog, UpdateFoodLog, User, get_session
from sqlmodel import Session, select

from datetime import datetime

router = APIRouter()

# food class request
@router.get('/foods', response_model=list[Food])
async def get_foods(db: Session = Depends(get_session),
                    current_user: User = Depends(get_current_active_user)):
    foods = db.exec(select(Food)).all()
    return foods
    
@router.get('/food/{food_id}', response_model=Food)
async def get_food(food_id: int,
                   db: Session = Depends(get_session),
                   current_user: User = Depends(get_current_active_user)):
    food = db.get(Food, food_id)
    return food

@router.post('/food')
async def create_food(food: Food,
                      db: Session = Depends(get_session),
                      current_user: User = Depends(get_current_active_user)):
    db_food = Food.model_validate(food)
    db.add(db_food)
    db.commit()
    db.refresh(db_food)
    return db_food
    

@router.put('/food/{food_id}')
async def update_food(food: Food,
                      food_id: int,
                      db: Session = Depends(get_session),
                      current_user: User = Depends(get_current_active_user)):
    food = db.get(Food, food_id)
    if not food:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Food not found")
    for field, value in food.model_dump().items():
        setattr(food, field, value)
    db.commit()
    db.refresh(food)
    return food


# food log class request
@router.get('/log/foods/{date}')
async def get_food_logs(date: datetime,
                        db: Session = Depends(get_session),
                        current_user: User = Depends(get_current_active_user)):
    food_logs = db.exec(select(FoodLog).where(FoodLog.user_id == current_user.id, FoodLog.date == date)).all()
    if not food_logs:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No food logs found")
    return food_logs

@router.get('/log/food/{food_id}')
async def get_food_log(food_id: int,
                       db: Session = Depends(get_session),
                       current_user: User = Depends(get_current_active_user)):
    food_log = db.get(FoodLog, food_id)
    if not food_log:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Food log not found")
    if food_log.user_id != current_user.id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized to access this food log")
    return food_log
    

@router.put('/log/food')
async def update_food_log(food: UpdateFoodLog,
                          db: Session = Depends(get_session),
                          current_user: User = Depends(get_current_active_user)):
    print("Input food log: ", food)
    food_log = db.exec(select(FoodLog).where(FoodLog.id == food.id, FoodLog.user_id == current_user.id)).first()
    if not food_log:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Food log not found")
    
    print("Current food log: ", food_log)
    update_log = food.model_dump(exclude_unset=True)

    for field, value in update_log.items():
        setattr(food_log, field, value)
    print("Updated food log: ", food_log)

    # food_log["date"] = datetime.strptime(food_log["date"], "%Y-%m-%d")

    # db_food_log = FoodLog.model_validate(food_log)
    db.add(food_log)
    db.commit()
    db.refresh(food_log)
    return food_log

@router.post('/log/food')
async def log_food(food: FoodLog,
                   db: Session = Depends(get_session),
                   current_user: User = Depends(get_current_active_user)):
    food_data = food.model_dump()
    food_data["user_id"] = current_user.id
    print("New food log: ", food_data)
    db_food_log = FoodLog.model_validate(food_data)
    db.add(db_food_log)
    db.commit()
    db.refresh(db_food_log)
    return db_food_log

@router.delete('/log/food/{food_id}')
async def delete_food_log(food_id: int,
                          db: Session = Depends(get_session),
                          current_user: User = Depends(get_current_active_user)):
    food_log = db.get(FoodLog, food_id)
    if not food_log:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Food log not found")
    db.delete(food_log)
    db.commit()
    return food_log

