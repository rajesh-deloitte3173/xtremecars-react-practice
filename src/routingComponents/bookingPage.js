import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import '../styles/bookingpage.css';
import photo from '../photos/bookSuccessful.svg';
import useFetch from "../components/useFetch";
import { useState } from "react";

const BookingPage = () =>{
    const {id} = useParams();

    const {data:carDetails, loading, error} = useFetch(`http://localhost:8080/cars/${id}`);

    const [userName,setName] = useState('');
    const [contactNumber,setNum] = useState('');
    const [city,setCity] = useState('visakhapatnam');

    const sendDetails = () =>{
        const bookCar = {userName,contactNumber,city};
        console.log(userName, contactNumber, city);
        fetch(`http://localhost:8080/cars/${id}`,{
            method:'PUT',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(bookCar)
        })
    }

    return(
        <div className="container">
            <div className="home-header">
                <Header />
            </div>
            {loading && <p className="loading-class">loading....</p>}
            {error && <p className="error-class">Error occured:- {error}</p>}
            {carDetails &&
                <div className="booking-container">
                <div className="booking-body">
                    <div className="booking-details">
                        <p className="booking-head">Car <span>Details</span></p>
                        <img src={photo}/>
                        <p className="booking-brand">{carDetails.brand}</p>
                        <p className="booking-shead-label">Fuel type</p>
                        <p className="booking-shead-value">{carDetails.fuelType}</p><br/>
                        <p className="booking-shead-label">Engine</p>
                        <p className="booking-shead-value">{carDetails.engine}</p><br/><br/>
                        <Link to={`/car/${id}`} className="booking-viewall">View all details</Link>
                    </div>
                    <div className="booking-form-section">
                        <p className="booking-form-head">Booking <span>Details</span></p>
                        <form>
                            <label className="booking-form-label">Name</label> <br/>
                            <input className="booking-form-input" type="text" placeholder="Entry your name..." value={userName} onChange={(e)=>setName(e.target.value)}/><br/>
                            <label className="booking-form-label">Contact Number</label><br/>
                            <input className="booking-form-input" type="text" placeholder="+91 9640432623" value={contactNumber} onChange={(e)=>setNum(e.target.value)}/><br/>
                            <label className="booking-form-label">City</label><br/>
                            <select className="booking-form-input booking-form-select" value={city} onChange={(e)=>setCity(e.target.value)}>
                                <option value="visakhapatnam"> Visakhapatnam</option>
                                <option value="bengaluru"> Bengaluru</option>
                                <option value="hyderabad"> Hyderabad</option>
                                <option value="delhi"> Delhi</option>
                            </select><br/>
                            <input type="checkbox"/>
                            <label className="booking-form-label ">I accept the Terms and conditions</label>
                            <p className="booking-form-terms-head">Terms and conditions:</p>
                            <p className="booking-form-terms-body">*Terms and conditions apply. All offers are from dealers. Please get in touch with your nearest dealer for detailed terms and conditions. All taxes are additional. Offer valid till February 15, 2022 and is subject to change without prior notice. Calculations for the following are for a specific tenure mileage and finance amount.</p>
                            <div className="booking-form-link">
                                <Link to={`/car/${id}/success`} className="booking-form-button " onClick={sendDetails}>SUBMIT</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            }
            <div className="home-footer">
                <Footer />
            </div>
        </div>
    );
}

export default BookingPage;