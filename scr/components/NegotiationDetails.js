import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Card, CardContent, Button, Box, TextField } from '@mui/material';

// ダミーデータ：企業詳細、AI要約、チャット履歴など
const dummyNegotiationData = {
    a: {
        company: 'A社（製造業・売上50億円）',
        industry: '製造業',
        lastContact: '2025-02-20',
        profile: 'A社は製造業界で急成長中。新工場建設を検討中との情報あり。',
        aiSummary: 'A社は新工場建設を検討中の可能性。追加融資ニーズが潜在課題か？',
        chatHistory: [
            { role: 'user', message: 'この新工場の話、類似事例はある？' },
            { role: 'ai', message: '製造業で同様に新工場資金調達を行ったB社事例があります。' }
        ]
    },
    b: {
        company: 'B社（IT業・売上100億円）',
        industry: 'IT業',
        lastContact: '2025-02-18',
        profile: 'B社はIT業界で革新的なサービスを提供中。',
        aiSummary: 'B社はデジタル変革に注力しており、クラウド投資の可能性が高い。',
        chatHistory: []
    }
};

function NegotiationDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const data = dummyNegotiationData[id];

    const [chatInput, setChatInput] = useState('');
    const [chatMessages, setChatMessages] = useState(data.chatHistory || []);

    const handleChatSubmit = () => {
        if (!chatInput.trim()) return;
        const newMessage = { role: 'user', message: chatInput };
        // モックとして固定のAI回答を追加
        const aiResponse = { role: 'ai', message: '補足情報: 類似事例はB社のケースが参考になります。' };
        setChatMessages([...chatMessages, newMessage, aiResponse]);
        setChatInput('');
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h5">{data.company}</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                {/* 左パネル：企業プロフィール */}
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1">プロフィール</Typography>
                            <Typography variant="body2">{data.profile}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* 中央パネル：AI要約＆チャット */}
                <Grid item xs={12} md={6}>
                    <Card sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="subtitle1">AIによる要約</Typography>
                            <Typography variant="body1">{data.aiSummary}</Typography>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1">AIチャットアシスタント</Typography>
                            <Box sx={{ maxHeight: 200, overflowY: 'auto', mb: 1, border: '1px solid #ccc', p: 1 }}>
                                {chatMessages.map((msg, index) => (
                                    <Typography key={index} variant="body2" sx={{ color: msg.role === 'ai' ? 'blue' : 'black' }}>
                                        {msg.role === 'ai' ? 'AI: ' : 'あなた: '}{msg.message}
                                    </Typography>
                                ))}
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <TextField
                                    fullWidth
                                    value={chatInput}
                                    onChange={(e) => setChatInput(e.target.value)}
                                    placeholder="質問を入力..."
                                    size="small"
                                />
                                <Button variant="contained" onClick={handleChatSubmit} sx={{ ml: 1 }}>
                                    送信
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                {/* 右パネル：関連情報 */}
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1">関連情報リンク</Typography>
                            <Typography variant="body2">過去の類似案件や業界ニュースのリンクを掲載</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Box sx={{ mt: 3 }}>
                <Button variant="contained" onClick={() => navigate('/proposal')}>
                    提案書ドラフト作成へ
                </Button>
            </Box>
        </Container>
    );
}

export default NegotiationDetails;
