// src/components/UploadProject.jsx
import React, { useState } from 'react';
import { useProjects } from '../../context/ProjectsContex';
import { TextField, Button, Paper, Typography, Stack } from '@mui/material';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const UploadProject = () => {
    const { createProject, loading, error } = useProjects();
    const [file, setFile] = useState(null);
    const [link, setLink] = useState('');

    const handleImageChange = (e) => {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => setFile(reader.result);
        reader.onerror = (error) => console.log(error);
    };

    const handleLinkChange = (e) => setLink(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file && link) {
            await createProject(link, file);
        }
    };

    return (
        <div className="container">
            <Link className='admin-left_link'>
                <FaArrowLeftLong />
            </Link>
            <Paper elevation={3} sx={{ padding: 2 }} className='admin-upload'>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Upload New Project
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Project Link"
                        value={link}
                        onChange={handleLinkChange}
                        sx={{ mb: 2 }}
                    />
                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="contained"
                            component="label"
                        >
                            Upload Image
                            <input
                                type="file"
                                hidden
                                onChange={handleImageChange}
                                accept="image/*"
                            />
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={loading}
                        >
                            Upload
                        </Button>
                    </Stack>
                    {error && <p>Error: {error.message}</p>}
                </form>
            </Paper>
        </div>
    );
};

export default UploadProject;
