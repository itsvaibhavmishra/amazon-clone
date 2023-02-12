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
                    id="54915"
                    info= "iQOO Z6 Lite 5G by vivo (Stellar Green, 4GB RAM, 64GB Storage) | World's First Snapdragon 4 Gen 1 | 120Hz Refresh Rate | 5000mAh Battery"
                    price={13499}
                    rating={3}
                    image= "https://m.media-amazon.com/images/I/61VbKHdE0rL._SX569_.jpg" />
                    
                    <Product
                    id="93485"
                    info="Fossil Gen 5 (46mm, Black) Garrett Silicone Touchscreen Men's Smartwatch with Speaker, Heart Rate, GPS, Music Storage and Smartphone Notifications Digital Dial Watch-FTW4041"
                    price={18396}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/817+DdlKb8L._UX522_.jpg" />

                    <Product
                    id="64765" 
                    info= "Logitech MK470 Slim Wireless Keyboard and Mouse Combo - Modern Compact Layout, Ultra Quiet, 2.4 GHz USB Receiver, Plug n' Play Connectivity, Compatible with Windows - White"
                    price={4432}
                    rating={5}
                    image= "https://m.media-amazon.com/images/I/41sp7pnzHUL._SX300_SY300_QL70_FMwebp_.jpg" />
                    
                </div>
                
                <div className="home__row">
                    <Product
                    id="09167" 
                    info="Dell New Alienware x15 R2 Gaming Laptop, Intel i9-12900H, Win11+MSO'21 , 32GB LP DDR5, 1TB SSD, NVIDIA RTX 3080 Ti (16GB GDDR6)"
                    price={356600}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61Zwojyjm5L._SX679_.jpg" />
                    <Product
                    id="86512" 
                    info= "boAt Rockerz 550 Bluetooth Wireless Over Ear Headphones with Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation with Mic (Maroon Maverick)"
                    price={1999}
                    rating={4}
                    image= "https://m.media-amazon.com/images/I/41X8VCZXYuL._SX300_SY300_QL70_FMwebp_.jpg" />
                </div>

                <div className="home__row">
                    <Product
                    id="14238" 
                    info="Sony Bravia 80 cm (32 inches) HD Ready Smart LED Google TV KD-32W820K (Black) (2022 Model) | with Alexa Compatibility | Google TV | Watchlist | Voice Search | Google Play | Chromecast | Netflix | Amazon Prime Video | Additional Features: Apple Airplay | Apple Homekit | Alexa"
                    price={24999}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51UFcsXQOzL._SY300_SX300_QL70_FMwebp_.jpg" />
                </div>

                <div className="home__row">
                    <Product
                    id="01339" 
                    info="OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)"
                    price={18999}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71AvQd3VzqL._SX679_.jpg" />
                    <Product
                    id="54504" 
                    info="Apple 2022 12.9-inch iPad Pro (Wi-Fi, 256GB) - Space Grey (6th Generation)"
                    price={121970}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81c+9BOQNWL._SX679_.jpg" />
                    <Product
                    id="12566" 
                    info="MSI GeForce RTX 3060 Ti Gaming X 8G LHR 8 GB GDDR6 256-bIt Gaming Graphic Card, pci_e"
                    price={45233}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81uam+7+BMS._SX679_.jpg" />
                </div>
            </div>
    
        </div>
    )
}

export default Home;