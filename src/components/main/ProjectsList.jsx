import React, { useEffect, useState } from 'react';
import { useProjects } from '../../context/ProjectsContex';
import { Paper, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import EditProject from './EditProject';

const ProjectsList = () => {
    const { projects, getAllProjects, deleteProject, loading, error } = useProjects();
    const [editingProject, setEditingProject] = useState(null);

    useEffect(() => {
        getAllProjects();
    }, []);

        console.log('Projects:', projects);

    const handleDelete = async (projectId) => {
        await deleteProject(projectId);
    };

    const handleEdit = (project) => {
        setEditingProject(project);
    };

    return (
        <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Projects List</Typography>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <List>
                {projects.map((project) => (
                    <ListItem key={project.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <ListItemText
                            primary={typeof project.link === 'string' ? project.link : 'No Link'}
                            secondary={typeof project.image === 'string' ? <img src={project.image} alt="Project" style={{ width: '100px', height: '100px' }} /> : 'No Image'}
                        />
                        <div>
                            <IconButton onClick={() => handleEdit(project)}>
                                <Edit />
                            </IconButton>
                            <IconButton onClick={() => handleDelete(project.id)}>
                                <Delete />
                            </IconButton>
                        </div>
                    </ListItem>
                ))}
            </List>
            {editingProject && <EditProject project={editingProject} />}
        </Paper>
    );
};

export default ProjectsList;
