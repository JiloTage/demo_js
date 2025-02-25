import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, List, ListItem, ListItemText, Box } from '@mui/material';

export default function NeedsSolution() {
    const identifiedNeeds = [
        "優遇金利での預金運用",
        "迅速な融資審査と実行"
    ];
    const solutions = [
        { name: "プレミアム預金口座", desc: "大口預金に対して優遇金利を適用", recommended: false },
        { name: "ビジネスローン迅速プラン", desc: "最短5営業日で融資が実行可能", recommended: false },
        { name: "投資信託ポートフォリオ", desc: "余剰資金の中長期運用をご提案", recommended: true }
    ];
    const [query, setQuery] = useState('');

    const filteredSolutions = solutions.filter(sol =>
        (sol.name + sol.desc).toLowerCase().includes(query.toLowerCase())
    );

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                ニーズ整理 & ソリューション検索
            </Typography>
            <Typography variant="h6">判明したニーズ</Typography>
            <List>
                {identifiedNeeds.map((need, idx) => (
                    <ListItem key={idx}>
                        <ListItemText primary={`・${need}`} />
                    </ListItem>
                ))}
            </List>
            <Box sx={{ my: 2 }}>
                <TextField
                    label="ソリューション検索"
                    variant="outlined"
                    fullWidth
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
            </Box>
            <Paper sx={{ p: 2 }}>
                <Typography variant="subtitle1">検索結果:</Typography>
                <List>
                    {filteredSolutions.map((sol, idx) => (
                        <ListItem key={idx}>
                            <ListItemText
                                primary={
                                    <>
                                        <strong>{sol.name}</strong>
                                        {sol.recommended && <Typography component="span" color="primary"> (AI推奨)</Typography>}
                                    </>
                                }
                                secondary={sol.desc}
                            />
                        </ListItem>
                    ))}
                    {filteredSolutions.length === 0 && (
                        <ListItem>
                            <ListItemText primary="該当するソリューションがありません。" />
                        </ListItem>
                    )}
                </List>
            </Paper>
        </Container>
    );
}
