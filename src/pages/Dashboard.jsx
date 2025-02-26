import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ userName }) {
    const navigate = useNavigate();
    const companies = [
        {
            id: 1,
            name: "顧客A",
            meetingStart: "2025-03-15 10:00",
            status: "未着手",
            nextAction: "初回ヒアリング実施",
            importance: "高"
        },
        {
            id: 2,
            name: "顧客B",
            meetingStart: "2025-03-20 14:00",
            status: "進行中",
            nextAction: "追加資料送付",
            importance: "中"
        },
        {
            id: 3,
            name: "顧客C",
            meetingStart: "2025-03-25 09:00",
            status: "完了",
            nextAction: "フォローアップ実施",
            importance: "低"
        }
    ];

    const handleCardClick = (company) => {
        navigate(`/meeting-preparation`, { state: { company } });
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                ダッシュボード
            </Typography>
            {userName && (
                <Typography variant="subtitle1" gutterBottom>
                    ようこそ、{userName}さん
                </Typography>
            )}
            <Grid container spacing={2}>
                {companies.map((company) => (
                    <Grid item xs={12} sm={6} md={4} key={company.id}>
                        <Card>
                            <CardActionArea onClick={() => handleCardClick(company)}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {company.name}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>商談開始日時:</strong> {company.meetingStart}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>商談状況:</strong> {company.status}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>必要なアクション:</strong> {company.nextAction}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>重要度:</strong> {company.importance}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
