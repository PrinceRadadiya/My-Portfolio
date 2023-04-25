import React from "react";


const Section1 = () =>{
    
    return(
        <>
       <main>
        <section className="section-hero section">
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    <p className="hero-top-data">
                        This is me
                    </p>
                    <h1 className="hero-heading">Prince Radadiya</h1>
                    <p className="hero-pera">
                        I'm Prince Rameshbhai Radadiya. A Full stack Devloper, engineer and freelancer.  A Full stack Devloper, engineer and freelancer</p>
                    
                    <div>
                        <a href="/" className="btn hireme-btn">Hire me</a>
                    </div>
                </div>
                <div className="section-hero-image">
                    <img src="img/prince.jpg" alt="prince radadiya" className="hero-img" loading="lazy" />
                </div>
            </div>
        </section>
    </main>


        </>
    );
}
export default Section1;