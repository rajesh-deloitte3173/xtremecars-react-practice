import { useParams } from "react-router-dom";

const BookingPage = () =>{
    const {id} = useParams();
    return(
        <div>
            bookingPage {id}
        </div>
    );
}

export default BookingPage;