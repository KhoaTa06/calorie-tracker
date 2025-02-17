import numpy as np
import pandas as pd
import requests
import xml.etree.ElementTree as ET
import xml.dom.minidom
import pprint
import db_class


if __name__ == "__main__":
    api_url = "https://platform.fatsecret.com/rest/foods/search/v1?"


    access_token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEwOEFEREZGRjZBNDkxOUFBNDE4QkREQTYwMDcwQzE5NzNDRjMzMUUiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJFSXJkX19ha2tacWtHTDNhWUFjTUdYUFBNeDQifQ.eyJuYmYiOjE3Mzg5ODQzMTIsImV4cCI6MTczOTA3MDcxMiwiaXNzIjoiaHR0cHM6Ly9vYXV0aC5mYXRzZWNyZXQuY29tIiwiYXVkIjoiYmFzaWMiLCJjbGllbnRfaWQiOiJkNjJjNTQ3ZTdjNDc0YzZlYTAxMzU2NDViMDVjY2E1MCIsInNjb3BlIjpbImJhc2ljIl19.jR5Sn1_NRjHxkMQXk2MmLIMimW7vFveLm0rbufQjTJpIRKU6oSuWZY9M6zRT8qAydXyLXdZ9S1TP2WlShomoV_vVgUdKwzmLb8RNItUGi7id5tRiHIHmXZEBrOFlpre_aYoPa-pDkac9wf0xqoWt4N_RHfNxjaLeZy7CxSPCpIDT-FULcez200EtENLU-SrPGJo8p14ZidxyKjScepTo_1_ZUWovnw0gI5cvpDlDvbFArAR7S8Hk0jy9MDyLm-0gRAwCED7QEcbuhzNppOteMCS5AGH2AN7z4LiIQa83zkpYmZoAge-_bzLEv94Oifn0Lz6ZtHWA0pAVSAFc2zlZoF0lT1k52gLve0zZJf2Gu-BJeK39W3Fe_EUNZ4W1iv0zTXbxRn0qgMIqFk0EHhmsyoUbZYfaXVCGyOhE2BJVqVNpgKOy0W9cyywQwL6-E0Ijc-9lEmbokDjQdtwDuKj-oOEafW1fNrkg3E022oXsV0cSlQfPyMZZJG3oiQW8YLZ0KeyNxa_7w9BQXwzucvRPHi5nkryQ6rgcuawy8oklfxMEJwxjkRdg-ccdBdR6Rl7L5mZ5DOcVkM0_fMC25hpZQ6vd81opxiTrhuCMhgFwk8g9i9tuXdBaNvtsnJupCD-p1nXXOLutHRfSKMzYpvE1sWTHCYVfTwMIzHao6SWw53E"

    params = {
        "search_expression": "ground beef"
    }

    headers = {
        "Authorization": f"Bearer {access_token}"
    }

    database = db_class.DatabaseInterface()
    database.create_table()


    # try:
    #     response = requests.get(api_url, headers=headers, params=params)
    #     response.raise_for_status()
    #     print(response.content)
    #     # Parse XML response
    #     root = ET.fromstring(response.content)

    #     # Extract food data
    #     foods = []
    #     for food in root.findall("/food"):
    #         food_id = food.find("food_id").text
    #         food_name = food.find("food_name").text
    #         # foods.append((food_id, food_name))
    #         print(f"Food ID: {food_id}, Food Name: {food_name}")

    # except requests.exceptions.RequestException as e:
    #     print("API Request Error:", e)

    # except ET.ParseError as e:
    #     print("XML Parse Error:", e)
    #     print("Compiled")
