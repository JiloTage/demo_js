import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

function Login() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // ダミー認証として、単にダッシュボードへ遷移
        navigate('/dashboard');
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    営業支援AIポータル
                </Typography>
                <TextField
                    fullWidth
                    label="ユーザー名"
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="パスワード"
                    type="password"
                    margin="normal"
                />
                <Button variant="contained" color="primary" onClick={handleLogin} sx={{ mt: 2 }}>
                    ログイン
                </Button>
            </Box>
        </Container>
    );
}

export default Login;
