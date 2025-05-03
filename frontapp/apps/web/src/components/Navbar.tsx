import {useNavigate} from "react-router-dom";

const NavBar = () => {
    let navigate = useNavigate();

    return(
        <>
        <div className="navbar navbar-expand-lg navbar-light bg-green">
            <h1 className="navbar-brand">Calories Tracker</h1>

            <button className="btn" type="button" onClick={()=>navigate("/")}>
                Sign In
            </button>

            <button className="btn" type="button" onClick={()=>navigate("/signup")}>
                Signup
            </button>
        </div>
        </>
    )

}

export default NavBar;