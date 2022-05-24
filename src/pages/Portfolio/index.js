import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProjectList from '../../components/ProjectList'
import './style.css';

function Portfolio() {
    return (
        <div>
            <Header />
            <main className="body">
                <header id="port">
                    <div className="container img-fluid">
                        <div className="row">
                            <p className="pTitle">Portfolio</p>
                        </div>
                    </div>
                    <ProjectList />
                </header>
            </main>
            <Footer />
        </div>
    );
};

export default Portfolio;