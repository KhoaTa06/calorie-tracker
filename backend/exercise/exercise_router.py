from fastapi import APIRouter, Depends, status, HTTPException
from typing import Annotated
from sqlalchemy.orm import Session
from datetime import datetime

from exercise.exercise_schemas import ExerciseCreate, ExerciseResponse
from exercise.exercise_handler import get_day_exercise, update_exercise, delete_exercise
from auth.auth_handler import get_current_user
from dbModels import Exercise, User
from dbSession import get_db

router = APIRouter()

# @router.get('/exercise', response_model=ExerciseResponse)
# async def get_exercise(exercise: Annotated[Exercise, Depends(get_day_exercise)]):
#     return exercise


@router.post('/exercise')
async def create_exercise(exercise: ExerciseCreate,
                          db: Session = Depends(get_db),
                          current_user: User = Depends(get_current_user)):
    today_date = datetime.now().date()
    new_exercise = Exercise(user_id=current_user.user_id,
                            exercise_name=exercise.name,
                            repetition=exercise.repetition,
                            weight=exercise.weight,
                            duration=exercise.duration,
                            calories=exercise.calories)
    db.add(new_exercise)
    db.commit()
    db.refresh(new_exercise)
    return new_exercise


# @router.put('/exercise/{exercise_id}', response_model=ExerciseResponse)
# async def update_exercise(exercise: Annotated[bool, Depends(update_exercise)]):
#     pass


# @router.delete('/exercise/{exercise_id}')
# async def delete_exercise(exercise: Annotated[bool, Depends(delete_exercise)]):
#     pass