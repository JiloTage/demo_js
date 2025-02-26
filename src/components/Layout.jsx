import React from 'react';
import { Box } from '@mui/material';
import ChatAssistant from '../pages/ChatAssistant';

export default function Layout({ children }) {
    return (
        <Box sx={{ display: 'flex', backgroundColor: "#f4f5f7" }}>
            <Box sx={{ flex: 1, marginRight: '420px', padding: "1rem" }}>
                {children}
            </Box>
            <Box
                sx={{
                    width: '400px',
                    position: 'fixed',
                    right: 0,
                    top: '64px',
                    bottom: 0,
                    borderLeft: '1px solid #dfe3e6',
                    backgroundColor: "#ffffff",
                    overflowY: 'auto',
                    p: 2
                }}
            >
                <ChatAssistant />
            </Box>
        </Box>
    );
}
