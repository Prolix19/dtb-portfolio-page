import React from 'react';
import Project from '../Project';
import fixture from '../../assets/fixture.gif';
import budgettracker from '../../assets/budgettracker.gif';
import blog from '../../assets/blog.gif';
import notetaker from '../../assets/notetaker.gif';
import weather from '../../assets/weather.gif';
import dayplanner from '../../assets/dayplanner.gif';


function ProjectList() {
    return (
        <section className="container">
            <Project 
            title="Fixture"
            pic={fixture}
            alt="Fixture"
            description="An ecommerce platform for merchants to sell digital goods."
            technologies="HTML, CSS, JavaScript, JSX, Node, Express, React, MongoDB, GraphQL, Apollo, JSON Web Tokens, Stripe, bcrypt, and AWS SDK (S3 buckets)"
            demo="https://peaceful-fjord-92696.herokuapp.com/"
            repo="https://github.com/Meshtatsuo/Fixture"
            />
            <Project 
            title="Budget Tracker"
            pic={budgettracker}
            alt="Budget Tracker"
            description="A budget tracker PWA that allows users to track their expenses and incomes. Users can add expenses and incomes, and view their current budget."
            technologies="HTML, CSS, JavaScript, Node.js, Heroku, MongoDB, IndexedDB"
            demo="https://sheltered-dawn-49630.herokuapp.com/"
            repo="https://github.com/Prolix19/budget-tracker-pwa"
            />
            <Project
            title="Tech Blog Site"
            pic={blog}
            alt="Tech Blog Site"
            description="A CMS-style blog site, created in a manner following the MVC paradigm. Users can create accounts, log in and out, post blog entries, edit and delete entries, and comment on other users' posts."
            technologies="CSS, JavaScript, Handlebars, Node.js, Express, MySQL, bcrypt"
            demo="http://obscure-fjord-80382.herokuapp.com/"
            repo="https://github.com/Prolix19/tech-blog-site"
            />
            <Project
            title="Note Taker"
            pic={notetaker}
            description="A note taker application that allows users to create, edit, and delete notes. Users can view and access their notes from the home page."
            technologies="HTML, CSS, JavaScript, Express, JSON flat-file database"
            demo="https://evening-retreat-72417.herokuapp.com/"
            repo="https://github.com/Prolix19/express-note-taker"
            />
            <Project 
            title="City Weather Search"
            pic={weather}
            description="A weather dashboard, searchable by city name. Users can view the current weather conditions, and search for the weather conditions of any city."
            technologies="HTML, CSS, JavaScript, jQuery, Bootstrap, Moment.js, OpenWeather API"
            demo="https://prolix19.github.io/city-weather-search/"
            repo="https://github.com/Prolix19/city-weather-search"
            />
            <Project 
            title="Day Planner"
            pic={dayplanner}
            alt="Day Planner"
            description="A calendar application allowing users to save events for each hour of the day."
            technologies="HTML, CSS, JavaScript, jQuery, Bootstrap, Moment.js, Google Fonts API"
            demo="https://prolix19.github.io/workday-planner/"
            repo="https://github.com/prolix19/workday-planner/"
            />
        </section>
    );
};

export default ProjectList;