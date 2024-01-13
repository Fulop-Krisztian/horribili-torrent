import { Link } from "react-router-dom";


function Navitems() {
    return (
        <ul className="navbar-items">

            <li className="nav-item">
                <a className="nav-link" href="https://horribili.zapto.org">Horribili</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="https://kaet.zapto.org">KAET</a>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to='/register'>Register</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to='/login'>Sign in</Link>
            </li>

        </ul>
    );


}

export default Navitems