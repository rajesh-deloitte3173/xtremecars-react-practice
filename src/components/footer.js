import { Link } from 'react-router-dom';
import '../styles/footer.css';
import facebook from '../photos/facebook.svg';
import twitter from '../photos/twitter.svg';
import insta from '../photos/insta.svg';

const Footer = () => {

    return (
        <div className="footer">
            <div className="contact">
                <p className='footer-headings'>Contact</p> <br />
                <Link to="#" className='footer-links'>Request a Test Drive</Link>
                <Link to="#" className='footer-links'>Book Car</Link>
                <Link to="#" className='footer-links'>Career</Link>
                <Link to="#" className='footer-links'>Contact Us</Link>
            </div>
            <div className="address">
                <p className='footer-headings'>Xtremecars:</p> <br />
                <p className='full-address'>12th Floor, Vishwaroop IT Park, Sector 32, Vashi, Navi Mumbai - 400705. Maharashtra, India</p> 
                <p>Phone: +91 (22) 612 800000</p>
            </div>
            <div className="legal">
                <p className='footer-headings'>Legal</p> <br />
                <p className='legal-cont'>Legal Disclaimer/Imprint </p>
                <p className='legal-cont'>Privacy Policy</p>
                <p className='legal-cont'>Cookie Policy</p>
            </div>
            <div className="social">
                <p className='footer-headings'>Connect with us</p>
                <div><Link to="#"><img src={facebook} /></Link></div>
                <div><Link to="#"><img src={twitter} /></Link></div>
                <div><Link to="#"><img src={insta} /></Link></div> 
            </div>
        </div>
    );
}

export default Footer;