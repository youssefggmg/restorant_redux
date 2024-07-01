import React from "react";

import "./style/hero.css"

const Hero = () => {
    return( <div className="hero">
        <h1 className="greeting">welcome to the react restaurant</h1>
        <img src="lobster.png" alt="here it is" className="lobster" />
    </div>)
};

export default Hero;
