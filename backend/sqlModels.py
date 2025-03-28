from sqlmodel import SQLModel, Field, Relationship, create_engine, Session, TIMESTAMP, Column
from typing import Optional
from datetime import datetime
from dotenv import load_dotenv
import os

class UserBase(SQLModel):
    id: Optional[int] = Field(default=None, primary_key=True)
    first_name: str
    last_name: str
    email: str
    dob: Optional[datetime] = Field()
    admin: bool = False

class User(UserBase, table=True):
    hashed_password: str = Field()

class UserCreate(UserBase):
    password: str

class UserUpdate(UserBase):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    email: Optional[str] = None
    password: Optional[str] = None
    dob: Optional[datetime] = Field()
    admin: Optional[bool] = None

class FoodLog(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    food_id: int = Field(foreign_key="food.id")
    quantity: int
    date: datetime

class Exercise(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    exercise_name: Optional[str]
    repetition: Optional[int]
    weight: Optional[int]
    duration: Optional[datetime] = Field(sa_column=Column(TIMESTAMP(timezone=True), default=None))
    calories: Optional[int]
    date: Optional[datetime] = Field(sa_column=Column(TIMESTAMP(timezone=True), default=datetime.now()))

class Food(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    fc_food_id: Optional[int]
    fc_serving_id: Optional[int]
    fc_image_url: Optional[str]
    food_name: Optional[str]
    brand_name: Optional[str]
    calories: Optional[int]
    protein: Optional[int]
    carbohydrates: Optional[int]
    fat: Optional[int]
    fiber: Optional[int]
    sugar: Optional[int]
    vitamin_a: Optional[int]
    vitamin_c: Optional[int]
    calcium: Optional[int]
    iron: Optional[int]
    potassium: Optional[int]

class DailySummary(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    date: datetime
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

# Create the database engine
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./test.db")
engine = create_engine(DATABASE_URL, echo=True)
SQLModel.metadata.create_all(engine)

# Dependency
def get_session():
    with Session(engine) as session:
        yield session