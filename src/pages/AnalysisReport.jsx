import React from 'react';
import { Container, Typography, Paper, Box, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AnalysisReport() {
    const location = useLocation();
    const navigate = useNavigate();
    const { report } = location.state || {};

    if (!report) {
        return (
            <Container sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>詳細分析レポート</Typography>
                <Typography variant="body1">レポートデータが見つかりませんでした。</Typography>
                <Button variant="contained" onClick={() => navigate(-1)}>戻る</Button>
            </Container>
        );
    }

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                {report.title}
            </Typography>
            <Paper sx={{ p: 2 }}>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                    {report.fullDescription || report.description}
                </Typography>
            </Paper>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" onClick={() => navigate(-1)}>戻る</Button>
            </Box>
        </Container>
    );
}
