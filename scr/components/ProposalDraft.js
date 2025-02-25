import React, { useState } from 'react';
import { Container, Typography, Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ProposalDraft() {
    const navigate = useNavigate();
    const [draft, setDraft] = useState(
        `提案書タイトル：新工場建設に伴う資金調達プランご提案

【概要】
お打ち合わせ内容から、総額××円の融資枠をご提案します。

【メリット】
担保要件は最適な条件、金利優遇を最大限活用することでコスト削減が期待されます。

【補助金制度との併用】
関連する補助金を申請することで、総コストを下げることが可能です。`
    );

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h5">提案書ドラフト</Typography>
            <Box sx={{ mt: 2 }}>
                <TextField
                    fullWidth
                    multiline
                    minRows={10}
                    variant="outlined"
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                />
            </Box>
            <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                <Button variant="contained" color="primary">
                    上司にレビュー依頼
                </Button>
                <Button variant="outlined" onClick={() => navigate('/dashboard')}>
                    ダッシュボードに戻る
                </Button>
            </Box>
        </Container>
    );
}

export default ProposalDraft;
