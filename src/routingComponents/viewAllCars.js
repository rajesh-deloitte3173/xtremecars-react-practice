import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import useFetch from "../components/useFetch";
import "../styles/viewAllCars.css";

import img1 from '../photos/img1.svg';
import img2 from '../photos/img2.svg';
import img3 from '../photos/img3.svg';
import img4 from '../photos/img4.svg';
import img5 from '../photos/img5.svg';
import img6 from '../photos/img6.svg';
import img7 from '../photos/img7.svg';
import img8 from '../photos/img8.svg';
import CarCard from "../components/carCard";

const ViewAllCars = () =>{

    const carImages = [img1,img2,img3, img4,img5,img6,img7,img8];

    const {data:allCars, loading, error} = useFetch('http://localhost:8080/cars');
    const [displayCars, setdisplayCars] = useState(allCars);
    const [viewAllButton, setViewAllButton] = useState("vcars-selecteditem");
    const [sedanButton, setSedanButton] = useState("vcars-selectitem");
    const [suvButton, setSuvButton] = useState("vcars-selectitem");
    const [hatchButton, setHatchButton] = useState("vcars-selectitem");
    const [coupeButton, setCoupeButton] = useState("vcars-selectitem");

    useEffect(()=>{
        setdisplayCars(allCars);
    },[allCars]);

    const filterCars = (carType) =>{
        // const someCars = allCars.filter((car)=>car.type=='SUV');
        switch(carType){
            case "allCars":{
                setViewAllButton("vcars-selecteditem");
                setSedanButton("vcars-selectitem");
                setSuvButton("vcars-selectitem");
                setHatchButton("vcars-selectitem");
                setCoupeButton("vcars-selectitem");
                
                setdisplayCars(allCars);

                break;
            }
            case "sedan":{
                setViewAllButton("vcars-selectitem");
                setSedanButton("vcars-selecteditem");
                setSuvButton("vcars-selectitem");
                setHatchButton("vcars-selectitem");
                setCoupeButton("vcars-selectitem");
                const someCars = allCars.filter((car)=>car.type==='Sedan');
                setdisplayCars(someCars);

                break;
            }
            case "suv":{
                setViewAllButton("vcars-selectitem");
                setSedanButton("vcars-selectitem");
                setSuvButton("vcars-selecteditem");
                setHatchButton("vcars-selectitem");
                setCoupeButton("vcars-selectitem");
                const someCars = allCars.filter((car)=>car.type==='SUV');
                setdisplayCars(someCars);

                break;
            }
            case "hatch":{
                setViewAllButton("vcars-selectitem");
                setSedanButton("vcars-selectitem");
                setSuvButton("vcars-selectitem");
                setHatchButton("vcars-selecteditem");
                setCoupeButton("vcars-selectitem");
                const someCars = allCars.filter((car)=>car.type==='Hatchback');
                setdisplayCars(someCars);

                break
            }
            case "coupe":{
                setViewAllButton("vcars-selectitem");
                setSedanButton("vcars-selectitem");
                setSuvButton("vcars-selectitem");
                setHatchButton("vcars-selectitem");
                setCoupeButton("vcars-selecteditem");
                const someCars = allCars.filter((car)=>car.type==='Coupe');
                setdisplayCars(someCars);

                break;
            }
        }

    }

    return(
        <div className="container">
            <div className="home-header">
                <Header />
            </div>
            <div className="viewallCars-container">
                <div className="vcars-selectionbar-back">
                    <div className="vcars-selectionbar">
                        <div className={viewAllButton} onClick={()=>filterCars("allCars")}>
                            <p>View all</p>
                        </div>
                        <div className={sedanButton} onClick={()=>filterCars("sedan")}>
                            <p>Sedan</p>
                        </div>
                        <div className={suvButton} onClick={()=>filterCars("suv")}>
                            <p>SUV</p>
                        </div>
                        <div className={hatchButton} onClick={()=>filterCars("hatch")}>
                            <p>Hatchback</p>
                        </div>
                        <div className={coupeButton} onClick={()=>filterCars("coupe")}>
                            <p>Coupe</p>
                        </div>
                    </div>
                </div>
                <div className="vcars-result">
                    <p>{displayCars && displayCars.length} total results</p>
                </div>
                <div className="vcars-displaySelected">
                    {loading && <p className="loading-class">loading....</p>}
                    {error && <p className="error-class">Error occured:- {error}</p>}
                    {displayCars && displayCars.map((car)=>(
                        <CarCard key={car.id} car={car} photo={carImages[Math.floor(Math.random() * 8)]} />
                    ))}
                </div>
            </div>
            <div className="home-footer">
                <Footer />
            </div>
        </div>
    );
}

export default ViewAllCars;