import React, { useState } from 'react'
import UploadProject from '../../components/main/UploadProject';
import ProjectsList from '../../components/main/ProjectsList';

const Admin = () => {
    const [password, setPassword] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        if (password === 'solutionadmin') {
            setIsAuthenticated(true);
        } else {
            alert('Noto‘g‘ri parol');
        }
    }
    return (
        <>
            {
                isAuthenticated ? (
                    <div>
                        <UploadProject/>
                        <ProjectsList/>
                    </div>
                ) : (
            <form onSubmit={handleLogin} className='admin-items'>
                <h1 className='admin-title'>Admin sahifasiga kirish uchun to'g'ri parolni kiriting!</h1>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Parol"
                    className='admin-input'
                />
                <button type='submit' className='admin-btn'>Kirish</button>

            </form>
            )
                    }
        </>
    )
}

export default Admin