interface ABridgedFoodNutrient {
    number: number;
    name: string;
    amount: number;
    unitName: string;
    derivationCode: string;
    derivationDescription: string;
}

interface SearchResultFood {
    fdcId: number;
    dataType: string | null;
    description: string;
    foodCode: string | null;
    foodNutrients: ABridgedFoodNutrient[];
    publicationDate: string | null;
    scientificName: string | null;
    brandOwner: string | null;
    gtinUpc: string | null; //Only applies to branded foods
    ingredients: string | null;
    ndbNumber: number | null;
    additionalDescriptions: string | null;
    allHighlihtFields: string | null;
    score: number | null;
}

interface FoodSearchCriteria {
    query: string;
    generalSearchInput: string;
}

// This interface for /v1/foods/search endpoint
export interface SearchResult {
    foodSearchCriteria: FoodSearchCriteria;
    totalHits: number;
    currentPage: number;
    totalPages: number;
    foods: SearchResultFood[];
}

// Interfaces for /v1/foods endpoint
// ABridgedFoodItem
// BrandedFoodItem
// FoundationFoodItem
// SRLegacyFoodItem
// SurveyFoodItem

// This interface for /v1/foods/list endpoint
export interface ABridgedFoodItem {
    dataType: string;
    description: string;
    fdcId: number;
    foodNutrients: ABridgedFoodNutrient[];
    publicationDate: string;
    brandOwner: string | null;
}

export interface BrandedFoodItem {
    fdcId: number;
    brandOwner: string;
    dataSource: string;
    dataType: string;
    description: string;
    ingredients: string;
    foodNutrients: ABridgedFoodNutrient[];
    publicationDate: string;
    servingSize: number;
    servingSizeUnit: string;
}

export interface FoundationFoodItem {
    fdcId: number;
    dataType: string;
    description: string;
    foodNutrients: ABridgedFoodNutrient[];
    foodCatergory: string;
    publicationDate: string;
}

export interface SurveyFoodItem {
    fdcId: number;
    dataType: string;
    description: string;
    foodNutrients: ABridgedFoodNutrient[];
    foodCategory: string;
    publicationDate: string;
}

export interface SRLegacyFoodItem {
    fdcId: number;
    dataType: string;
    description: string;
    foodNutrients: ABridgedFoodNutrient[];
    foodCatergory: string;
    publicationDate: string;
}

export interface FoodLogProps {
    food_id: number;
    quantity: number;
    unit: string;
    date: string;
}

export const blackListNutrient = [
    "SFA 4:0",
    "SFA 6:0",
    "SFA 8:0",
    "SFA 10:0",
    "SFA 12:0",
    "SFA 14:0",
    "SFA 16:0",
    "SFA 18:0",
    "MUFA 18:1",
    "PUFA 18:2",
    "PUFA 18:3",
    "PUFA 20:4",
    "PUFA 22:6 n-3 (DHA)",
    "MUFA 16:1",
    "PUFA 18:4",
    "MUFA 20:1",
    "PUFA 20:5 n-3 (EPA)",
    "MUFA 22:1",
    "PUFA 22:5 n-3 (DPA)"
]
