import React, { useState } from 'react';
import { Modal, TextField, Button, Typography, Box } from '@mui/material';
import { useProjects } from '../../context/ProjectsContex';

const EditProject = ({ project }) => {
    const { updateProject } = useProjects();
    const [link, setLink] = useState(project.link || '');
    const [image, setImage] = useState(project.image || '');
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    } 
        

    const handleSave = async () => {
        try {
            await updateProject(project.id, link, image);
            handleClose();
            console.log(project)
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{ padding: 2, backgroundColor: 'white', width: 400, margin: 'auto', marginTop: '100px' }}>
                <Typography variant="h6">Edit Project</Typography>
                <TextField
                    fullWidth
                    label="Project Link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    label="Project Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <Button variant="contained" color="primary" onClick={handleSave}>
                    Save
                </Button>
            </Box>
        </Modal>
    );
};

export default EditProject;
