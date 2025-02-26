import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

export default function MeetingPreparation() {
    const clientName = "A社"; // マスキング済みの企業名
    // ダミーデータ: A社の各種情報
    const financialInfo = "売上高: 50億円, 利益率: 8%";
    const latestNewsItems = [
        "[1]: 市場拡大に伴い積極的な設備投資を発表",
        "[2]: 業界大手の提携ニュースが報じられました",
        "[3]: 政策変更により融資環境が改善",
        "[4]: 競合他社が新サービスを開始"
    ];
    const bankInfo = "銀行との情報: 実績あり";
    const meetingInfo = "次回商談予定日: 2025-03-15";
    const transactionHistory = "過去の商談履歴: 成約率70%";

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                商談準備画面
            </Typography>
            <Paper sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6">基本情報</Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="企業名" secondary={clientName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="財務情報" secondary={financialInfo} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="銀行との情報" secondary={bankInfo} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="商談情報" secondary={meetingInfo} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="取引履歴" secondary={transactionHistory} />
                    </ListItem>
                </List>
            </Paper>

            <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                    最新ニュース
                </Typography>
                <List>
                    {latestNewsItems.map((news, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={news} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
}
