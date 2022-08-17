import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import '../styles/home.css';
import sedenback from '../photos/sedanBack.png';
import svuback from '../photos/svuBack.png';
import hatchback from '../photos/hatchBack.png';
import coupeback from '../photos/coupeBack.png';
import img1 from '../photos/img1.svg';
import img2 from '../photos/img2.svg';
import img3 from '../photos/img3.svg';
import img4 from '../photos/img4.svg';
import img5 from '../photos/img5.svg';
import { Link } from "react-router-dom";
import CarCard from "../components/carCard";
import useFetch from "../components/useFetch";

const Home = () =>{

    const [selectSedan, setSelectSedan] = useState("selected-car-name");
    const [selectSuv, setSelectSuv] =useState("select-car-name");
    const [selectHatch, setSelectHatch] =useState("select-car-name");
    const [selectCoupe, setSelectCoupe] =useState("select-car-name");
    const [backgroundImg, setbackgroundImg] = useState(sedenback);
    
    const {data:allCars, loading, error} = useFetch('http://localhost:8080/cars');

    const clickOnCar = (carName) =>{
        switch(carName){
            case "sedan":{
                setSelectSedan("selected-car-name");
                setSelectSuv("select-car-name");
                setSelectHatch("select-car-name");
                setSelectCoupe("select-car-name");
                setbackgroundImg(sedenback);
                break;
            }
            case "svu":{
                setSelectSedan("select-car-name");
                setSelectSuv("selected-car-name");
                setSelectHatch("select-car-name");
                setSelectCoupe("select-car-name");
                setbackgroundImg(svuback);
                break;
            }
            case "hatch":{
                setSelectSedan("select-car-name");
                setSelectSuv("select-car-name");
                setSelectHatch("selected-car-name");
                setSelectCoupe("select-car-name");
                setbackgroundImg(hatchback);
                break;
            } 
            case "coupe":{
                setSelectSedan("select-car-name");
                setSelectSuv("select-car-name");
                setSelectHatch("select-car-name");
                setSelectCoupe("selected-car-name");
                setbackgroundImg(coupeback);
                break;
            }
        }
    }

    return(
        <div className="container">
            <div className="home-header">
                <Header />
            </div>
            <div className="selectionbar">
                <div className="select-car">
                    <p className={selectSedan} onClick={() => clickOnCar("sedan")}>SEDAN</p>
                    <p className={selectSuv} onClick={() => clickOnCar("svu")}>SUV</p>
                    <p className={selectHatch} onClick={() => clickOnCar("hatch")}>HATCHBACK</p>
                    <p className={selectCoupe} onClick={() => clickOnCar("coupe")}>COUPE</p>
                </div>
                <div className="bodytype">
                    <p>BODY TYPE</p>
                </div>
            </div>
            <div className="selected-car" style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1400px 700px',
                backgroundPosition: 'center'
            }}>
                <div className="car-entery-box">
                    <input type="text" className="car-input-box" placeholder="Enter car name..."/>
                    <button className="car-search-button">SEARCH</button>
                </div>
            </div>
            <div className="featured-cars">
                <div className="fatured-cars-heading">
                    <p>Featured <span>Cars</span></p>
                </div>
                <div className="featured-cars-selectionbar">
                    <div className="featured-cars-selectitems">
                        <p className="featured-cars-selectitem featured-cars-selecteditem">Popular</p>
                        <p className="featured-cars-selectitem">Just launched</p>
                        <p className="featured-cars-selectitem">Upcoming</p>
                    </div>
                    <div className="featured-cars-viewall">
                        <Link to="/cars" className="viewall-button">View all</Link>
                    </div>
                </div>
                 
                <div className="featured-cars-body">
                    {loading && <p className="loading-class">loading....</p>}
                    {error && <p className="error-class">Error occured:- {error}</p>}
                    {allCars && <CarCard car={allCars[0]} photo={img1}/>}
                    {allCars && <CarCard car={allCars[1]} photo={img2}/>}
                    {allCars && <CarCard car={allCars[2]} photo={img3}/>}
                    {allCars && <CarCard car={allCars[3]} photo={img4}/>}
                    {allCars && <CarCard car={allCars[4]} photo={img5}/>}
                </div>
            </div>
            <div className="home-footer">
                <Footer />
            </div>
        </div>
    );
}

export default Home;