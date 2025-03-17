from sqlmodel import SQLModel, Field, Relationship, DateTime
from typing import Optional
from datetime import datetime

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    first_name: str
    last_name: str
    email: str
    password_hash: str
    dob: DateTime
    admin: bool = False

class FoodLog(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    food_id: int
    quantity: int
    date: DateTime


class Exercise(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    exercise_name: str
    repetition: int
    weight: int
    duration: str
    calories: int
    date: DateTime

class Food(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    fc_food_id: int
    fc_serving_id: int
    fc_image_url: str
    food_name: str
    brand_name: str
    calories: int
    protein: int
    carbohydrates: int
    fat: int
    fiber: int
    sugar: int
    vitamin_a: int
    vitamin_c: int
    calcium: int
    iron: int
    potassium: int

class DailySummary(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    date: DateTime
    total_calories: int
    total_protein: int
    total_carbohydrates: int
    total_fat: int
    total_fiber: int
    total_sugar: int
    total_vitamin_a: int
    total_vitamin_c: int
    total_calcium: int
    total_iron: int
    total_potassium: int
    total_cholesterol: int
    total_sodium: int
    total_exercise_calories: int
    total_exercise_duration: str
