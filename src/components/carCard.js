import { Link } from 'react-router-dom';
import '../styles/carCard.css';
// import photo from '../photos/img1.svg'
import img1 from '../photos/img1.svg';
import img2 from '../photos/img2.svg';
import img3 from '../photos/img3.svg';
import img4 from '../photos/img4.svg';

const CarCard = ({car, photo}) => {

    return (
        <Link to={`/car/${car.id}`} className='car-card'>
            <div>
                <img src={photo} />
            </div>
            <div className="car-card-disc">
                <p className='car-brand-name'>{car.brand}</p>   
                <p className='car-price'>{car.cost} lakh onwards</p>
            </div>
        </Link>
    );
}

export default  CarCard;