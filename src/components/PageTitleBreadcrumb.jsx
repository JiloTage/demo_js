// src/components/PageTitleBreadcrumb.jsx
import React from 'react';
import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PageTitleBreadcrumb({ activePhase }) {
    const navigate = useNavigate();

    return (
        <Box sx={{ mb: 3 }}>
            <Breadcrumbs separator=" > " aria-label="breadcrumb">
                <Link
                    underline="hover"
                    color="inherit"
                    sx={{ cursor: 'pointer', fontSize: activePhase === 'dashboard' ? '2rem' : '1rem' }}
                    onClick={() => navigate('/dashboard')}
                >
                    ダッシュボード
                </Link>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: activePhase === 'meeting-preparation' ? 'bold' : 'normal',
                        fontSize: activePhase === 'meeting-preparation' ? '2rem' : '1rem'
                    }}
                    onClick={() => navigate('/meeting-preparation')}
                >
                    商談準備
                </Typography>
                <Link
                    underline="hover"
                    color="inherit"
                    sx={{ cursor: 'pointer', fontSize: activePhase === 'summary-next-action' ? '2rem' : '1rem' }}
                    onClick={() => navigate('/summary-next-action')}
                >
                    CRM作成
                </Link>
            </Breadcrumbs>
        </Box>
    );
}
