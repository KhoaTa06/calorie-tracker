from fastapi import APIRouter, Depends
from typing import Annotated

from exercise.exercise_schemas import ExerciseCreate, ExerciseResponse
from exercise.exercise_handler import get_day_exercise, create_exercise, update_exercise, delete_exercise
from dbModels import Exercise

router = APIRouter()

@router.get('/exercise', response_model=ExerciseResponse)
async def get_exercise(exercise: Annotated[Exercise, Depends(get_day_exercise)]):
    return exercise

@router.post('/exercise', response_model=ExerciseResponse)
async def create_exercise(exercise: Annotated[bool, Depends(create_exercise)]):
    pass

@router.put('/exercise/{exercise_id}', response_model=ExerciseResponse)
async def update_exercise(exercise: Annotated[bool, Depends(update_exercise)]):
    pass

@router.delete('/exercise/{exercise_id}')
async def delete_exercise(exercise: Annotated[bool, Depends(delete_exercise)]):
    pass