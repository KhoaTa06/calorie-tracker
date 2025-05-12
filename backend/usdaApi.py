import requests
import json
import os
from dotenv import load_dotenv
from sqlmodel import SQLModel, Field, create_engine, Session, Column
from typing import Optional

class USDAApi:
    def __init__(self, env_file=".env"):
        load_dotenv()
        self.api_key = os.getenv("USDA_API_KEY")
        self.endpoint = "https://api.nal.usda.gov/fdc"

    def fetch_single_food(self, fdcId):
        url = f"{self.endpoint}/v1/food/{fdcId}?api_key={self.api_key}"
        response = requests.get(url)
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Error fetching food data: {response.status_code} - {response.text}")
        
    def fetch_multiple_foods(self, fdcIds):
        url = f"{self.endpoint}/v1/foods?api_key={self.api_key}"
        params = {"fdcIds": ",".join(map(str, fdcIds))}
        response = requests.get(url, params=params)
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Error fetching food data: {response.status_code} - {response.text}")
        
    def fetch_food_list(self, page_size=10, page_number=1):
        url = f"{self.endpoint}/v1/foods/list?api_key={self.api_key}"
        params = {"pageSize": page_size, "pageNumber": page_number}
        response = requests.get(url, params=params)
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Error fetching food data: {response.status_code} - {response.text}")
        
    def fetch_food_query(self, query, page_size=10, page_number=1):
        url = f"{self.endpoint}/v1/foods/search?api_key={self.api_key}"
        params = {"query": query, "pageSize": page_size, "pageNumber": page_number}
        response = requests.get(url, params=params)
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Error fetching food data: {response.status_code} - {response.text}")
        
if __name__ == "__main__":
    usda_api = USDAApi()
json.dump(
    usda_api.fetch_single_food("1942314"),
    open("backend/usdaApi_fdcId.json", "w"),
    indent=4)
