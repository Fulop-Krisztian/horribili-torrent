import Searchbar from "./Searchbar.jsx";
import Navitems from "./Navitems.jsx";
import LoadingBar from "./LoadingBar/LoadingBar.jsx";
import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="header">
            {/* <div className="welcome">
                <h1>We come!</h1>
            </div>*/}
            <section className="navbar">
                <nav className="nav">
                    <Link to="/" className="logo">
                        <img src="public/Horribili_corp.png" alt="Horribili-logo" draggable="false" height="40" />
                    </Link>

                    <Searchbar></Searchbar>
                    <Navitems></Navitems>
                </nav>
                <LoadingBar></LoadingBar>
            </section>

        </header>
    );
}

export default Header