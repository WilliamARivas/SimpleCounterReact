import React, {useState, useEffect} from "react";

const ClockDigits = (props) =>{
    return(
        <div className="clock-indices">
            <h1>{props.value}</h1>
        </div>
    )
}

export default ClockDigits;