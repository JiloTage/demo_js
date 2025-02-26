import React, { useState, useEffect } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import ChatBubble from '../components/ChatBubble';
import { useLocation } from 'react-router-dom';

export default function ChatAssistant() {
    const [messages, setMessages] = useState([
        { id: 1, text: 'こんにちは、どのようなお手伝いが必要ですか？', isUser: false }
    ]);
    const [input, setInput] = useState('');
    const location = useLocation();
    const [autoTriggered, setAutoTriggered] = useState(false);

    // MeetingPreparation ページに遷移した場合、2秒後に自動メッセージを追加
    useEffect(() => {
        if (location.pathname === "/meeting-preparation" && !autoTriggered) {
            setAutoTriggered(true);
            setTimeout(() => {
                const autoMsg = {
                    id: messages.length + 1,
                    text: "A社の類似企業情報について、よければお調べします。業種・売上規模など軸になる観点はございますか？",
                    isUser: false
                };
                setMessages((prev) => [...prev, autoMsg]);
            }, 500);
        } else if (location.pathname !== "/meeting-preparation") {
            // MeetingPreparation 以外に移動したらフラグをリセット
            setAutoTriggered(false);
        }
    }, [location, autoTriggered, messages.length]);

    const handleSend = () => {
        if (input.trim() === '') return;
        const userMessage = { id: messages.length + 1, text: input, isUser: true };
        let aiResponse;

        if (input.includes("業種") || input.includes("売上")) {
            const similarCompanies = [
                "企業X（マスク済み）：業種: 製造業, 売上規模: 40-60億円",
                "企業Y（マスク済み）：業種: 製造業, 売上規模: 45-55億円",
                "企業Z（マスク済み）：業種: 製造業, 売上規模: 50-70億円"
            ];
            aiResponse = {
                id: messages.length + 2,
                text: `こちらが類似企業の調査結果です。\n\n${similarCompanies.join('\n\n')}\n\nどの企業に興味がありますか？`,
                isUser: false
            };
        } else {
            aiResponse = {
                id: messages.length + 2,
                text: '承知しました。引き続きお手伝いします。',
                isUser: false
            };
        }

        setMessages([...messages, userMessage, aiResponse]);
        setInput('');
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                AIチャットアシスタント
            </Typography>
            <Box
                sx={{
                    border: '1px solid #ccc',
                    borderRadius: 2,
                    p: 2,
                    minHeight: '400px',
                    maxHeight: '500px',
                    overflowY: 'auto',
                    mb: 2
                }}
            >
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
