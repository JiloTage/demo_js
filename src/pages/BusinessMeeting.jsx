// src/pages/BusinessMeeting.jsx
import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, TextField, Button, Box, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function BusinessMeeting() {
    const navigate = useNavigate();

    // 以前のヒアリング項目（例）
    const hearingItems = [
        {
            item: "新工場の規模と時期",
            summary: "<a href='#/minutes/new-factory'>【過去議事録】</a> 前回の商談では、顧客は新工場の規模について大まかな希望を示していましたが、具体的な時期は未定でした。<br/>キーポイント：従来の計画よりも大規模な工場設立の可能性。<br/>懸念事項：建設時期の不確定性と市場動向の変化。"
        },
        {
            item: "必要資金の概算",
            summary: "<a href='#/minutes/new-factory'>【過去議事録】</a> 前回は約40億円と見積もられていましたが、最新の財務データからは50億円に上昇する可能性が示唆されています。<br/>キーポイント：資金調達規模の拡大。<br/>懸念事項：予算確保と融資条件の再検討が必要。"
        },
        {
            item: "既存借入の状況",
            summary: "<a href='#/minutes/new-factory'>【過去議事録】</a> 既存の借入残高が高いことが指摘され、返済スケジュールに対する懸念がありました。<br/>キーポイント：追加融資が既存借入に及ぼす影響。<br/>懸念事項：借入条件の改善および返済計画の見直し。"
        },
        {
            item: "将来の海外展開有無",
            summary: "<a href='#/minutes/new-factory'>【過去議事録】</a> 海外展開については一部前向きな意見がありましたが、具体的な計画は未定です。<br/>キーポイント：海外市場での競合状況と現地ニーズの変化。<br/>懸念事項：戦略的判断とリスク管理の必要性。"
        }
    ];

    // フィードバック用の初期値（銀行営業現場をイメージした内容）
    const defaultFeedback = {
        customerReaction: "顧客は当行の提案に対して概ね前向きな反応を示しましたが、コスト面とリスク評価に関してはさらなる説明が必要とされています。",
        additionalQuestions: "・融資条件の詳細説明\n\n・返済期間延長の可能性\n\n・市場動向との連動性について\n",
        requirements: "具体的な融資プランの再検討および追加のリスク分析"
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                商談画面
            </Typography>

            {/* ヒアリング項目表示 */}
            <Paper sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6" gutterBottom>
                    ヒアリング項目
                </Typography>
                <List>
                    {hearingItems.map((hearing, idx) => (
                        <ListItem key={idx}>
                            <ListItemText
                                primary={`${idx + 1}. ${hearing.item}`}
                                secondary={
                                    <span
                                        style={{ whiteSpace: 'pre-line' }}
                                        dangerouslySetInnerHTML={{ __html: hearing.summary }}
                                    />
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>

            {/* フィードバック項目 */}
            <Paper sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6" gutterBottom>
                    フィードバック
                </Typography>
                <Typography variant="subtitle1">
                    顧客の反応
                </Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    variant="outlined"
                    defaultValue={defaultFeedback.customerReaction}
                    sx={{ mb: 2 }}
                />
                <Typography variant="subtitle1">
                    追加質問
                </Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    variant="outlined"
                    defaultValue={defaultFeedback.additionalQuestions}
                    sx={{ mb: 2 }}
                />
                <Typography variant="subtitle1">
                    要望（選択式）
                </Typography>
                <TextField
                    select
                    fullWidth
                    variant="outlined"
                    defaultValue={defaultFeedback.requirements}
                    sx={{ mb: 2 }}
                >
                    <MenuItem value="具体的な融資プランの再検討">
                        具体的な融資プランの再検討
                    </MenuItem>
                    <MenuItem value="返済期間の延長検討">
                        返済期間の延長検討
                    </MenuItem>
                    <MenuItem value="リスク軽減策の詳細説明">
                        リスク軽減策の詳細説明
                    </MenuItem>
                </TextField>
            </Paper>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" onClick={() => navigate("/summary-next-action")}>
                    商談終了
                </Button>
            </Box>
        </Container>
    );
}
