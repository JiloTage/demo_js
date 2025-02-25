import React from 'react';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function FollowUp({ tasks }) {
    const followUps = tasks.filter(t => t.type === 'followup');

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                フォローアップ
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>期限</TableCell>
                            <TableCell>内容</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {followUps.map(task => (
                            <TableRow key={task.id}>
                                <TableCell>{task.due}</TableCell>
                                <TableCell>{task.title}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
