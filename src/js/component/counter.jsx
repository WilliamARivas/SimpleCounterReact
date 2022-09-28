import React, {useState, useEffect} from "react";
import ClockDigits from "./clockdigits.jsx";

const Counter = () => {
    //declare a new state variable
    const [seconds, setSeconds] = useState(0);
    const [buttonVariable, setbuttonVariable] = useState(0);
    let singleDigit = Math.floor((seconds/1) % 10);
    let tensDigit = Math.floor((seconds/10) % 10);
    let hundredsDigit = Math.floor((seconds/100) % 10);
    let thousandsDigit = Math.floor((seconds/1000) % 10);

    useEffect(() =>{
        setTimeout(
            () =>{
            setSeconds((seconds) => seconds + 1);
            console.log("1 second has passed")
        },
        10);
    }, [buttonVariable]);


    const clickHandler = () =>{
        console.log("We are inside of the even handler")
        setbuttonVariable(buttonVariable => buttonVariable + 1);
    }
    return(
        <div>
            <div className="d-flex flex-row clock-BG">
                <div className="clock-indices">
                    <h1>
                    <i className="fas fa-clock"></i>
                    </h1>
                </div>
                <ClockDigits value={thousandsDigit}/>
                <ClockDigits value={hundredsDigit}/>
                <ClockDigits value={tensDigit}/>
                <ClockDigits value={singleDigit}/>
            </div>
            <button onClick={() => {clickHandler()}}>Click to triger useEffect</button>
        </div>)
};
export default Counter;