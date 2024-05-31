import React from "react";
import './carousel.css';
import { Carousel } from 'nuka-carousel';

function Caraousel(){
    return (
        <Carousel wrapMode="wrap" autoplayInterval={1000} scrollDistance="slide" showArrows autoplay className="carousel" showDots>
            <img  className="carousel-img" src="https://plus.unsplash.com/premium_photo-1697729761115-052055452e85?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <img className="carousel-img"  src="https://images.unsplash.com/photo-1541655183253-8d490aa9505e?q=80&w=1873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <img className="carousel-img"  src="https://images.unsplash.com/photo-1547242667-338bed1b6551?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <img className="carousel-img"  src="https://images.unsplash.com/photo-1717128584253-de3daf336a72?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <img className="carousel-img"  src="https://images.unsplash.com/photo-1716718405882-5d80d89ea24e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
            <img className="carousel-img"  src="https://images.unsplash.com/photo-1715549950698-14f6673ea6b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Carousel>
    );
}

export default Caraousel;