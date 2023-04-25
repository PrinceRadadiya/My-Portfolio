import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import {
  MdOutlineAddLocationAlt,
  MdOutlinePhoneAndroid,
  MdOutlineMailOutline,
} from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import {SlSocialFacebook} from 'react-icons/sl'
import {SlSocialYoutube} from 'react-icons/sl'

const Section9 = () => {
  return (
    <>
      <footer className="section-footer section">
        <div className="container grid grid-four-column">
          <div className="f-about">
            <h3>about </h3>
            <p>
              Be courageous. Challenge orthodoxy. Stand up for what you believe
              in. When you are in your rocking chair talking to your
              grandchildren many years from now, be sure you have a good story
              to tell
            </p>
          </div>

          {/* end */}
          <div className="f-links">
            <h3>links</h3>
            <ul>
              <li>
                <IoArrowForwardOutline />
                <a href="link">Home</a>
              </li>
              <li>
                <IoArrowForwardOutline />
                <a href="link">Aboout</a>
              </li>
              <li>
                <IoArrowForwardOutline />
                <a href="link">Services</a>
              </li>
              <li>
                <IoArrowForwardOutline />
                <a href="link">Portfolio</a>
              </li>
              <li>
                <IoArrowForwardOutline />
                <a href="link">Contact</a>
              </li>
            </ul>
          </div>

          <div className="f-services">
            <h3>services</h3>
            <ul>
              <li>
                <span>
                  <IoArrowForwardOutline />
                </span>
                <a href="link">web design</a>
              </li>
              <li>
                <span>
                  <IoArrowForwardOutline />
                </span>
                <a href="link">Web Development</a>
              </li>
              <li>
                <span>
                  <IoArrowForwardOutline />
                </span>
                <a href="link">Main Project</a>
              </li>
              <li>
                <span>
                  <IoArrowForwardOutline />
                </span>
                <a href="https://www.coursera.org/">Online className</a>
              </li>
              <li>
                <span>
                  <IoArrowForwardOutline />
                </span>
                <a href="https://www.youtube.com">Youtube course</a>
              </li>
            </ul>
          </div>
          {/* end */}

          <div className="f-address">
            <h3>Have a Qus etions</h3>
            <address>
              <div>
                <p>
                  <span>
                    <MdOutlineAddLocationAlt />
                  </span>
                  surat, India
                </p>
              </div>

              <div>
                <p>
                  <span>
                    <MdOutlinePhoneAndroid />
                  </span>
                  <a href="tel:+919737070575">+91 9737070575</a>
                </p>
              </div>

              <div>
                <p>
                  <span>
                    <MdOutlineMailOutline />
                  </span>
                  <a href="mailto:radadiyaprince1@gmail.com">
                    radadiya@gmail.com
                  </a>
                </p>
              </div>
            </address>
          </div>
        </div>
        <div>
          <div>
            <div className="f-social-icons">
              <a href="https://www.instagram.com/">
                <SiInstagram className="icons" />
              </a>
              <a href="https://www.facebook.com/">
                <SlSocialFacebook className="icons" />
              </a>
              <a href="https://www.youtube.com/">
                <SlSocialYoutube className="icons" />
              </a>
            </div>
            <div className="f-credits">
              <p>Copyright @2022:prince.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Section9;
