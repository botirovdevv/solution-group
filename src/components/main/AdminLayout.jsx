// src/components/AdminLayout.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Home, AddBox, ListAlt } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const AdminLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItem button component={Link} to="/admin">
                            <ListItemIcon><Home /></ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem button component={Link} to="/admin/projects">
                            <ListItemIcon><ListAlt /></ListItemIcon>
                            <ListItemText primary="Projects List" />
                        </ListItem>
                        <ListItem button component={Link} to="/admin/upload">
                            <ListItemIcon><AddBox /></ListItemIcon>
                            <ListItemText primary="Upload Project" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default AdminLayout;
