import psycopg2
from config import DB_CONFIG
from sqlalchemy import create_engine, MetaData, ForeignKey, Column, String, Integer, CHAR
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from dotenv import load_dotenv
import os
from dbModels import Base

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
metadata = MetaData()

def get_db():
    db = Session()
    try:
        yield db
    finally:
        db.close()

Base.metadata.create_all(engine)

