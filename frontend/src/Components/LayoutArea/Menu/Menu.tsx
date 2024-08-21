import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<ul>
                <NavLink to="/items">Items</NavLink>
                <NavLink to="/cart">Carts</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
            </ul>
            <input type="search" name="" id="" placeholder="search items" />
        </div>
    );
}

export default Menu;
