// src/components/Layout.jsx
import React from 'react';
import { Box } from '@mui/material';
import ChatAssistant from '../pages/ChatAssistant';

export default function Layout({ children }) {
    return (
        <Box sx={{ display: 'flex', backgroundColor: "#f4f5f7", minHeight: "100vh" }}>
            {/* メインコンテンツエリアは上部に Navbar の高さ分の余白を確保 */}
            <Box sx={{ flex: 1, marginRight: '420px', padding: "1rem", mt: '0px' }}>
                {children}
            </Box>
            {/* 右側のチャットパネル：top を 0 にして画面の一番上から表示 */}
            <Box
                sx={{
                    width: '400px',
                    position: 'fixed',
                    right: 0,
                    top: 0,
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
