import '../styles/header.css';
import Logo from '../photos/carlogo.svg';
import { Link } from 'react-router-dom';
const Header = () => {

    return (
        <div className="header">
            <div className="brand">
                <img src={Logo} />
                <p>XTREME<span>CARS</span></p>
            </div>
            <div className="nav-middle">
                <Link to="#" className='nav-middle-link'><p>NEW CARS</p></Link>
                <Link to="#" className='nav-middle-link'><p>USED CARS</p></Link>
            </div>
            <div className="profile">
                <Link to="#" className='profile-link'><p>MY PROFILE</p></Link>
            </div>
        </div>
    );
}

export default Header;