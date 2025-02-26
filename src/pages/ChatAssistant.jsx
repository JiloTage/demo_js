// src/pages/ChatAssistant.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import ChatBubble from '../components/ChatBubble';
import { useLocation } from 'react-router-dom';
import { DashboardContext } from '../contexts/DashboardContext';

export default function ChatAssistant() {
    const { chatMessages, addChatMessage, clearChatMessages, chatPrefill, setChatPrefill, updateLastChatMessage } = useContext(DashboardContext);
    const location = useLocation();
    const initialMessages = [
        { id: 1, text: 'こんにちは、どのようなお手伝いが必要ですか？', isUser: false }
    ];
    const [localInput, setLocalInput] = useState("");

    // 画面遷移に応じたプリフィル設定
    useEffect(() => {
        if (location.pathname === "/dashboard") {
            setChatPrefill("市場ニュース分析");
        } else if (location.pathname === "/meeting-preparation") {
            setChatPrefill("関連ニュースを調べて");
        } else {
            setChatPrefill("");
        }
    }, [location, setChatPrefill]);

    // chatPrefill が更新されたら localInput に反映
    useEffect(() => {
        setLocalInput(chatPrefill);
    }, [chatPrefill]);

    // タイピング効果をシミュレートする関数
    const simulateTyping = (fullText, callback) => {
        let currentText = "";
        let i = 0;
        const interval = setInterval(() => {
            currentText += fullText[i];
            updateLastChatMessage(currentText);
            i++;
            if (i >= fullText.length) {
                clearInterval(interval);
                callback();
            }
        }, 50); // 1文字あたり50ms
    };

    const handleSend = () => {
        if (localInput.trim() === "") return;
        const userMsg = { id: Date.now(), text: localInput, isUser: true };
        console.log("User message sent:", userMsg);
        addChatMessage(userMsg);

        let aiFullResponse = "";
        if (localInput.includes("市場ニュース分析")) {
            aiFullResponse = "市場ニュース分析の結果をまとめました。国内景気は回復基調にあり、今後の金融政策見直しが予想されます。";
        } else if (localInput.includes("ヒアリング項目を出して")) {
            aiFullResponse = "ヒアリング項目：\n1. 新工場の規模と時期\n2. 必要資金の概算\n3. 既存借入の状況\n4. 将来の海外展開有無";
        } else if (localInput.includes("同業企業の分析")) {
            aiFullResponse = "同業企業の分析結果：主要競合の売上高は80〜95億円、成長率は5〜7％。業界平均を上回る傾向が認められます。";
        } else if (localInput.includes("より詳細な分析")) {
            aiFullResponse = "詳細分析：複数年度の決算データ、キャッシュフロー、信用評価指標を統合し、リスク要因と成長予測を分析しました。";
        } else if (localInput.includes("関連ニュースを調べて")) {
            // 新たなレポートカードとして、関連ニュースのデータを追加
            const newReport = {
                id: Date.now(),
                title: "関連ニュース分析レポート",
                type: "relatedNews",
                news: [
                    { id: 1, title: "金融政策の見直し", description: "最新統計で政府が金融政策の転換を検討中。" },
                    { id: 2, title: "市場動向の変化", description: "消費者信頼感指数が上昇、景気回復の兆しが見られます。" },
                    { id: 3, title: "業界再編の兆し", description: "大手企業の合併・買収が進み、業界全体で再編が進行中。" }
                ],
                target: "dashboard"
            };
            // グローバル状態にレポートカードを追加
            // ※ DashboardContext の addReportCard 関数を利用する実装が必要
            // ここでは仮に aiFullResponse として返答
            aiFullResponse = "関連ニュース分析の結果を追加しました。";
            // ※ addReportCard(newReport) を実行（実装済み前提）
            // ここでは addChatMessage でダミーの通知メッセージを送信
            addChatMessage({ id: Date.now() + 100, text: "【通知】関連ニュース分析のレポートが追加されました。", isUser: false });
        } else {
            aiFullResponse = "承知しました。引き続きお手伝いします。";
        }

        // 2秒後にタイピング効果を開始
        setTimeout(() => {
            addChatMessage({ id: Date.now() + 1, text: "", isUser: false });
            simulateTyping(aiFullResponse, () => {
                addChatMessage({ id: Date.now() + 2, text: aiFullResponse, isUser: false });
            });
        }, 2000);

        setLocalInput(""); // 送信後はクリア
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                AIチャットアシスタント
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                <Button variant="outlined" size="small" onClick={clearChatMessages}>
                    クリア
                </Button>
            </Box>
            <Box
                sx={{
                    border: '1px solid #ccc',
                    borderRadius: 2,
                    p: 2,
                    minHeight: '400px',
                    maxHeight: '500px',
                    overflowY: 'auto',
                    mb: 2,
                    whiteSpace: 'pre-line'
                }}
            >
                {chatMessages.map((msg) => (
                    <ChatBubble key={msg.id} message={msg.text} isUser={msg.isUser} />
                ))}
            </Box>
            <Box sx={{ display: 'flex' }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="メッセージを入力..."
                    value={localInput}
                    onChange={(e) => setLocalInput(e.target.value)}
                />
                <Button variant="contained" onClick={handleSend} sx={{ ml: 1 }}>
                    送信
                </Button>
            </Box>
        </Container>
    );
}
