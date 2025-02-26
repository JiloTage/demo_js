import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

export default function MinutesLoanStatus() {
    return (
        <Container sx={{ mt: 4 }}>
            <Paper sx={{ p: 2 }}>
                <Typography variant="h4" gutterBottom>
                    既存借入状況の議事録
                </Typography>
                <Typography variant="body1" paragraph>
                    【日付】2025年02月25日
                </Typography>
                <Typography variant="body1" paragraph>
                    【議題】既存借入の現状と新規融資の影響検証
                </Typography>
                <Typography variant="body1" paragraph>
                    【概要】現在の借入残高が高い状況が確認され、新たな融資が返済負担にどのような影響を与えるかについてシミュレーションが実施されました。返済計画の再調整が必要とされています。
                </Typography>
                <Typography variant="body1" paragraph>
                    【キーポイント】
                    <ul>
                        <li>既存借入残高の詳細把握</li>
                        <li>返済スケジュールの再検討</li>
                        <li>新規融資が与えるキャッシュフロー影響の分析</li>
                    </ul>
                </Typography>
                <Typography variant="body1" paragraph>
                    【懸念事項】
                    <ul>
                        <li>返済能力の低下リスク</li>
                        <li>金利の変動と借入条件の変化</li>
                        <li>短期的なキャッシュフローの圧迫</li>
                    </ul>
                </Typography>
                <Typography variant="body1">
                    ※財務部門と詳細なシナリオ分析を継続する予定です。
                </Typography>
            </Paper>
        </Container>
    );
}
