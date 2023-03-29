import React from "react";
import "../styles/Home.css";
import "../styles/Contact.css"
import PDF from "../resources/BryanCalderaResume.pdf";

function Home() {
    return (
        <section className="Home">
            <h1>Hi, I'm Bryan Caldera</h1>
            <p>
                MS Software Engineering student at San Jose State University
            </p>
            <p>
                Specialization in Cloud and Mobile Computing
            </p>
            <br/>
            <div className="Contact">
                <h2>
                    <a href={PDF} target="_blank" rel="noreferrer">Resume</a>
                </h2>
            </div>

        </section>
    );
}

export default Home;