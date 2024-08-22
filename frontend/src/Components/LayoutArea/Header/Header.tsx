import CategoriesDropdown from "../../ItemsArea/CategoriesDropdown/CategoriesDropdown";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <ul>
        <NavLink to="/items">Items</NavLink>
        <NavLink to="/cart">Carts</NavLink>
        <NavLink to="/deals">Deals</NavLink>
      </ul>
      <div className="searchBox">
        <input type="search" name="" id="" placeholder="search items" />
      </div>
      <div className="categories">
        <CategoriesDropdown></CategoriesDropdown>
      </div>
      <div className="userLog">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </div>
  );
}

export default Header;
