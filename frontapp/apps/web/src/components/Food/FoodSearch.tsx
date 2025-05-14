import React, {useState} from 'react';
// import {FoodContext} from '@frontapp/api_call/FoodContext';
import {useNavigate} from 'react-router-dom';

function FoodSearch() {
    // const foodContext = useContext(FoodContext as React.Context<any>);
    // const { fetchFoodSearch } = foodContext;

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    // const [searchResults, setSearchResults] = useState<any[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }

    const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            // try {
            //     console.log('Searching for:', searchQuery);
            //     const response = await fetchFoodSearch(searchQuery);
            //     setSearchResults(response);
            //     console.log(response);
            // } catch (error) {
            //     console.error('Error fetching food data:', error);
            // }
            navigate(`/food/search/${searchQuery}`);
        }
    }

    return (
        <>
        <div className="container position-relative">
            <input type="search" className="form-control me-2" onChange={handleChange} onKeyDown={handleSearch} placeholder="Search for food..." />
        </div>
        </>

    )
}

export default FoodSearch;