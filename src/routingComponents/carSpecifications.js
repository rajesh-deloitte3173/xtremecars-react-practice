import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import '../styles/carSpecifications.css';
import img1 from '../photos/specification1.svg'
import img2 from '../photos/specification2.svg';
import img3 from '../photos/specificationInterior1.svg';
import img4 from '../photos/specificationInterior2.svg';
import Line from "../components/line";

const CarSpecifications = () =>{
    return(
        <div className="container">
            <div className="home-header">
                <Header />
            </div>
            <div className="specification-container">
                <div className="specification-body">
                    <div className="specification-brand">
                        <p>BMW X5</p>
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
                        <p>Fuel type</p>
                        <p>Petrol and Diesel</p>
                        <p>Engine</p>
                        <p>2993 to 2998 C</p>
                        <p>Torque</p>
                        <p>450 to 620 Nm</p>
                        <p>Acceleration</p>
                        <p>5.5 to 6.5 seconds</p>
                        <p>Top Speed</p>
                        <p>230 to 243 kmph</p>
                        <p>Top Speed</p>
                        <p>230 to 243 kmph</p>
                        <p>Variants</p>
                        <p>The BMW X5 comes in four distinctive trims starting with the entry-level X5 xDrive40i SportX Plus, xDrive30d SportX Plus, xDrive30d Luxury Line and xDrive40i M Sport.</p>
                    </div>
                    <div className="specification-line-2">
                    <Line num={2}/>
                    </div>
                    <div className="specification-img-2">
                        <img src={img2}/>
                    </div>
                    <div className="specification-cont-2">
                        <p>Exteriors</p>
                        <div>color</div>
                        <p>Exteriors</p>
                        <p>This mid-size SUV measures 4,922mm in length and has a 2,975mm wheelbase. Besides, BMW has given it a one-piece kidney grille with flashy chrome trimming and large air inlets in the front bumper. </p>
                    </div>
                    <div className="specification-line-3">
                    <Line num={3}/>
                    </div>
                    <div className="specification-img-3">
                        <img src={img3}/>
                        <img src={img4} />
                    </div>
                    <div className="specification-cont-3">
                        <p>Interior finishes</p>
                        <div>color</div>
                        <ul>
                            <li>X5 has a high-end cockpit</li>
                            <li> Vernasca leather upholstery for the seats</li>
                            <li>A panoramic sunroof</li>
                            <li>Four-zone temperature control</li>
                            <li>BMW display key,</li>
                            <li>heads-up display, parking and reversing assistance </li>
                            <li>Surround-view cameras and attentiveness attention.</li>
                        </ul>
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