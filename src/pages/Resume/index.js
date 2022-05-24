import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";

function Resume() {
    return(
        <div>
            <Header />
            <main>
                <h1 className="rTitle">Résumé</h1>
                <p>
                Click the link <a href={require(`../../assets/dtb-résumé.pdf`).default} target="_blank" rel="noreferrer">below</a> to view a copy of my résumé:
                    <br />
                    <a href={require(`../../assets/dtb-résumé.pdf`).default} target="_blank" rel="noreferrer">
                        Daniel Birmingham's Résumé
                    </a>
                </p>
                <p>
                    I am proficient in HTML, CSS, JavaScript, MERN, MySQL, RESTful APIs, GraphQL, and PWAs.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default Resume;