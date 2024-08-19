import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import ItemList from "../../ItemsArea/ItemList/ItemList";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/items" element={<ItemList />}></Route>
            </Routes>
        </div>
    );
}

export default Routing;
