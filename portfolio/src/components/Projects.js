import React from 'react';
import './Projects.css';

function Projects() {
    const projects = [
        { name: 'Project 1', description: 'Description of project 1', link: '#' },
        { name: 'Project 2', description: 'Description of project 2', link: '#' },
    ];

    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
