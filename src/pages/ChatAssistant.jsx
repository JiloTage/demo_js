import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import ChatBubble from '../components/ChatBubble';

export default function ChatAssistant() {
    const [messages, setMessages] = useState([
        { id: 1, text: 'こんにちは、どのようなお手伝いが必要ですか？', isUser: false }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim() === '') return;
        const userMessage = { id: messages.length + 1, text: input, isUser: true };
        // 固定の AI レスポンス（モック）
        const aiResponse = { id: messages.length + 2, text: '製造業で新工場資金調達を行ったB社事例があります。成功した融資プランは「〇〇プラン」です。', isUser: false };
        setMessages([...messages, userMessage, aiResponse]);
        setInput('');
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                AIチャットアシスタント
            </Typography>
            <Box sx={{ border: '1px solid #ccc', borderRadius: 2, p: 2, minHeight: '400px', maxHeight: '500px', overflowY: 'auto', mb: 2 }}>
                {messages.map((msg) => (
                    <ChatBubble key={msg.id} message={msg.text} isUser={msg.isUser} />
                ))}
            </Box>
            <Box sx={{ display: 'flex' }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="メッセージを入力..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button variant="contained" onClick={handleSend} sx={{ ml: 1 }}>
                    送信
                </Button>
            </Box>
        </Container>
    );
}
