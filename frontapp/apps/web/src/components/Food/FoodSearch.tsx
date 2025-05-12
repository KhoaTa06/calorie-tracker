import React, {useContext, useState} from 'react';
import {FoodContext} from '@frontapp/api_call/FoodContext';
import {Link} from 'react-router-dom';

function FoodSearch() {
    const foodContext = useContext(FoodContext as React.Context<any>);
    const { fetchFoodSearch } = foodContext;

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }

    const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            try {
                console.log('Searching for:', searchQuery);
                const response = await fetchFoodSearch(searchQuery);
                setSearchResults(response);
                console.log(response);
            } catch (error) {
                console.error('Error fetching food data:', error);
            }
        }
    }

    return (
        <>
        <div className="container position-relative">
            <input type="search" className="form-control me-2" onChange={handleChange} onKeyDown={handleSearch} placeholder="Search for food..." />

            {/* <div className="shadow-sm" style={{ position: 'absolute', zIndex: 1000 , width: '100%'}}> */}
                <ul 
                className="list-group shadow-sm" 
                style={{ maxHeight: '400px', overflowY: 'auto', zIndex: 1000, position: 'absolute', width: "100%"}}>
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
            {/* </div> */}
        </div>
        </>

    )
}

export default FoodSearch;