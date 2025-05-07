import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Breadcrumb from '../../components/Breadcrumb';
import { AuthorizeNavItems } from '../../components/Constant';

function FoodHome() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/food/id');
    };

    return (
        <div>
            <Navbar items={AuthorizeNavItems}/>
            <h1>Food Home</h1>
            <Breadcrumb items={[{ title: "Food", link: "/food" }, { title: "Food Home", link: "/food/home" }]} />
            <button onClick={handleNavigation} className="btn btn-primary">
            Go to Food ID
            </button>
        </div>
    );
}

export default FoodHome;