import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
import FoodSearch from '../../components/Food/FoodSearch';
import { FoodContext } from "@frontapp/api_call/FoodContext";
import { useParams, Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";

function FoodSearchResult() {
    const { query } = useParams<{query: string}> ();
    const [searchResults, setSearchResults] = useState<any[]>([]);

    const foodContext = useContext(FoodContext as React.Context<any>);
    const { fetchFoodSearch } = foodContext;

    useEffect(() => {
        try {
            const getFoodSearch = async () => {
            console.log('Searching for:', query);
            const response = await fetchFoodSearch(query);
            setSearchResults(response);
            console.log(response);
            }
            getFoodSearch();
        } catch (error) {
            console.error('Error fetching food data:', error);
        }
    }, [query]);

    return (
        <>
        <SearchBar searchBox={<FoodSearch/>}/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <NavBar />
                </div>

                <div className="col">
                    <ul 
                    className="list-group shadow-sm">
                        {searchResults.map((food, index) => (
                            <Link
                                to={`/food/details/${food.fdcId}`}
                                key={index}
                                className="list-group-item list-group-item-action">
                                    <p>{food.description}</p>
                                    {(() => {
                                        if (food.dataType == "Branded") {
                                            return <p>{food.brandOwner}</p>
                                        }
                                        else {
                                            return <p>{food.dataType}</p>
                                        }
                                    }) ()}
                                </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default FoodSearchResult;