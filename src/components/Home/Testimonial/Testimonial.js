import React from "react";
import { testimonal } from "../../../data";
import "./testimonial.css";
import Heading from "../Heading";

const Testimonal = () => {
    return (
      <>
        <section className='testimonal padding'>
          <div className='container'>
            <Heading subtitle='TESTIMONIAL' title='Our Happy Clients' />
  
            <div className='content grid1'>
              {testimonal.map((val) => (
                <div className='items shadow'>
                  <div className='box flex'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                      <i className='fa fa-quote-left iconT'></i>
                    </div>
                    <div className='name'>
                      <h2>{val.name}</h2>
                      <span>{val.post}</span>
                    </div>
                  </div>
                  <p>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Testimonal
  