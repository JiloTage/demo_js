import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, Box } from '@mui/material';

export default function Dashboard({ userName, tasks, alerts }) {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                ダッシュボード
            </Typography>
            {userName && (
                <Typography variant="subtitle1" gutterBottom>
                    ようこそ、{userName}さん
                </Typography>
            )}
            <Box sx={{ mb: 3 }}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h6">タスク</Typography>
                    <List>
                        {tasks.filter(t => t.type === 'task').map(task => (
                            <ListItem key={task.id}>
                                <ListItemText primary={task.title} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Box>
            <Box sx={{ mb: 3 }}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h6">フォローアップ</Typography>
                    <List>
                        {tasks.filter(t => t.type === 'followup').map(task => (
                            <ListItem key={task.id}>
                                <ListItemText primary={task.due ? `${task.due}: ${task.title}` : task.title} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Box>
            <Box>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h6">アラート</Typography>
                    <List>
                        {alerts.map((alert, idx) => (
                            <ListItem key={idx}>
                                <ListItemText primary={alert} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Box>
        </Container>
    );
}
