import {NavLink} from 'react-router-dom';

interface Props {
    searchBox?:JSX.Element;
}

function SearchBar({searchBox}: Props) {
    return (
        <>
        <nav className="navbar navbar-expand=lg">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Calories Tracker</NavLink>
                <div className="flex-grow-1 mx-4">{searchBox}</div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profile">Profile</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default SearchBar;