from fastapi import Depends, HTTPException, status, APIRouter
from sqlalchemy.orm import Session
from dbModels import Exercise

from dbSession import get_db
# from exercise.exercise_schemas import Exercise

def get_day_exercise(db: Session, exercise_name: str):
    pass

def update_exercise(db: Session, exercise_id: int, exercise_name: str):
    pass

def delete_exercise(db: Session, exercise_id: int):
    pass