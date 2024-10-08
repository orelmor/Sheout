import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">


            <header>
                <Header></Header>
            </header>
            <main>
                <Routing></Routing>
            </main>
            <footer>
            <Footer></Footer>

            </footer>
        </div>
    );
}

export default Layout;
