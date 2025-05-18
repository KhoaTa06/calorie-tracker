import fatsecretApi
import json
import xml.etree.ElementTree as ET

class FoodSearch:
    def __init__(self):
        self.food_id = ""
        self.food_name = ""
        self.brand_name = ""
        self.food_type = ""
        self.food_url = ""
        self.food_description = ""


class FoodId:
    def __init__(self, value):
        # food element
        self.food_id = ""
        self.food_name = ""
        self.food_type = ""
        self.food_url = ""
        self.brand_name = ""

        # food_sub_category element
        self.food_sub_catergory = ""

        # food_image element 
        self.image_url = ""
        self.food_type = ""

        # allergen element
        self.allergen_id = ""
        self.allergen_name = ""
        self.allergen_value = ""

        # preference element
        self.preference_id = ""
        self.preference_name = ""
        self.preference_value = ""

        # serving element 
        self.serving_id = ""
        self.serving_description = ""
        self.serving_url = ""
        self.metric_serving_amount = ""
        self.metric_serving_unit = ""
        self.number_of_units = ""
        self.measurement_description = ""
        self.calories = ""
        self.carbohydrates = ""
        self.protein = ""
        self.fat = ""
        self.saturated_fat = ""
        self.polyunsaturated_fat = ""
        self.monounsaturated_fat = ""
        self.cholesterol = ""
        self.sodium = ""
        self.potassium = ""
        self.fiber = ""
        self.sugar = ""
        self.vitamin_a = ""
        self.vitamin_c = ""
        self.calcium = ""
        self.iron = ""
        self.trans_fat = ""
        self.added_sugar = ""
        self.vitamin_d = ""
