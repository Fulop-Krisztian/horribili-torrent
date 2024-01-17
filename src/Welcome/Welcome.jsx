import './Welcome.css'
import { Link } from 'react-router-dom';

function Welcome(props) {

    return (
        <div className="welcome">
            <h1 className="welcometitle" style={{ fontWeight: 'normal' }}>Welcome home,<wbr /> such as it is</h1>
            <h4 style={{ fontWeight: 'normal' }}>This squalid hamlet, these corrupted lands...</h4>
            <img src="public/ancestor.webp" alt=""></img>
            <h4 style={{ fontWeight: 'normal' }}>...they are yours now, and you are bound to them.</h4>
            <Link to="/upload"><button className='horribili-button'>Upload something</button></Link>
        </div>
    );
}
export default Welcome