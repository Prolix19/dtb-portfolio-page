import React from "react";
import './style.css';

function About() {
    return (
        <section className="container">
            <div className="abtBox">
                <div className="row">
                    <div className="col-lg-12">
                        <img src={require(`../../assets/picture.jpg`).default} alt="Daniel Birmingham" />
                        <p>Hi, my name is Daniel Birmingham, and I am a full-stack developer.<br />I graduated in 2009 with a Bachelor's of Science in Computer Science, and have recently bootcamped myself to get up to speed on current methods and technology in the software development space.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;