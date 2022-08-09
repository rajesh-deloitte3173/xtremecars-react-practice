import { useEffect } from 'react';
import { useState } from 'react';
import '../styles/line.css';
const Line = ({num}) =>{
    const [line1, setLine1] = useState(false);
    const [line2, setLine2] = useState(false);
    const [line3, setLine3] = useState(false);
    const [line1act, setLine1act] = useState("deactive-line");
    const [line2act, setLine2act] = useState("deactive-line");
    const [line3act, setLine3act] = useState("deactive-line");

    useEffect(()=>{
        switch (num) {
                case 1:{
                    setLine1(true);
                    setLine1act("active-line")
                    break;
                }
                case 2:{
                    setLine2(true);
                    setLine2act("active-line")
                    break;
                }
                case 3:{
                    setLine3(true);
                    setLine3act("active-line")
                    break;
                }
                default:
                    break;
            }
    },[])


    return(
        <div className="line-container">
            <div className={line1act}>
                {line1 && <p>01</p>}
            </div>
            <div className={line2act}>
                {line2 && <p>02</p>}
            </div>
            <div className={line3act}>
                {line3 && <p>03</p>}
            </div>
        </div>
    );
}

export default Line;