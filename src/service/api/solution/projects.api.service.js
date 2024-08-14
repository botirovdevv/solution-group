import { api } from '../../api';

const projectsApi = {
    getAllProjects: async () => {
        try {
            const response = await api.get('/projects');
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    createProject: async (data) => {
        try {
            const response = await api.post('/projects', data);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    deleteProject: async (projectId) => {
        try {
            const response = await api.delete(`/projects/${projectId}`);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    updateProject: async (id, data) => {
        try {
            const response = await api.put(`/projects/${id}`, data);
            return response;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
};

export default projectsApi;
