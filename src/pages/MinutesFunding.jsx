import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

export default function MinutesFunding() {
    return (
        <Container sx={{ mt: 4 }}>
            <Paper sx={{ p: 2 }}>
                <Typography variant="h4" gutterBottom>
                    必要資金の議事録
                </Typography>
                <Typography variant="body1" paragraph>
                    【日付】2025年02月20日
                </Typography>
                <Typography variant="body1" paragraph>
                    【議題】新工場建設に伴う必要資金の概算と調達方法
                </Typography>
                <Typography variant="body1" paragraph>
                    【概要】過去の資金計画の見直しにより、必要資金が約40億円から50億円に増加する可能性が示唆されました。融資条件の再評価と、補助金制度の併用が検討されています。
                </Typography>
                <Typography variant="body1" paragraph>
                    【キーポイント】
                    <ul>
                        <li>必要資金規模の拡大：40億円→50億円</li>
                        <li>融資条件の見直しと交渉</li>
                        <li>補助金の活用によるリスク分散</li>
                    </ul>
                </Typography>
                <Typography variant="body1" paragraph>
                    【懸念事項】
                    <ul>
                        <li>金利上昇リスクによる返済負担の増加</li>
                        <li>審査プロセスの遅延リスク</li>
                        <li>補助金獲得競争の激化</li>
                    </ul>
                </Typography>
                <Typography variant="body1">
                    ※今後、財務部門との連携を強化し、詳細なシナリオ分析を実施します。
                </Typography>
            </Paper>
        </Container>
    );
}
