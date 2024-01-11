import Searchbar from "./Searchbar.jsx";
import Navitems from "./Navitems.jsx";

function Header() {
    return (
        <header>
            <div class="welcome">
                <h1>We come!</h1>
            </div>
            <section class="navbar">
                <nav class="nav">
                    <a href="/" class="logo">
                        <img src="/images/Horribili_corp.png" alt="Horribili-logo" draggable="false" height="40"></img>
                    </a>
                    <Searchbar></Searchbar>
                    <Navitems></Navitems>
                </nav>
            </section>

        </header>
    );
}

export default Header