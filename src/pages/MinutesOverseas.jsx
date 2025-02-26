import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

export default function MinutesOverseas() {
    return (
        <Container sx={{ mt: 4 }}>
            <Paper sx={{ p: 2 }}>
                <Typography variant="h4" gutterBottom>
                    海外展開に関する議事録
                </Typography>
                <Typography variant="body1" paragraph>
                    【日付】2025年03月01日
                </Typography>
                <Typography variant="body1" paragraph>
                    【議題】将来の海外展開の可能性と戦略策定
                </Typography>
                <Typography variant="body1" paragraph>
                    【概要】海外市場への進出の可能性について、現状の市場分析と今後の戦略について議論されました。現地パートナーとの連携体制や現地法規制の対応が主な焦点となっています。
                </Typography>
                <Typography variant="body1" paragraph>
                    【キーポイント】
                    <ul>
                        <li>海外市場の成長性と競争環境の評価</li>
                        <li>現地パートナーとの協力体制の構築</li>
                        <li>リスクマネジメント体制の強化</li>
                    </ul>
                </Typography>
                <Typography variant="body1" paragraph>
                    【懸念事項】
                    <ul>
                        <li>現地法規制や税制の変動リスク</li>
                        <li>文化・言語の壁による調整コスト</li>
                        <li>初期投資回収の不確実性</li>
                    </ul>
                </Typography>
                <Typography variant="body1">
                    ※今後、海外展開チームとさらなる協議が予定されています。
                </Typography>
            </Paper>
        </Container>
    );
}
