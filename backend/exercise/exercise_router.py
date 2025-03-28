from fastapi import APIRouter, Depends, status, HTTPException

from auth.auth_handler import get_current_active_user

from sqlModels import Exercise, User, get_session
from sqlmodel import Session, select

router = APIRouter()

@router.get('/exercises', response_model=list[Exercise])
async def get_exercises(db: Session = Depends(get_session),
                         current_user: User = Depends(get_current_active_user)):
    exercises = db.exec(select(Exercise).where(Exercise.user_id == current_user.id)).all()
    return exercises

@router.get('/exercise/{exercise_id}', response_model=Exercise)
async def get_exercise(exercise: Exercise,
                       exercise_id: int,
                       db: Session = Depends(get_session),
                       current_user: User = Depends(get_current_active_user)):
    exercise = db.get(Exercise, exercise_id)
    if not exercise:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Exercise not found")
    if exercise.user_id != current_user.user_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized to access this exercise")
    return exercise


@router.post('/exercise')
async def create_exercise(exercise: Exercise,
                          db: Session = Depends(get_session),
                          current_user: User = Depends(get_current_active_user)):
    db_exercise = Exercise.model_validate(exercise, update={"user_id": current_user.id})
    db.add(db_exercise)
    db.commit()
    db.refresh(db_exercise)
    return db_exercise


@router.put('/exercise/{exercise_id}', response_model=Exercise)
async def update_exercise(exercise_data: Exercise,
                          exercise_id: int,
                          db: Session = Depends(get_session),
                          current_user: User = Depends(get_current_active_user)):
    exercise = db.select(Exercise, exercise_id)
    if not exercise:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Exercise not found")
    for field, value in exercise_data.model_dump().items():
        setattr(exercise, field, value)
    db.commit()
    db.refresh(exercise)
    return exercise

@router.delete('/exercise/{exercise_id}')
async def delete_exercise(exercise: Exercise,
                          exercise_id: int,
                          db: Session = Depends(get_session),
                          current_user: User = Depends(get_current_active_user)):
    exercise = db.select(Exercise, exercise_id)
    if not exercise:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Exercise not found")
    db.delete(exercise)
    db.commit()
    return {"detail": "Exercise deleted successfully"}

    