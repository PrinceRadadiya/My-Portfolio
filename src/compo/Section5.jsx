import React from "react";
import {
  IoLaptopOutline,
  IoRadioOutline,
  IoApertureOutline,
  IoLogoInstagram,
  IoLogoAppleAppstore,
  IoFingerPrintOutline,
} from "react-icons/io5";

const Section5 = () => {
  return (
    <>
      <section className="section section-service">
        <div className="container">
          <h2 className="common-heading">Services Offers</h2>

          <p>
            “Two roads diverged in a wood, and I—I took the one less traveled
            by, And that has made all the difference.”
          </p>
        </div>

        {/* <!-- services offer card --> */}

        <div className="container grid grid grid-three-column">
          <div className="service-box">
            <IoLaptopOutline
              color={"#00000"}
              height="50px"
              width="50px"
              className="service-icon"
            ></IoLaptopOutline>
            <h3>Web design</h3>
            <p>
              "When you have a dream, you've got to grab it and never let go.".
              The silence can speak volumes without ever saying a word."
            </p>
          </div>
          <div className="service-box">
            <IoRadioOutline
              color={"#00000"}
              height="50px"
              width="50px"
              className="service-icon"
            ></IoRadioOutline>
            <h3>Web devlopment</h3>
            <p>
              "When you have a dream, you've got to grab it and never let go.".
              The silence can speak volumes without ever saying a word."
            </p>
          </div>
          <div className="service-box">
            <IoApertureOutline
              color={"#00000"}
              height="50px"
              width="50px"
              className="service-icon"
            ></IoApertureOutline>
            <h3>photo graphy</h3>
            <p>
              "When you have a dream, you've got to grab it and never let go.".
              The silence can speak volumes without ever saying a word."
            </p>
          </div>
          <div className="service-box">
            <IoLogoInstagram
              color={"#00000"}
              height="50px"
              width="50px"
              className="service-icon"
            ></IoLogoInstagram>
            <h3>graphic design</h3>
            <p>
              "When you have a dream, you've got to grab it and never let go.".
              The silence can speak volumes without ever saying a word."
            </p>
          </div>
          <div className="service-box">
            <IoLogoAppleAppstore
              color={"#00000"}
              height="50px"
              width="50px"
              className="service-icon"
            ></IoLogoAppleAppstore>
            <h3>app design</h3>
            <p>
              "When you have a dream, you've got to grab it and never let go.".
              The silence can speak volumes without ever saying a word."
            </p>
          </div>
          <div className="service-box">
            <IoFingerPrintOutline
              color={"#00000"}
              height="50px"
              width="50px"
              className="service-icon"
            ></IoFingerPrintOutline>
            <h3>android Devloper</h3>
            <p>
              "When you have a dream, you've got to grab it and never let go.".
              The silence can speak volumes without ever saying a word."
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section5;
