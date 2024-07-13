import React from 'react';
import { projects } from '../../data/projectsData';

const Projects = () => {
    return (
        <section className="projects">
            <div className="container">
                <h1 className="projects-title">So'ngi loyihalar</h1>
                <ul className="projects-list">
                    {projects.map(project => (
                        <li key={project.id}>
                            <a href={project.link} className="projects-wrap">
                                <div className="projects-inner">
                                    <div className="projects-project">
                                        <div className="projects-inner-wrap">
                                            <img src={project.imageUrl} className='projects-img' alt="" />
                                            <div className="projects-meta_wrap">
                                                <div className="projects-meta">
                                                    <h5 className='projects-name'>{project.name}</h5>
                                                    <p className="projects-label">{project.label}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    );
};

export default Projects;
