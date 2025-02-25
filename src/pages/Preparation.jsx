import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

export default function Preparation() {
    const clientName = '顧客A';
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                折衝準備 <Typography variant="subtitle2" component="span">(ニーズ抽出)</Typography>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                対象: {clientName}
            </Typography>
            <Paper sx={{ p: 2, backgroundColor: '#e3f2fd' }}>
                <Typography variant="subtitle2">AIによる取引履歴の要約</Typography>
                <Typography variant="body1">
                    {clientName}は2019年より当行とお取引があります。以前の商談で<strong>金利優遇</strong>や<strong>迅速な融資</strong>を希望していました。<br />
                    現在、事業拡大に伴い<strong>追加の資金ニーズ</strong>があるようです。
                </Typography>
            </Paper>
        </Container>
    );
}
