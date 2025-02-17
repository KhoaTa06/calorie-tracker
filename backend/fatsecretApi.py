import requests
import xml.etree.cElementTree as ET

def parseXml():
    pass


class Fatsecret:
    def __init__(self, client_id="d62c547e7c474c6ea0135645b05cca50", client_secret="ecf8ba39c77d4177943cbe7ed5e67733"):
        self.access_token_url = "https://oauth.fatsecret.com/connect/token"
        self.search_url = "https://platform.fatsecret.com/rest/foods/search/v1"
        self.food_id_url = "https://platform.fatsecret.com/rest/food/v4"
        self.client_id = client_id
        self.client_secret = client_secret
        self.access_token = ""

    def getAccessToken(self):
        data = {"grant_type": "client_credentials",
                                        "scope":"basic",
                                        "client_id": self.client_id,
                                        "client_secret": self.client_secret}
        self.access_token = requests.post(self.access_token_url,
                                      data=data).json()["access_token"]

    def getFoodBarcodes(self, food_name):
        pass

    def getFoodBySearch(self, search_term):
        params = {"search_expression": search_term}
        headers = {"Authorization" : f"Bearer {self.access_token.headers}"}
        try: 
            response = requests.get(self.search_url, headers=headers, params=params)
            response.raise_for_status_code()

            root = ET.fromstring(response.content)

        except requests.exceptions.RequestException as e:
            print("API Request Error: " + e)

        except ET.ParseError as e:
            print("XML Parse Error: ", e)

        food = Food()
        food.parse_xml(response.content)
        return food

    def getFoodById(self, barcode):
        pass


class Food:
    def __init__(self):
        self.food_id
        self.food_name
        self.brand_name
        self.food_type
        self.food_url
        self.food_description

    def parse_xml(self, xml):
        pass


class FoodLog:
    def __init__(self):
        pass




