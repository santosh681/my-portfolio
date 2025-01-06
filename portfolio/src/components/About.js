import React from 'react';
import './About.css';

function About() {
    return (
        
        <section id="about" className="about">
            <h2>About Me</h2>
            <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/1686289711228.jpg`} 
     alt="logo"/>
            <p>Experienced IT Engineer with a demonstrated history of working in the information technology and services industry. SWIFT Certified Alliance Access Administrator and RMA operator.Skilled in Python, SFDC Development, SQL. Trained in Oracle Siebel CRM and Siebel Open UI. Strong information technology professional with a Bachelor of Engineering (B.E.) focused in Computer Science from sri lakshmi ammal engineering college.</p>
        </section>
    );
}

export default About;
