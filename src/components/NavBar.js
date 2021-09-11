import { NavLink } from "react-router-dom"
import logo from "../images/logo512.png"


function NavBar() {

    return (
        <nav>
            <img alt='logo' src={logo} />
            <NavLink to="/gallery">All Photos</NavLink>
            <NavLink to="/albums">Albums</NavLink>
            <NavLink to="/locations">Locations</NavLink>
        </nav>
    )
}

export default NavBar;