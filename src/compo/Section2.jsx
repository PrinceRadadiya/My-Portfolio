import React from "react";

const Section2 = () => {
    return (
        <>
    <section className="section-biodata section">
        <div className="container grid grid-two-column">
            <div className="bio-image">
                <img src="img/princu.jpeg" alt="prince_radadiya" loading="lazy" />           
            </div>
            <div className="bio-data">
                <h2 className="common-heading">My bio-data</h2>
                <p>"When you have a dream, you've got to grab it and never let go.". The silence can speak volumes without ever saying a word.</p>
                <br />
                <p>“Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.”</p>



                <div className="bio-data-stats">
                    <div className="bio-stats">
                        <h3>Design</h3>
                        <div className="bio-progress-bar">
                            <span>80%</span>
                        </div>
                    </div>


                    <div className="bio-stats">
                        <h3>HTML</h3>
                        <div className="bio-progress-bar bio-progress-2">
                            <span>99%</span>
                        </div>
                    </div>


                    <div className="bio-stats">
                        <h3>CSS</h3>
                        <div className="bio-progress-bar bio-progress-3">
                            <span>90%</span>
                        </div>
                    </div>


                    <div className="bio-stats">
                        <h3>JavaScript</h3>
                        <div className="bio-progress-bar bio-progress-4">
                            <span>85%</span>
                        </div>
                    </div>


                    <div className="bio-stats">
                        <h3>MERN</h3>
                        <div className="bio-progress-bar bio-progress-5">
                            <span>70%</span>
                        </div>
                    </div>


                </div>
                <div className="bio-data-btn">
                    <a href="/" className="btn">Download</a>
                </div>
            </div>
        </div>

    </section>
        </>
    );
}

export default Section2;