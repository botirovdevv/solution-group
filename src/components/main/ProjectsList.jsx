import React, { useEffect } from 'react';
import { useProjects } from '../../context/ProjectsContex';

const ProjectsList = () => {
    const { projects, getAllProjects, deleteProject, loading, error } = useProjects();

    useEffect(() => {
        getAllProjects(); 
    }, []);

    const handleDelete = async (projectId) => {
        try {
            await deleteProject(projectId);
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    return (
        <div>
            <h2>Projects List</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        {project.link && <a href={project.link}>{project.link}</a>}
                        {project.image && <img src={project.image} alt="Project" style={{ width: '100px', height: '100px' }} />}
                        <button onClick={() => handleDelete(project.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectsList;
