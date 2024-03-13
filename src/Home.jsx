import React from "react";
import './Home.css'

const Home = (props) => {
    return (
        <div className="Home">
            <div className="Welcome">
        <h1>We are glad to welcome you {props.name} 👏</h1>
        </div>
        </div>
    );
}

export default Home;