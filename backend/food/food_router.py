from fastapi import APIRouter, Depends, HTTPException, status
from typing import Annotated

from backend.auth.auth_handler import get_current_active_user

from sqlModels import Food, FoodLog, User, get_session
from sqlmodel import Session, select

router = APIRouter()

# food class request
@router.get('/foods', response_model=list[Food])
async def get_foods(db: Session = Depends(get_session),
                    current_user: User = Depends(get_current_active_user)):
    foods = db.exec(select(Food)).all()
    return foods
    
@router.get('/food/{food_id}', response_model=Food)
async def get_food(food_id: int):
    db: Session = Depends(get_session)
    food = db.get(Food, food_id)
    return food

@router.post('/food')
async def create_food():
    pass

@router.put('/food/{food_id}')
async def update_food(food_id: int):
    pass


# food log class request
@router.get('/log/foods')
async def get_food_logs():
    pass

@router.get('/log/food/{food_id}')
async def get_food_log(food_id: int):
    pass

@router.put('/log/food/{food_id}')
async def update_food_log(food_id: int):
    pass

@router.post('log/food/{food_id}')
async def log_food(food_id: int):
    pass

@router.delete('/log/food/{food_id}')
async def delete_food_log(food_id: int):
    pass

