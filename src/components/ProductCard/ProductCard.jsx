import React, { useState, useRef } from "react";
import './ProductCard.css';

function ProductCard({title,price}) {
    const [nameState, setNameState] = useState("");
    const pRef = useRef(0);
    
    function handleNameChange(event){
        setNameState(event.target.value);
    }

    function printTitle(){
        console.log("printTitle");
        if(pRef.current.style.display === "none")
            pRef.current.style.display = "block";
        else
            pRef.current.style.display = "none";
    }
    
    return (
        <div className="product-card">
            <p onClick={printTitle}>{title}</p>
            <p ref={pRef}>{price}</p>
            <input type="text" placeholder="Enter your name" value={nameState} onChange={handleNameChange}/>
            <p>Output would be displayed here : {nameState}</p>
        </div>
    );
}

export default ProductCard;