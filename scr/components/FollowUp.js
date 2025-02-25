import React from 'react';
import { Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const dummyFollowUps = [
    { id: 1, message: "A社フォロー連絡推奨: 追加資料の確認" },
    { id: 2, message: "B社フォロー連絡推奨: 建設計画進捗確認" },
];

function FollowUp() {
    const navigate = useNavigate();
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h5">フォローアップ通知</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                {dummyFollowUps.map((item) => (
                    <Grid item xs={12} md={6} key={item.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="body1">{item.message}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button variant="contained" sx={{ mt: 3 }} onClick={() => navigate('/dashboard')}>
                ダッシュボードに戻る
            </Button>
        </Container>
    );
}

export default FollowUp;
