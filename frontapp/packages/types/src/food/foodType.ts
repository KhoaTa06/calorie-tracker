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
