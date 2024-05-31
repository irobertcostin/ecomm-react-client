import React from "react";
import FraserPlusPromo from "./FraserPlusPromo";
import HomeHero from "./HomeHero";
import PromoOne from "./PromoOne";
import Trending from "./Trending";
import PromoTwo from "./PromoTwo";


const Home: React.FC = () => {






    return (
        <div className="flex flex-col pt-52 lg:pt-36">
            <HomeHero />
            <FraserPlusPromo />
            <PromoOne />
            <Trending />
            <PromoTwo />
        </div>
    )
}


export default Home;