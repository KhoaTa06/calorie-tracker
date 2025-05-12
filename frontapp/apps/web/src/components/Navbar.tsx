import {NavLink} from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


interface Props {
    items: Array<{title: string; link: string}>;
}

const NavBar = ({items}: Props) => {
    return(
        <>
          <nav className="nav flex-column p-3" style={{width: "5%", position: "fixed"}}>
            <ul className="nav flex-column justify-content-left">
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
          </nav>
        </>
    )

}

export default NavBar;