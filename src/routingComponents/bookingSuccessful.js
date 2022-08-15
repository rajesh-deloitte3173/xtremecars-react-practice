import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import useFetch from "../components/useFetch";
import '../styles/bookingSuccessful.css';
import photo from '../photos/bookSuccessful.svg';
import explor from '../photos/explorecar.svg';

const BookingSuccessful = () =>{

    const {id} = useParams();
    const {data:carDetails, loading, error} = useFetch(`http://localhost:8080/cars/${id}`);

    const downloadBut = () =>{
        console.log("ds");
    }

    return(
        <div className="container">
            <div className="home-header">
                <Header />
            </div>
            {loading && <p className="loading-class">loading....</p>}
            {error && <p className="error-class">Error occured:- {error}</p>}
            <div className="booked-container">
                <div className="booked-body">
                    <div className="booked-top">
                        <img src={photo}/>
                        <p className="booked-booking">Booking <span className="booked-successful">Successful</span></p>
                        <p className="booked-summary"><span className="booked-download" onClick={downloadBut}>Download</span> the booking summary</p>
                    </div>
                    <div className="booked-bottom">
                        <div className="booked-ex-img">
                            <img src={explor}/>
                        </div>
                        <div className="booked-explore">
                            <p className="booked-expore-text">Explore more</p>
                            <div className="booked-expore-border"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-footer">
                <Footer />
            </div>
        </div>
    );
}

export default BookingSuccessful;