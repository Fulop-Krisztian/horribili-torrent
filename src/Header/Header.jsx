import Searchbar from "./Searchbar.jsx";
import Navitems from "./Navitems.jsx";
import LoadingBar from "./LoadingBar/LoadingBar.jsx";

function Header() {
    return (
        <header className="header">
           {/* <div className="welcome">
                <h1>We come!</h1>
            </div>*/}
            <section className="navbar">
                <nav className="nav">
                    <a href="/" className="logo">
                        <img src="src/assets/Horribili_corp.png" alt="Horribili-logo" draggable="false" height="40" />
                    </a>
                    <Searchbar></Searchbar>
                    <Navitems></Navitems>
                </nav>
                <LoadingBar></LoadingBar>
            </section>

        </header>
    );
}

export default Header