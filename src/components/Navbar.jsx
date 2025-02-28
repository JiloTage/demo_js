import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component={Link}
                    to="/dashboard"
                    sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                >
                    営業支援システム
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} to="/dashboard">ダッシュボード</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
