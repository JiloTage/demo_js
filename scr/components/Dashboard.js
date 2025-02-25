import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Card, CardContent, Grid, Button, Box } from '@mui/material';

const dummyAlerts = [
    { id: 1, message: "本日中にフォローが必要な案件が2件" },
    { id: 2, message: "前回ヒアリングから2週間経過の顧客が3社" },
    { id: 3, message: "提案書ドラフト未確認が1件" },
];

function Dashboard() {
    const navigate = useNavigate();

    const handleCardClick = () => {
        // アラートカードクリックで商談リストへ遷移
        navigate('/negotiations');
    };

    return (
        <Container>
            <Box sx={{ mt: 4, mb: 2 }}>
                <Typography variant="h5">ダッシュボード</Typography>
            </Box>
            <Grid container spacing={2}>
                {dummyAlerts.map((alert) => (
                    <Grid item xs={12} md={4} key={alert.id}>
                        <Card onClick={handleCardClick} sx={{ cursor: 'pointer' }}>
                            <CardContent>
                                <Typography variant="body1">{alert.message}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ mt: 4 }}>
                <Button variant="contained" onClick={() => navigate('/negotiations')}>
                    商談リストへ
                </Button>
            </Box>
        </Container>
    );
}

export default Dashboard;
