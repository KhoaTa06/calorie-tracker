import {NavLink} from "react-router-dom";

interface Props {
    items: Array<{title: string; link: string}>;
}

const NavBar = ({items}: Props) => {
    return(
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Calories Tracker</NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {items.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <NavLink
                                    className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                                    to={item.link}
                                    >
                                        {item.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </nav>
        </>
    )

}

export default NavBar;