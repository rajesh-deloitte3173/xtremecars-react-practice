import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import '../styles/home.css';
import sedenback from '../photos/sedanBack.png';
import svuback from '../photos/svuBack.png';
import hatchback from '../photos/hatchBack.png';
import coupeback from '../photos/coupeBack.png';

const Home = () =>{

    const [selectSedan, setSelectSedan] = useState("selected-car-name");
    const [selectSuv, setSelectSuv] =useState("select-car-name");
    const [selectHatch, setSelectHatch] =useState("select-car-name");
    const [selectCoupe, setSelectCoupe] =useState("select-car-name");
    const [backgroundImg, setbackgroundImg] = useState(sedenback);

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
                featured cars
            </div>
            <div className="home-footer">
                <Footer />
            </div>
        </div>
    );
}

export default Home;