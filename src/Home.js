import React from "react";
import "./Home.css";
import "./assists/Product";
import Product from "./assists/Product";

function Home() {

    return(
        <div className="home">
            <div className="container">
                <img src="https://m.media-amazon.com/images/I/710i3fow2GL._SX3000_.jpg" alt="homeLogo" className="home__image" />
            
                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                
                <div className="home__row">
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
    
        </div>
    )
}

export default Home;