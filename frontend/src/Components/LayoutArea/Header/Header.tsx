import "./Header.css";
import { NavLink } from "react-router-dom";




function Header(): JSX.Element {
    return (
      <div className="Header">
        <ul>
                <NavLink to="/items">Items</NavLink>
                <NavLink to="/cart">Carts</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/deals">Deals</NavLink>
            </ul>
            <input type="search" name="" id="" placeholder="search items" />
      </div>
     
    );
}

export default Header;
