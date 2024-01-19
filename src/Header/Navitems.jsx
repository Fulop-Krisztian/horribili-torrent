import { Link } from "react-router-dom";


function Navitems() {
    return (
        <ul className="navbar-items">

            <li className="nav-item"> 
                <Link className="nav-link" to="/upload">Upload</Link>
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