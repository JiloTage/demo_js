import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    営業支援システム
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} to="/dashboard">ダッシュボード</Button>
                    <Button color="inherit" component={Link} to="/preparation">折衝準備</Button>
                    <Button color="inherit" component={Link} to="/negotiation">折衝実施</Button>
                    <Button color="inherit" component={Link} to="/needs">ニーズ整理</Button>
                    <Button color="inherit" component={Link} to="/proposal">提案書作成</Button>
                    <Button color="inherit" component={Link} to="/delivery">提案実施</Button>
                    <Button color="inherit" component={Link} to="/followups">フォローアップ</Button>
                    <Button color="inherit" component={Link} to="/chat">AIチャットアシスタント</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
