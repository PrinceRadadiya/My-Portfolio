import React from 'react'
import {  NavLink } from "react-router-dom";


const Section7 = () => {
  return (
    <>
        <section className="section section-freelancing">
          
          <div className="overlay"></div>
              <div className="container">
                  <h2>I am <span>available</span> for freelancing</h2>
                  <p>hii , my name is prince radadiya I am 18 years old I am fullstack devloper and study for sutex Bank of collage</p>
                 
                  <NavLink to="/contact"  className="btn p-btn">Hire me</NavLink>
              </div>
          </section>
    </>
  )
}

export default Section7;