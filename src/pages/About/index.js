import React from 'react';
import Header from '../../components/Header';
import About from '../../components/About';
import Footer from "../../components/Footer";
import './style.css';

function Home() {
    return (
        <div>
            <Header />
            <main className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-sm-7 overflow-auto">
                        <p className="daniel">Daniel Birmingham</p>
                        </div>
                    </div>
                </div>
                <About />
            </main>
            <Footer />
        </div>
    );
};

export default Home;