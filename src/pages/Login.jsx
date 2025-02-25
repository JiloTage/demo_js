import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Paper } from '@mui/material';

export default function Login({ onLogin }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() !== '') {
            onLogin(name);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Paper sx={{ p: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    ログイン
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        label="ユーザーID"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <TextField
                        label="パスワード"
                        variant="outlined"
                        fullWidth
                        type="password"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
                        ログイン
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}
