import "./Header.css";

import Menu from "../Menu/Menu";


function Header(): JSX.Element {
    return (
      <div className="Header">
        <Menu></Menu>
      </div>
     
    );
}

export default Header;
