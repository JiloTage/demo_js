// src/pages/SummaryNextAction.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Container, Typography, Paper, Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DashboardContext } from '../contexts/DashboardContext';
import PageTitleBreadcrumb from '../components/PageTitleBreadcrumb';

export default function SummaryNextAction() {
    const navigate = useNavigate();
    const { negotiationCards, setNegotiationCards, feedbackResult } = useContext(DashboardContext);

    const fullSummary = `【商談まとめ】
■ 顧客企業：株式会社テックソリューションズ
■ 提案内容：新工場建設に伴う資金調達プランのご提案
■ 主な議論点：
  - 財務状況：直近の決算で売上高は120億円、利益額10億円、自己資本比率35%と堅調な経営基盤を有する。
  - 銀行との取引実績：20年以上の実績、過去融資実績は80億円を超え、信用力は非常に高い。
  - 市場動向：国内景気は回復基調にあり、競合他社と比較しても高成長が期待される。
■ 次回アクション：
  - 具体的な融資条件の再検討と、最適な資金調達プランの策定
  - 追加リスク分析および市場動向の詳細調査
  - 顧客からの追加要望を踏まえた提案内容のブラッシュアップ

※ 本内容は、過去議事録やフィードバックを基にしたシミュレーション結果です。`;

    // draftText の状態。初期は「AIがドラフトを生成中...」
    const [draftText, setDraftText] = useState("AIがドラフトを生成中...");

    // simulateTypingEffect：fullText を1文字ずつ draftText に反映
    const simulateTypingEffect = (fullText, callback) => {
        let currentText = "";
        let i = 0;
        const interval = setInterval(() => {
            currentText += fullText[i];
            setDraftText(currentText);
            i++;
            if (i >= fullText.length) {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 50); // 50ms ごとに1文字追加
    };

    // コンポーネントマウント後、2秒後にタイピング効果を開始
    useEffect(() => {
        const timeout = setTimeout(() => {
            simulateTypingEffect(fullSummary, () => { });
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    // CRM提出ボタン押下時の処理
    const handleSubmit = () => {
        alert("CRMが提出されました");
        // 「株式会社テックソリューションズ」のカードを urgent: false にして末尾に移動
        const targetCard = negotiationCards.find(card => card.name === "株式会社テックソリューションズ");
        if (targetCard) {
            const updatedCard = { ...targetCard, urgent: false, importance: "中", status: "進行中", phase: "ニーズヒヤリング段階", nextAction: "追加資料送付" };
            const others = negotiationCards.filter(card => card.name !== "株式会社テックソリューションズ");
            setNegotiationCards([...others, updatedCard]);
        }
        navigate("/dashboard");
    };

    return (
        <Container sx={{ mt: 4 }}>
            <PageTitleBreadcrumb activePhase="summary-next-action" />
            <Typography variant="h4" gutterBottom>
                CRM作成
            </Typography>
            <Paper sx={{ p: 2, mb: 2 }}>
                <TextField
                    label="商談まとめ"
                    multiline
                    rows={10}
                    fullWidth
                    variant="outlined"
                    value={fullSummary}
                // onChange={(e) => setDraftText(e.target.value)}
                />
            </Paper>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" onClick={handleSubmit}>
                    CRM提出
                </Button>
            </Box>
            {/* フィードバック表示セクション */}
            {feedbackResult && (
                <Paper sx={{ p: 2, mb: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        フィードバック
                    </Typography>
                    <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                        {feedbackResult}
                    </Typography>
                </Paper>
            )}
        </Container>
    );
}
