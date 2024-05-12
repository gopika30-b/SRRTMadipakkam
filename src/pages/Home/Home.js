import React from "react";
import HeroMain from "../../components/Home/HeroMain";
import HeroSub from "../../components/Home/HeroSub";
import Testimonal from "../../components/Home/Testimonial/Testimonial";

const Home = () => {
    return(
        <div className="w-full mx-auto">
            <HeroMain/>
            <HeroSub/>
            <Testimonal/>
        </div>
    );
}

export default Home;