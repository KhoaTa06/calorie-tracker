from sqlalchemy import Column, Integer, String, Boolean, CHAR, ForeignKey
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'

    user_id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    email = Column(String(50), nullable=False, unique=True)
    pw_hash = Column(String(255), nullable=False)
    dob = Column(String(20), nullable=False)
    admin = Column(Boolean, default=False)

class FoodLog(Base):
    __tablename__ = 'food_logs'

    food_log_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.user_id'))
    food_id = Column(Integer, nullable=False)
    quantity = Column(Integer, nullable=False)
    date = Column(String(20), nullable=False)

class WorkOut(Base):
    __tablename__ = 'work_out'

    workout_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.user_id'))
    exercise = Column(String)
    repetition = Column(int)
    weight = Column(int)
    duration = Column(String)

class Food(Base):
    __tablename__ = 'food'

    food_id = Column(Integer, primary_key=True, index=True)
    fc_food_id = Column(Integer)
    fc_serving_id = Column(Integer)
    fc_image_url = Column(String)
    food_name = Column(String(100), nullable=False)
    brand_name = Column(String(100), nullable=False)
    # food_url = Column(String(255), nullable=False)
    # food_description = Column(String(255), nullable=False)
    calories = Column(Integer, nullable=False)
    protein = Column(Integer, nullable=False)
    carbohydrates = Column(Integer, nullable=False)
    fat = Column(Integer, nullable=False)
    fiber = Column(Integer, nullable=False)
    sugar = Column(Integer, nullable=False)
    vitamin_a = Column(Integer, nullable=False)
    vitamin_c = Column(Integer, nullable=False)
    calcium = Column(Integer, nullable=False)
    iron = Column(Integer, nullable=False)
    potassium = Column(Integer, nullable=False)
    sodium = Column(Integer, nullable=False)
    cholesterol = Column(Integer, nullable=False)
    calcium = Column(Integer, nullable=False)
    vitamin_d = Column(Integer, nullable=False)
    metric_serving_amount = Column(Integer, nullable=False)
    metric_serving_unit = Column(String(10), nullable=False)
