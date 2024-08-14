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

    const clearError = () => setError(null);
    const clearSuccess = () => setSuccess(false);

    const getAllProjects = async () => {
        setLoading(true);
        try {
            const response = await api.get('/projects');
            console.log('Projects:', response.data);  // Bu yerda ma'lumotlar yuklanayotganligini tekshiring
            setProjects(response.data);
            setLoading(false);  // Ma'lumot muvaffaqiyatli yuklanganidan keyin loading'ni false ga o'zgartiring
        } catch (error) {
            setError(error);
            setLoading(false);  // Xatolik yuz berganda loading'ni false ga o'zgartiring
        }
    };

    const createProject = async (link, image) => {
        setLoading(true);
        clearError();
        clearSuccess();
        try {
            await projectsApi.createProject({ link, image });
            setSuccess(true);
            await getAllProjects();  // Loyiha qo'shilgandan keyin hamma loyihalarni qayta yuklash
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const deleteProject = async (projectId) => {
        setLoading(true);
        clearError();
        try {
            await projectsApi.deleteProject(projectId);
            await getAllProjects();
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const updateProject = async (id, link, image) => {
        setLoading(true);
        clearError();
        clearSuccess();
        try {
            await projectsApi.updateProject(id, { link, image });
            setSuccess(true);
            await getAllProjects();
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
        <ProjectsContext.Provider value={{
            projects,
            loading,
            error,
            success,
            createProject,
            getAllProjects,
            deleteProject,
            updateProject,
            clearError,
            clearSuccess
        }}>
            {children}
        </ProjectsContext.Provider>
    );
};
