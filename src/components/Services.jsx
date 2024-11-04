import React from "react";
const Services = () => {
    return (
      <section className="pt-20" id="services">
        <h2 className="mb-8 text-center text-3xl lg:text-4xl">Services</h2>
        <div className="row">
          <div className="service">
            <i className="ri-macbook-line"></i>
            <h3>Web Design & Development</h3>
            <p>Specializing in web design and development to create visually appealing, user-friendly websites that enhance functionality and drive business success.</p>
          </div>
          <div className="service">
            <i className="ri-android-line"></i>
            <h3>App Development</h3>
            <p>Offering comprehensive app development services for iOS and Android, delivering user-friendly, high-performance applications tailored to your business needs.</p>
          </div>
          <div className="service">
            <i className="ri-store-3-line"></i>
            <h3>Social Media Marketing</h3>
            <p>Delivering effective social marketing strategies to boost brand visibility, engage audiences, and drive growth across all major social media platforms.</p>
          </div>
          <div className="service">
            <i className="ri-palette-line"></i>
            <h3>Graphic Designing</h3>
            <p>Providing creative graphic designing services that enhance brand identity and engage audiences through stunning visuals and innovative design solutions.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  