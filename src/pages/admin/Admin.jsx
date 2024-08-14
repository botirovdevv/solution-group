import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, Button } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { AdminRoutes } from '../../helpers/admin.routes';
import AdminLayout from '../../components/main/AdminLayout';

const Admin = () => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'solutionadmin') {
            setIsAuthenticated(true);
        } else {
            alert('Noto‘g‘ri parol');
        }
    };

    return (
        <Container>
            {
                isAuthenticated ? (
                    <AdminLayout> 
                        <Routes>
                            {AdminRoutes.map((item) => (
                                <Route path={item.path} element={item.element} key={item.path} />
                            ))}
                        </Routes>
                    </AdminLayout>
                ) : (
                    <div className='admin-items'>
                        <Paper elevation={3} sx={{ padding: 3, maxWidth: 400, textAlign: 'center' }}>
                            <Typography variant="h5" gutterBottom>
                                Admin sahifasiga kirish uchun to'g'ri parolni kiriting!
                            </Typography>
                            <form onSubmit={handleLogin}>
                                <TextField
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    label="Parol"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                                <Button variant="contained" color="primary" type="submit" fullWidth>
                                    Kirish
                                </Button>
                            </form>
                        </Paper>
                    </div>
                )
            }
        </Container>
    );
};

export default Admin;
