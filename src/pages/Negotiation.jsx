import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, Box, List, ListItem, ListItemText } from '@mui/material';
import ChatBubble from '../components/ChatBubble';

export default function Negotiation() {
    const questions = [
        "現在、お困りの点はございますか？",
        "今後の資金計画をお聞かせください。"
    ];
    // 固定のチャット会話（ダミーデータ）
    const initialMessages = [
        { id: 1, text: "この新工場の話、類似事例はある？", isUser: true },
        { id: 2, text: "製造業で同様に新工場資金調達を行ったB社事例。成功した融資プランは「〇〇プラン」です。", isUser: false }
    ];

    const [messages] = useState(initialMessages);
    const [memo, setMemo] = useState('');

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                折衝実施
            </Typography>
            <Typography variant="h6" gutterBottom>
                ヒアリング項目
            </Typography>
            <List>
                {questions.map((q, idx) => (
                    <ListItem key={idx}>
                        <ListItemText primary={`${idx + 1}. ${q}`} />
                    </ListItem>
                ))}
            </List>
            <Box sx={{ my: 2 }}>
                <TextField
                    label="面談メモ"
                    multiline
                    rows={4}
                    fullWidth
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                />
            </Box>
            <Paper sx={{ p: 2, mb: 2 }}>
                <Typography variant="subtitle1">AIチャット</Typography>
                {messages.map((msg) => (
                    <ChatBubble key={msg.id} message={msg.text} isUser={msg.isUser} />
                ))}
            </Paper>
        </Container>
    );
}
