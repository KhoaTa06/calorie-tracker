from pydantic import BaseModel

class ExerciseCreate(BaseModel):
    name: str
    repetition: int
    weight: int
    duration: str
    calories: int


class ExerciseResponse(BaseModel):
    name: str
    repetition: int
    weight: int
    duration: str
    calories: int