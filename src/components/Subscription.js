// import React from "react";
import "./Subscription.css"
function Subscription(){
    let date = new Date(2021,3,23);
    let title = "Monthly subscription";
    let amount = "120.60";
    return (
        <div className="Subscription-container">
            <div className="date">{date}</div>
            <h1>{title}</h1>
            <div className="amount">{amount}</div>
        </div>
    )
}

export default Subscription;