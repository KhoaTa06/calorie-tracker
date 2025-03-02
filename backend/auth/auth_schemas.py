from pydantic import BaseModel

class Token(BaseModel):
    access_token: str
    token_type: str


class UserCreate(BaseModel):
    first_name: str
    last_name: str
    dob: str
    email: str
    password: str
    admin: bool


class UserLogin(BaseModel):
    email: str
    password: str


class TokenData(BaseModel):
    email: str | None = None

class UserResponse(BaseModel):
    email: str | None = None
