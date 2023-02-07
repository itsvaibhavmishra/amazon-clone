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
                    <Product 
                    info= "iQOO Z6 Lite 5G by vivo (Stellar Green, 4GB RAM, 64GB Storage) | World's First Snapdragon 4 Gen 1 | 120Hz Refresh Rate | 5000mAh Battery"
                    price="13,499"
                    rating={4}
                    image= "https://m.media-amazon.com/images/I/61VbKHdE0rL._SX569_.jpg" />
                    
                    <Product 
                    info= "boAt Rockerz 550 Bluetooth Wireless Over Ear Headphones with Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation with Mic (Maroon Maverick)"
                    price="1,999"
                    rating={4}
                    image= "https://m.media-amazon.com/images/I/41X8VCZXYuL._SX300_SY300_QL70_FMwebp_.jpg" />

                    <Product 
                    info= "Logitech MK470 Slim Wireless Keyboard and Mouse Combo - Modern Compact Layout, Ultra Quiet, 2.4 GHz USB Receiver, Plug n' Play Connectivity, Compatible with Windows - White"
                    price="4,432"
                    rating={5}
                    image= "https://m.media-amazon.com/images/I/41sp7pnzHUL._SX300_SY300_QL70_FMwebp_.jpg" />
                    
                </div>
                
                <div className="home__row">
                    <Product 
                    info="Dell New Alienware x15 R2 Gaming Laptop, Intel i9-12900H, Win11+MSO'21 , 32GB LP DDR5, 1TB SSD, NVIDIA RTX 3080 Ti (16GB GDDR6)"
                    price="3,56,600"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61Zwojyjm5L._SX679_.jpg" />
                    <Product 
                    info=""
                    price=""
                    rating={0}
                    image="" />
                </div>

                <div className="home__row">
                    <Product 
                    info=""
                    price=""
                    rating={0}
                    image="" />
                </div>

                <div className="home__row">
                    <Product 
                    info=""
                    price=""
                    rating={0}
                    image="" />
                    <Product 
                    info=""
                    price=""
                    rating={0}
                    image="" />
                    <Product 
                    info=""
                    price=""
                    rating={0}
                    image="" />
                </div>
            </div>
    
        </div>
    )
}

export default Home;