// src/pages/Dashboard.jsx
import React, { useContext, useState } from 'react';
import {
    Container, Typography, Grid, Card, CardContent, CardActionArea,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Box
} from '@mui/material';
import { DashboardContext } from '../contexts/DashboardContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ userName }) {
    const navigate = useNavigate();
    const { negotiationCards, newsCards, reportCards, addChatMessage, updateLastChatMessage } = useContext(DashboardContext);
    const [searchQuery, setSearchQuery] = useState("");

    // 検索クエリが空ならすべてのカードを表示するようにする
    const filteredNegotiationCards = negotiationCards.filter((card) => {
        const query = searchQuery.trim().toLowerCase();
        if (query === "") return true;
        return (
            card.name.toLowerCase().includes(query) ||
            (card.storeNumber && card.storeNumber.toLowerCase().includes(query)) ||
            (card.customerNumber && card.customerNumber.toLowerCase().includes(query))
        );
    });

    // タイピング効果をシミュレートする関数（共通）
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
        }, 50);
    };

    // 表（最新ニュースなど）の行がクリックされた場合の処理
    const handleRowClick = (item, blockType) => {
        const identifier = blockType === "直近の取引・訪問実績"
            ? `${item.date} ${item.type}`
            : item.title;
        const userMsg = { id: Date.now(), text: `${identifier} の詳細を説明`, isUser: true };
        addChatMessage(userMsg);
        // すぐに空のAIメッセージ（プレースホルダー）を追加
        addChatMessage({ id: Date.now() + 1, text: "", isUser: false });
        // 2秒後にタイピング効果でAIの詳細回答を表示
        setTimeout(() => {
            const fullResponse = `【詳細回答】「${identifier}」について、詳細な説明は以下の通りです。\n${item.summary}\n※（ダミーデータによる回答です。）`;
            simulateTyping(fullResponse, () => {
                addChatMessage({ id: Date.now() + 2, text: fullResponse, isUser: false });
            });
        }, 2000);
    };

    // 商談カードをクリックした場合の処理
    const handleCardClick = (card, type) => {
        if (type === "negotiation") {
            navigate(`/meeting-preparation`, { state: { company: card } });
        } else if (type === "report") {
            navigate("/analysis-report", { state: { report: card } });
        }
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

            {/* 検索欄 */}
            <TextField
                fullWidth
                variant="outlined"
                placeholder="検索（店番、顧客番号、企業名）"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ mb: 3 }}
            />

            {/* 商談グループ */}
            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
                商談
            </Typography>
            <Grid container spacing={2}>
                {filteredNegotiationCards.map((card) => (
                    <Grid item xs={12} sm={6} md={4} key={card.id}>
                        <Card draggable="true">
                            <CardActionArea onClick={() => handleCardClick(card, "negotiation")}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        {card.urgent && (
                                            <Typography variant="h4" sx={{ color: 'red', mr: 1 }}>
                                                ‼
                                            </Typography>
                                        )}
                                        <Typography variant="h6">
                                            {card.name}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2">
                                        <strong>店番:</strong> {card.storeNumber}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>顧客番号:</strong> {card.customerNumber}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>開始日時:</strong> {card.meetingStart}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>フェーズ:</strong> {card.phase}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>対応締切:</strong> {card.dueDate}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>状況:</strong> {card.status}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>次のアクション:</strong> {card.nextAction}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>重要度:</strong> {card.importance}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* 最新ニュースグループ（Salesforce風テーブル） */}
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                最新ニュース
            </Typography>
            <TableContainer component={Paper} sx={{ mb: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>タイトル</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>概要</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {newsCards.map((card) => (
                            <TableRow
                                key={card.id}
                                hover
                                onClick={() => handleRowClick(card, "最新ニュース")}
                                style={{ cursor: "pointer" }}
                            >
                                <TableCell>{card.title}</TableCell>
                                <TableCell>{card.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* 分析レポートグループ */}
            {reportCards.length > 0 && (
                <>
                    <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                        分析レポート
                    </Typography>
                    <Grid container spacing={2}>
                        {reportCards.map((card) => (
                            <Grid item xs={12} sm={6} md={4} key={card.id}>
                                <Card draggable="true">
                                    <CardActionArea onClick={() => handleCardClick(card, "report")}>
                                        <CardContent>
                                            <Typography variant="h6" gutterBottom>
                                                {card.title}
                                            </Typography>
                                            <Typography variant="body2">
                                                {card.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </Container>
    );
}
