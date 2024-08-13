import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../service/api';
import projectsApi from '../service/api/solution/projects.api.service';

const ProjectsContext = createContext();

export const useProjects = () => useContext(ProjectsContext);

export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const getAllProjects = async () => {
        setLoading(true);
        try {
            const response = await api.get('/projects');
            setProjects(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const createProject = async (link, image) => {
        setLoading(true);
        try {
            await projectsApi.createProject({ link, image });
            setSuccess(true);
            getAllProjects();  // Loyiha qo'shilgandan keyin hamma loyihalarni qayta yuklash
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const deleteProject = async (projectId) => {
        setLoading(true);
        try {
            await projectsApi.deleteProject(projectId);
            getAllProjects();  // Loyiha o'chirilgandan keyin hamma loyihalarni qayta yuklash
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllProjects();
    }, []);

    return (
        <ProjectsContext.Provider value={{ projects, loading, error, success, createProject, getAllProjects, deleteProject }}>
            {children}
        </ProjectsContext.Provider>
    );
};
