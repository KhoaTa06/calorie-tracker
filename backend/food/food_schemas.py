from pydantic import BaseModel
from typing import Optional

class FoodCreate(BaseModel):
    name: str
    calories: int
    protein: int
    carbs: int
    fat: int
    fiber: Optional[int] = 0
    sugar: Optional[int] = 0
    vitamin_a: Optional[int] = 0
    vitamin_c: Optional[int] = 0
    calcium: Optional[int] = 0
    iron: int
    potassium: int
    sodium: int
    cholesterol: int
    vitamin_d: int
    metric_serving_amount: int
    metric_serving_unit: str
    fc_food_id: int
    fc_serving_id: int
    fc_image_url: str
    brand_name: str
    food_url: str
    food_description: str
    food_name: str
