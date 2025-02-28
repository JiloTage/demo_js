// src/pages/ChatAssistant.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import ChatBubble from '../components/ChatBubble';
import { useLocation } from 'react-router-dom';
import { DashboardContext } from '../contexts/DashboardContext';

export default function ChatAssistant() {
    const {
        chatMessages,
        addChatMessage,
        clearChatMessages,
        chatPrefill,
        setChatPrefill,
        updateLastChatMessage,
        setSimilarAnalysisResult,
        setFeedbackResult,
        setNegotiationCards,
        setMemoResult
    } = useContext(DashboardContext);
    const location = useLocation();
    const initialMessages = [
        { id: 1, text: 'こんにちは、どのようなお手伝いが必要ですか？', isUser: false }
    ];
    const [localInput, setLocalInput] = useState("");

    useEffect(() => {
        if (location.pathname === "/dashboard") {
            setChatPrefill("商談を締切でソートして");
        } else if (location.pathname === "/meeting-preparation") {
            setChatPrefill("類似企業のニーズを分析して");
        } else if (location.pathname === "/summary-next-action") {
            setChatPrefill("フィードバックして");
        } else {
            setChatPrefill("");
        }
    }, [location, setChatPrefill]);

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
            }
        }, 50);
    };

    const handleSend = () => {
        if (localInput.trim() === "") return;
        const userMsg = { id: Date.now(), text: localInput, isUser: true };
        addChatMessage(userMsg);
        let aiFullResponse = "";

        if (localInput.includes("類似企業のニーズを分析して")) {
            aiFullResponse = "承知しました。類似企業について、どのような観点（業種、事業規模など）で検索しますか？";
        } else if (localInput.trim() === "業種が近いものについて") {
            // ニーズ仮説と同じ内容を生成（HTMLタグは除去）
            const analysisText = [
                "1. 初期投資効率の改善: 設備投資コストが高いため、効率的な資金運用が求められる。",
                "2. 返済負担の軽減: 既存借入の返済負担が大きく、条件見直しが必要。",
                "3. 市場成長性の活用: 業界平均を上回る成長が期待され、さらなる資金調達が可能。"
            ].join("\n");
            setSimilarAnalysisResult("");
            // 2秒後にタイピング効果でフィードバック文を生成
            setTimeout(() => {
                let currentText = "";
                let i = 0;
                const interval = setInterval(() => {
                    currentText += analysisText[i];
                    setSimilarAnalysisResult(currentText);
                    i++;
                    if (i >= analysisText.length) {
                        clearInterval(interval);
                    }
                }, 50);
            }, 2000);
            aiFullResponse = "ニーズ分析の結果をページに追加します。";
        } else if (localInput.trim() === "フィードバックして") {
            const feedbackText = [
                "提案内容や主な議論点、次回アクションが明確に整理されており、商談の概要を把握しやすい良い構成になっています。",
                "以下の項目があるとより網羅的な内容になるかと思います。",
                "1. 商談の目的・ゴール",
                "提案や議論の背景となる「本日のゴール」を簡潔に整理しておくと、関係者が同じ認識を持ちやすくなります。",
                "2. 決定事項（確定内容）と未決事項（懸念点）",
                "議論点と次回アクションの間に、「確定したこと（合意事項）」と「これから検討が必要なこと」を明確に区分しておくと、後で読み返す際に非常にわかりやすくなります。"
            ].join("\n");
            setFeedbackResult("");
            // 2秒後にタイピング効果でフィードバック文を生成
            setTimeout(() => {
                let currentText = "";
                let i = 0;
                const interval = setInterval(() => {
                    currentText += feedbackText[i];
                    setFeedbackResult(currentText);
                    i++;
                    if (i >= feedbackText.length) {
                        clearInterval(interval);
                    }
                }, 50);
            }, 2000);
            aiFullResponse = "フィードバックをページに記載します。";
        } else if (localInput.trim() === "商談を締切でソートして") {
            // 商談カードを dueDate でソートする（文字列なのでそのまま比較可能）
            setNegotiationCards(prevCards => {
                const sorted = [...prevCards].sort((a, b) => a.dueDate.localeCompare(b.dueDate));
                return sorted;
            });
            aiFullResponse = "商談を締切でソートしました。";
        } else if (localInput.trim() === "このニュースに興味があるお客さんいない？") {
            aiFullResponse = "株式会社グローバルネットワーク様は過去に関連する取引があり、現在も興味を持たれている可能性があります。\n関連度順に商談をソートしますか？";
        } else if (localInput.trim() === "はい") {
            // 商談カードを dueDate でソートする（文字列なのでそのまま比較可能）
            setNegotiationCards(prevCards => {
                const sorted = [...prevCards].sort((a, b) => a.dueDate.localeCompare(b.news));
                return sorted;
            });
            aiFullResponse = "商談ピックアップを関連度準にソートしました。";
        } else if (localInput.trim() === "メモ：売掛金の回収に困っているらしい") {
            const memoFullText = [
                "売掛金の回収に困っている",
                "-> 売掛債権を保証するサービス行うグループ会社を紹介すると良いかもしれない",
            ].join("\n");
            setMemoResult("");
            // 2秒後にタイピング効果でフィードバック文を生成
            setTimeout(() => {
                let currentText = "";
                let i = 0;
                const interval = setInterval(() => {
                    currentText += memoFullText[i];
                    setMemoResult(currentText);
                    i++;
                    if (i >= memoFullText.length) {
                        clearInterval(interval);
                    }
                }, 50);
            }, 2000);
            aiFullResponse = "メモ欄に追記しました。また、弊社には売掛債権を保証するサービス行うグループ会社が存在しており、お繋ぎしてもいいかもしれません。";
        } else {
            aiFullResponse = "承知しました。引き続きお手伝いします。";
        }

        setTimeout(() => {
            addChatMessage({ id: Date.now() + 1, text: "", isUser: false });
            simulateTyping(aiFullResponse, () => {
                addChatMessage({ id: Date.now() + 2, text: aiFullResponse, isUser: false });
            });
        }, 2000);

        setLocalInput("");
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
