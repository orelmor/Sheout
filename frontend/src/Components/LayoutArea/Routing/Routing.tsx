import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import ItemList from "../../ItemsArea/ItemList/ItemList";
import Cart from "../../ItemsArea/Cart/Cart";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/items" element={<ItemList />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                
            </Routes>
        </div>
    );
}

export default Routing;
