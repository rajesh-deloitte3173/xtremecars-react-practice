import { Link } from "react-router-dom";

const BookingSuccessful = () =>{
    return(
        <div>
            bookingSuccessful <br />
            <Link to="/">home</Link> <br />
            <Link to="/cars">All Cars</Link> <br />
            <Link to="/car/id">Car</Link> <br />
            <Link to="/car/id/book">Car book</Link> <br />
            <Link to="/car/id/success">Car book success</Link>
        </div>
    );
}

export default BookingSuccessful;