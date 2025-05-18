import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function ExerciseSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }
    const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            console.log('Searching for:', e.currentTarget.value);
            navigate(`/exercise/search/${searchQuery}`);
        }
    }

    return (
        <>
        <div className="container position-relative">
            <input type="search" className="form-control me-2" onChange={handleChange} onKeyDown={handleSearch} placeholder="Search for exercise entry..."/>
        </div>
        </>
    )
}

export default ExerciseSearch;