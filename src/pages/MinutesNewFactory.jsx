import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

export default function MinutesNewFactory() {
    return (
        <Container sx={{ mt: 4 }}>
            <Paper sx={{ p: 2 }}>
                <Typography variant="h4" gutterBottom>
                    議事録
                </Typography>
                <Typography variant="body1" paragraph>
                    【日付】2025年02月15日
                </Typography>
                <Typography variant="body1" paragraph>
                    【議題】新工場建設の規模と設立時期について
                </Typography>
                <Typography variant="body1" paragraph>
                    【概要】今回の会議では、新工場の建設規模について議論が行われ、従来計画よりも大幅な拡大が検討されました。具体的な設立時期については、市場環境や建設資材の調達状況を踏まえて柔軟なスケジュールが求められています。
                </Typography>
                <Typography variant="body1" paragraph>
                    【キーポイント】
                    <ul>
                        <li>従来の計画より50％規模の拡大を検討</li>
                        <li>設立時期は2025年後半を想定</li>
                        <li>段階的な実施と市場環境の継続監視</li>
                    </ul>
                </Typography>
                <Typography variant="body1" paragraph>
                    【懸念事項】
                    <ul>
                        <li>建設資材価格の変動リスク</li>
                        <li>労働力の確保と人件費上昇</li>
                        <li>地域の環境規制強化への対応</li>
                    </ul>
                </Typography>
                <Typography variant="body1">
                    ※各部門との詳細な調整が今後必要となります。
                </Typography>
            </Paper>
        </Container>
    );
}
