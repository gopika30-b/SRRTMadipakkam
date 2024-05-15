import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../constants/pageProps/Breadcrumbs";
import './about.css';

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
            <img src="https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg" />
          </div>
          <div className='right row'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet leo orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque pharetra augue sapien, at hendrerit odio euismod consequat. Sed ac dapibus leo. Phasellus sapien arcu, fermentum id tristique ut, ultricies ut felis. Curabitur consectetur mauris tincidunt est blandit tempus eu sed diam. Ut eu imperdiet eros, vel viverra quam. Etiam sit amet accumsan sem. Pellentesque malesuada consequat urna, et suscipit lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent placerat neque vel lorem commodo, quis ultricies elit scelerisque. Integer gravida at quam vel varius.</p>
            <br/><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum vulputate aliquam. Etiam vestibulum tortor imperdiet, mollis erat id, maximus ipsum. Phasellus vulputate rutrum turpis, sed consectetur justo fermentum vel. Cras odio ex, ultricies at venenatis ut, aliquet a eros. Suspendisse dui nisi, consectetur vel dapibus eu, dapibus vitae ex. Donec sit amet sapien tortor. Nullam vitae ligula metus.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;