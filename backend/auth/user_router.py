from fastapi import APIRouter, Depends
from typing import Annotated

from backend.auth.auth_handler import get_current_active_user
from apiSchemas import UserResponse
from dbModels import User

router = APIRouter()

@router.get("/users/me/", response_model=UserResponse)
async def read_user_me(current_user: Annotated[User, Depends(get_current_active_user)]):
    return current_user
