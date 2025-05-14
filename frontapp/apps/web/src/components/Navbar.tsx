import {NavLink} from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const NavBar = () => {
    const foodNavItems = [
        { title: "Discover Food", link: "/food" },
        { title: "Food Log", link: "/food/diary" },]

    const exerciseNavItems = [
        { title: "Exercise Summary", link: "/exercise/summary" },
        { title: "Exercise Log", link: "/exercise/log" },]

    return(
        <>
          <nav className="nav flex-column p-3" style={{position: "fixed"}}>
            <ul className="list-unstyled ps-0">

                <li className="mb-1">
                    <NavLink
                        className="link-dark"
                        to="/dashboard"
                        >
                            Dashboard
                    </NavLink>
                </li>

                <li className="mb-1">
                    <button
                    className="btn btn-toggle align-items-center rounded collapsed dropdown-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFood"
                    aria-expanded="false"                    
                    >
                        Food
                    </button>
                    <div className="collapse" id="collapseFood">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            {foodNavItems.map((item, index) => (
                                <li key={index}>
                                <NavLink
                                    className="link-dark rounded"
                                    to={item.link}
                                    >
                                        {item.title}
                                </NavLink>
                            </li>))}
                        </ul>
                    </div>
                </li>
                    
                <li className="mb-1">
                    <button
                    className="btn btn-toggle align-items-center rounded collapsed dropdown-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExercise"
                    aria-expanded="false"                    
                    >
                        Exercise
                    </button>
                    <div className="collapse" id="collapseExercise">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            {exerciseNavItems.map((item, index) => (
                                <li key={index}>
                                <NavLink
                                    className="link-dark rounded"
                                    to={item.link}
                                    >
                                        {item.title}
                                </NavLink>
                            </li>))}
                        </ul>
                    </div>
                </li>
            </ul>
          </nav>
        </>
    )
}

export default NavBar;