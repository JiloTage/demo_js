import React, { useState } from 'react';
import { Container, Typography, Paper, Box, TextField, Button } from '@mui/material';

export default function SummaryNextAction() {
    // ダミーの自動生成されたサマリー
    const defaultSummary =
        "【まとめ】\n・A社は新工場建設に伴う資金調達ニーズが顕在化しています。\n\n【Next Action】\n・詳細ヒヤリングを実施。\n・追加資料を準備し、次回商談に備える。";

    const [summary, setSummary] = useState(defaultSummary);

    const handleSave = () => {
        // 実際はCRMへのAPI連携などを実装しますが、ここではダミーアクション
        alert("CRMに登録されました。");
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                まとめ・Next Action
            </Typography>
            <Paper sx={{ p: 2, mb: 2 }}>
                <TextField
                    label="自動生成されたサマリー"
                    multiline
                    rows={10}
                    fullWidth
                    variant="outlined"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                />
            </Paper>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" onClick={handleSave}>
                    CRMに登録
                </Button>
            </Box>
        </Container>
    );
}
