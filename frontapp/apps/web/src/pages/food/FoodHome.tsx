import NavBar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import Breadcrumb from '../../components/Breadcrumb';
import { AuthorizeNavItems } from '../../components/Constant';
import FoodSearch from '../../components/Food/FoodSearch';

function FoodHome() {
    return (
        <div>
            <SearchBar searchBox={<FoodSearch />} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <NavBar items={AuthorizeNavItems}/>
                    </div>
                    <div className="col">
                                <h1>Food Home</h1>
                                <Breadcrumb items={[{ title: "Food", link: "/food" }]} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodHome;