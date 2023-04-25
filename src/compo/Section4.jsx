import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Section4 = () => {
  const [start, acess] = useState(false);
  return (
    <>
      <ScrollTrigger onEnter={() => acess(true)} onExit={() => acess(false)}>
        <section className="section section-work-data">
          <div className="container grid grid-four-column">
            <div>
              <h2 className="counter-number">
                {start && (
                  <CountUp start={0} end={1000} duration={2} delay={0} />
                )}
                +
              </h2>
              <p>project completed</p>
            </div>
            <div>
              <h2 className="counter-number">
                {start && (
                  <CountUp start={0} end={3500} duration={2} delay={0} />
                )}
                +
              </h2>
              <p>Happy client</p>
            </div>
            <div>
              <h2 className="counter-number">
                {start && (
                  <CountUp start={0} end={5000} duration={2} delay={0} />
                )}
                +
              </h2>
              <p>cups of coffiee</p>
            </div>
            <div>
              <h2 className="counter-number">
                {start && (
                  <CountUp start={0} end={6000} duration={2} delay={0} />
                )}
                +
              </h2>
              <p>real pro</p>
            </div>
          </div>
        </section>
      </ScrollTrigger>
    </>
  );
};

export default Section4;
