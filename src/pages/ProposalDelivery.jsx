import React from 'react';
import { Container, Typography, Paper, Button, Box, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ProposalDelivery() {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                提案実施
            </Typography>
            <Paper sx={{ p: 2, mb: 2 }}>
                <List>
                    <ListItem>
                        <ListItemText primary="商談結果: 顧客に提案書を提示済み。" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="CRM更新: 商談ステータスを「提案済み」に更新。" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="フォローアップ: 次回フォローコールを2025-03-01に設定。" />
                    </ListItem>
                </List>
            </Paper>
            <Box>
                <Button variant="contained" component={Link} to="/dashboard">
                    ダッシュボードに戻る
                </Button>
            </Box>
        </Container>
    );
}
