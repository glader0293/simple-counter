//const SecondsCounter = () => {

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock as farClock } from '@fortawesome/free-regular-svg-icons'
import '../../styles/components/SecondsCounter.css'

const SecondsCounter = () => {

    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{
            setCounter(counter + 1);
        },1000)

        return () => clearInterval(timer);

    },[counter])


return (
        <div className="container backgroundcolor p-3">
            <div className="row mx-5 my-1">
                <div className="col-12 d-flex align-items-center justify-content-between">
                    <h1 className="backgroundcolorElements"><FontAwesomeIcon icon={farClock}  flip="horizontal" style={{color: "#ffffff",}} /></h1>
                    <h1 className="backgroundcolorElements">{Math.floor((counter / 100000) % 10)}</h1>
                    <h1 className="backgroundcolorElements">{Math.floor((counter / 10000) % 10)}</h1>
                    <h1 className="backgroundcolorElements">{Math.floor((counter / 1000) % 10)}</h1>
                    <h1 className="backgroundcolorElements">{Math.floor((counter / 100) % 10)}</h1>
                    <h1 className="backgroundcolorElements">{Math.floor((counter / 10) % 10)}</h1>
                    <h1 className="backgroundcolorElements">{Math.floor((counter / 1) % 10)}</h1>
                </div>
            </div>
        </div>

)
}




export default SecondsCounter;