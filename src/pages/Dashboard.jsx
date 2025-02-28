// src/pages/Dashboard.jsx
import React, { useContext, useState } from 'react';
import {
    Container, Typography, Grid, Card, CardContent, CardActionArea,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Box,
    alpha
} from '@mui/material';
import { DashboardContext } from '../contexts/DashboardContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ userName }) {
    const navigate = useNavigate();
    const { negotiationCards, newsCards, reportCards, addChatMessage, updateLastChatMessage, alerts } = useContext(DashboardContext);
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

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

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


    const dummyData = `
      【市場分析レポート - ダミーデータ】
      
      ■ 経済指標:
      - GDP成長率: 3.2%
      - 失業率: 2.5%
      - 消費者物価指数4%
      
      ■ 業界動向:
      - 主要企業A: 市場シェア拡大中、積極的な投資を実施
      - 主要企業B: 新製品投入で成長加速
      - 業界再編の兆し: M&Aの動きが活発化中
      
      ■ 市場リスク:
      - 為替変動リスク
      - 国際情勢の不透明感
      - 政府の金融政策変更による影響
      
      ■ 今後の見通し:
      - 技術革新による新市場開拓の可能性
      - 政府の政策変更が市場に与える影響
      - 消費者動向の変化に注視
      
      ※ このレポートはダミーデータです。
        `;


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


            {/* アラート */}
            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
                TODO
            </Typography>
            <TableContainer component={Paper} sx={{ mb: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>タイトル</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>要件</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {alerts.map((alert) => (
                            <TableRow
                                key={alert.id}
                                hover
                                onClick={() => handleCardClick(alert, "negotiation")}
                                style={{ cursor: "pointer" }}
                            >
                                {alert.id == 1 && (<TableCell sx={{ color: 'red', fontWeight: 'bold' }}>{alert.title}</TableCell>)}
                                {alert.id != 1 && (<TableCell>{alert.title}</TableCell>)}
                                <TableCell>{alert.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>



            {/*  ボタン */}
            {/* 目次セクション */}


            {/* 最新ニュースグループ（Salesforce風テーブル） */}
            <Typography variant="h5" id="news" gutterBottom sx={{ mt: 4 }}>
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
            <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
                クリックしてチャットで詳細を確認しましょう
            </Typography>

            {/* 商談グループ */}
            <Typography variant="h5" id="negotiation" gutterBottom sx={{ mt: 3 }}>
                商談ピックアップ
            </Typography>
            <TextField
                fullWidth
                variant="outlined"
                placeholder="検索（店番、顧客番号、企業名）"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ mb: 3 }}
            />
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
                                            <strong>対応締切:</strong>{card.dueDate}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1">
                                        <strong>重要度:</strong> {card.importance}
                                    </Typography>
                                    <Typography variant="h6">
                                        {card.name}
                                    </Typography>
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
                                        <strong>状況:</strong> {card.status}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>次のアクション:</strong> {card.nextAction}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>


            <Typography variant="h5" id="activity-report" gutterBottom sx={{ mt: 4 }}>
                活動報告書
            </Typography>
            <Typography variant="body2" id="activity-report" gutterBottom sx={{ mt: 1 }}>
                昨日の記録から本日の活動予定を提示しています。修正があればチャットでお申し付けください。
            </Typography>
            <Paper sx={{ p: 2, mb: 2 }}>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                    {`
                    【本日の活動状況】
                    ・10:00 - 11:00 : クライアントAとの初回ミーティングを実施
                    ・11:30 - 12:00 : 商談資料の作成・確認
                    ・13:00 - 14:00 : クライアントBへのフォローアップコール
                    ・14:30 - 15:00 : 市場動向の最新情報チェック
                    ・15:30 - 16:00 : 社内ミーティング（進捗確認・次回アクションの検討）

                    【今後の予定】
                    ・明日 : クライアントCとの次回打ち合わせ
                    ・来週 : 商談資料の最終調整と提案準備
                    ・月末 : 全体活動の振り返りと改善策の検討

                    `}
                </Typography>
            </Paper>


            {/* 分析レポートグループ */}
            <Typography variant="h5" gutterBottom>
                市場分析
            </Typography>
            <Typography variant="body2" gutterBottom>
                AIが分析レポートを作成しました。特に気になる箇所があればチャットでご相談ください。
            </Typography>

            <Paper sx={{ p: 2, mb: 2 }}>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                    {dummyData}
                </Typography>
            </Paper>


        </Container>
    );
}
