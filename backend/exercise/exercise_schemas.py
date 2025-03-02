from pydantic import BaseModel

class ExerciseCreate(BaseModel):
    type: str
    repetition: int
    weight: int
    duration: str

class ExerciseResponse(BaseModel):
    type: str
    repetition: int
    weight: int
    duration: str