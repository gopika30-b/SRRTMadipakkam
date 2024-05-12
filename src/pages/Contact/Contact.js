import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Breadcrumbs from "../../constants/pageProps/Breadcrumbs";
import "./contact.css"


const Contact = () => {
    const location = useLocation();
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
    const [prevLocation, setPrevLocation] = useState("");
    useEffect(() => {
        setPrevLocation(location.state.data);
    }, [location]);


    return (
        <div className="max-w-container mx-auto px-4">
            <Breadcrumbs title="Contact" prevLocation={prevLocation} />
            <section className='contacts'>
                <div className='container shadow flexSB'>
                    <div className='left row'>
                        <iframe src={map}></iframe>
                    </div>
                    <div className='right row'>
                        <h1>Contact us</h1>
                        <p>We're open for any suggestion or just to have a chat</p>

                        <div className='items grid2'>
                            <div className='box'>
                                <h4>ADDRESS:</h4>
                                <p>No 10, Velachery Main Road, Balaiah Garden, Madipakkam, Chennai - 600 091</p>
                            </div>
                            <div className='box'>
                                <h4>EMAIL:</h4>
                                <p> srrtmadipakkam@gmail.com</p>
                                <br/>
                                <h4>PHONE:</h4>
                                <p> +91 123456789</p>
                            </div>
                        </div>


                        <h3>Follow us here</h3>
                        <div className='social'>
                            <FontAwesomeIcon icon={faFacebookF} className="icon" />
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                            <FontAwesomeIcon icon={faTwitter} className="icon" />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
