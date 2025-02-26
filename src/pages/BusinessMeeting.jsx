import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

export default function BusinessMeeting() {
    // 各ヒヤリング項目と詳細なサマリ（議事録へのリンク付き）
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

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                商談画面
            </Typography>
            <Paper sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6">ヒヤリングすべき項目</Typography>
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
        </Container>
    );
}
