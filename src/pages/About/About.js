import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../constants/pageProps/Breadcrumbs";

const About = () => {
    const location = useLocation();
    const [prevLocation, setPrevLocation] = useState("");
    useEffect(() => {
      setPrevLocation(location.state.data);
    }, [location]);
   return (
        <div className="max-w-container mx-auto px-4">
            <Breadcrumbs title="About Us" prevLocation={prevLocation} />
            <section className='aboutUs'>
                <div className='container shadow flexSB'>
                    <div className='left row'>
                        <p>Left</p>
                    </div>
                    <div className='right row'>
                      <p>Right</p>
                    </div>
                </div>
            </section>
        </div>
    );
  };
  
  export default About;