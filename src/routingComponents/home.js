import Footer from "../components/footer";
import Header from "../components/header";

const Home = () =>{
    return(
        <div className="container">
            <div className="home-header">
                <Header />
            </div>
            <div className="selectionbar">
                selection bar
            </div>
            <div className="selected-car">
                car
            </div>
            <div className="featured-cars">
                featured cars
            </div>
            <div className="home-footer">
                <Footer />
            </div>
        </div>
    );
}

export default Home;