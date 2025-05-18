from sqlmodel import SQLModel, Field, Relationship, create_engine, Session, TIMESTAMP, Column, JSON
from typing import Optional, List
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
    user_id: Optional[int] = Field(foreign_key="user.id")
    food_id: int = Field(foreign_key="food.fdcId")
    quantity: int
    unit: str
    date: datetime

class UpdateFoodLog(SQLModel):
    id: int
    food_id: int
    quantity: int
    unit: str
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

class foodNutrient(SQLModel):
    name: str
    amount: float
    unitName: str

class Food(SQLModel, table=True):
    fdcId: int = Field(primary_key=True)
    dataType: str
    description: str
    foodCatergory: str
    foodNutrients: List[foodNutrient] = Field(sa_type=JSON)
    publicationDate: str
    brandOwner: str
    dataSource: str
    ingredients: str
    servingSize: int
    servingSizeUnit: str

    class Config:
        arbitrary_types_allowed = True

class DailySummary(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    date: datetime
    total_calories_intake: int
    total_calories_burned: int
    total_protein: int
    total_carbohydrates: int
    total_fat: int
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