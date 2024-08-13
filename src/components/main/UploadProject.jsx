// src/components/UploadProject.jsx
import React, { useState } from 'react';
import { useProjects } from '../../context/ProjectsContex';
import { MdLinkedCamera } from 'react-icons/md';

const UploadProject = () => {
    const { createProject, loading, error, projects } = useProjects();
    const [file, setFile] = useState(null);
    const [link, setLink] = useState('')

    const handleImage = (e) => {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setFile(reader.result)
        };
        reader.onerror = (error) => {
            console.log({ error: error });
        };
    };

    const handleLinkChange = (e) => {
        setLink(e.target.value);  
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file && link) {
            try {
                await createProject(link, file);
            } catch (error) {
                console.error('Error creating project:', error);
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleImage} accept="image/*" />
                <input type="text" onChange={handleLinkChange } value={link} />
                <button type="submit" disabled={loading}>Upload</button>
            </form>
            {error && <p>Error: {error.message}</p>}
        </div>
    );
};

export default UploadProject;
