import React from "react";
import Iframe from 'react-iframe';
import Section8 from "../compo/Section8";
import Section9 from "../compo/Section9";

const Contact = () => {
  return (
    <>
     
       
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5035.868459916265!2d72.89102034454856!3d21.24964817980618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f53a0aafa85%3A0x2a27a9f8f2dea109!2zMjHCsDE0JzU3LjkiTiA3MsKwNTMnMjcuOCJF!5e0!3m2!1sen!2sin!4v1668851462018!5m2!1sen!2sin"
          width="100%"
          height="450"
          title="Contact Us"
          frameborder="0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          styles={{marginTop:"50px", border: "none"}}
        ></Iframe>
         <Section8 />
         <Section9 />

    </>
  );
};

export default Contact;
