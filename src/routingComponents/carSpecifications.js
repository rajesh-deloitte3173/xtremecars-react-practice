import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import '../styles/carSpecifications.css';
import img1 from '../photos/specification1.svg'
import img2 from '../photos/specification2.svg';
import img3 from '../photos/specificationInterior1.svg';
import img4 from '../photos/specificationInterior2.svg';
import Line from "../components/line";
import useFetch from "../components/useFetch";

const CarSpecifications = () =>{

    const {id} = useParams();

    const {data:carDetails, loading, error} = useFetch(`http://localhost:8080/cars/${id}`);

    return(carDetails &&
        <div className="container">
            <div className="home-header">
                <Header />
            </div>
            <div className="specification-container">
                <div className="specification-body">
                    <div className="specification-brand">
                        <p>{carDetails.brand}</p>
                    </div>
                    <div className="specification-headSpecif">
                       <p>Car <span>Specifications</span></p>
                    </div>
                    <div className="specification-line-1">
                        <Line num={1}/>
                    </div>
                    <div className="specification-img-1">
                        <img src={img1}/>
                    </div>
                    <div className="specification-cont-1">
                        <p className="specification-label">Fuel type</p>
                        <p className="specification-value">{carDetails.fuelType}</p><br />
                        <p className="specification-label">Engine</p>
                        <p className="specification-value">{carDetails.engine}</p> <br />
                        <p className="specification-label">Torque</p>
                        <p className="specification-value">{carDetails.torque}</p><br />
                        <p className="specification-label">Acceleration</p>
                        <p className="specification-value">{carDetails.accelarition}</p><br />
                        <p className="specification-label">Top Speed</p>
                        <p className="specification-value">{carDetails.topSpeed}</p><br />
                        <p className="specification-label">Variants</p>
                        <p className="specification-value">The BMW X5 comes in four distinctive trims starting with the entry-level X5 xDrive40i SportX Plus, xDrive30d SportX Plus, xDrive30d Luxury Line and xDrive40i M Sport.</p>
                    </div>
                    <div className="specification-line-2">
                    <Line num={2}/>
                    </div>
                    <div className="specification-img-2">
                        <img src={img2}/>
                    </div>
                    <div className="specification-cont-2">
                        <p className="specification-sidehead">Exteriors</p><br />
                        <div className="specification-color" style={{backgroundColor: `${carDetails.exteriorColor}` }} /><br />
                        <p className="specification-label">Exteriors</p>
                        <p className="specification-value">This mid-size SUV measures 4,922mm in length and has a 2,975mm wheelbase. Besides, BMW has given it a one-piece kidney grille with flashy chrome trimming and large air inlets in the front bumper. </p>
                    </div>
                    <div className="specification-line-3">
                    <Line num={3}/>
                    </div>
                    <div className="specification-img-3">
                        <img src={img3}/>
                        <img src={img4} />
                    </div>
                    <div className="specification-cont-3">
                        <p className="specification-sidehead">Interior finishes</p><br/>
                        <div className="specification-color" style={{backgroundColor: `${carDetails.interiorColor}` }}/><br />
                        <ul>
                            <li className="specification-value">X5 has a high-end cockpit</li>
                            <li className="specification-value">Vernasca leather upholstery for the seats</li>
                            <li className="specification-value">A panoramic sunroof</li>
                            <li className="specification-value">Four-zone temperature control</li>
                            <li className="specification-value">BMW display key,</li>
                            <li className="specification-value">heads-up display, parking and reversing assistance </li>
                            <li className="specification-value">Surround-view cameras and attentiveness attention.</li>
                        </ul><br />
                        <div className="specification-cost">
                            <p>Cost</p>
                            <p>{carDetails.cost} Lakh</p>
                        </div>
                    </div>
                    <div className="specification-book">
                        <div><Link to={`/car/${id}/book`} className="but">BOOK NOW</Link></div>
                    </div>
                </div>
            </div>
            <div className="home-footer">
                <Footer />
            </div>
        </div>
    );
}

export default CarSpecifications;