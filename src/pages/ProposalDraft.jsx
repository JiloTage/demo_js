import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, Button, Box } from '@mui/material';

export default function ProposalDraft() {
    const initialDraft =
        "提案書タイトル：新工場建設に伴う資金調達プランご提案\n\n" +
        "【概要】お打ち合わせ内容から、総額××円の融資枠をご提案…\n\n" +
        "【メリット】担保要件は○○、金利優遇を最大限活用することで…\n\n" +
        "【補助金との併用】△△省の○○助成金申請を検討\n";

    const [draft, setDraft] = useState(initialDraft);
    const [submitted, setSubmitted] = useState(false);
    const supervisorFeedback = "上司承認済み: 提案内容に問題ありません。";

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                提案書作成
            </Typography>
            {!submitted ? (
                <>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            label="提案書ドラフト (AI生成)"
                            multiline
                            rows={8}
                            fullWidth
                            variant="outlined"
                            value={draft}
                            onChange={(e) => setDraft(e.target.value)}
                        />
                    </Box>
                    <Button variant="contained" onClick={handleSubmit}>
                        上司にレビュー依頼
                    </Button>
                </>
            ) : (
                <>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            label="提案書ドラフト"
                            multiline
                            rows={8}
                            fullWidth
                            variant="outlined"
                            value={draft}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Box>
                    <Typography variant="body1" color="success.main">
                        {supervisorFeedback}
                    </Typography>
                </>
            )}
        </Container>
    );
}
