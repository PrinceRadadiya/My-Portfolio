import React from 'react';

const Section3 = () =>{




    return(
        <>
         <section className="section section-portfolio" id="portfolio-section">
        <div className="container">
            <h2 className="common-heading">Latest Works</h2>
            <p>
                "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell."
            </p>
        </div>

        <div className="p-btns">
            <div className="btn p-btn">Website</div>
            <div className="btn p-btn">Youtube</div>
            <div className="btn p-btn">Design</div>
        </div>
  
        <div className="container grid grid-three-column portfolio-image">
            <div className="img-overlay p-btn--1">
                <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  loading="lazy" />
                <div className="overlay">
                    <a href="https://www.youtube.com/"   className="common-heading">project 1</a>
                </div>
            </div>

            <div className="img-overlay p-btn--3">
                <img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600" alt="employee"  loading="lazy" />
                <div className="overlay">
                    <a href="/"  className="common-heading">project 2</a>
                </div>
            </div>

            <div className="img-overlay p-btn--1 ">
                <img src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/"  loading="lazy" />
                <div className="overlay">
                    <a href="/"  className="common-heading">project 3</a>
                </div>
            </div>

            <div className="img-overlay p-btn--1 p-btn-2">
                <img src="https://images.pexels.com/photos/5676679/pexels-photo-5676679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="/" loading="lazy" />
                <div className="overlay">
                    <a href="/"  className="common-heading">project 4</a>
                </div>
            </div>

            <div className="img-overlay p-btn--2">
                <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/"  loading="lazy" />
                <div className="overlay">
                    <a href="/"  className="common-heading">project 5</a>
                </div>
            </div>

            <div className="img-overlay p-btn--1">
                <img src="https://images.pexels.com/photos/14237835/pexels-photo-14237835.jpeg" 
                 alt="/" loading="lazy" />
                <div className="overlay">
                    <a href="/"  className="common-heading">project 6</a>
                </div>
            </div>


        </div>
    </section>

        </>
    )

}

export default Section3;