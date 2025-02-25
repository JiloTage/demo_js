import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

export default function ChatBubble({ message, isUser }) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: isUser ? 'flex-end' : 'flex-start',
                my: 1,
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    p: 1.5,
                    maxWidth: '70%',
                    bgcolor: isUser ? 'primary.main' : 'grey.300',
                    color: isUser ? 'primary.contrastText' : 'black',
                }}
            >
                <Typography variant="body1">{message}</Typography>
            </Paper>
        </Box>
    );
}
