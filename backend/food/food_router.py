from fastapi import APIRouter, Depends
from typing import Annotated

from backend.auth.auth_handler import get_current_active_user
from backend.authSchemas import UserResponse
from dbModels import User

router = APIRouter()

@router.get('/food')
async def read_food():
    pass
    