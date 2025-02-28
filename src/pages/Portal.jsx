// src/pages/Portal.jsx
import React, { useState } from 'react';
import {
    Container,
    Paper,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    Typography,
    Tabs,
    Tab,
    Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// TabPanel コンポーネント（MUI公式サンプルを参考に）
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`portal-tabpanel-${index}`}
            aria-labelledby={`portal-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `portal-tab-${index}`,
        'aria-controls': `portal-tabpanel-${index}`,
    };
}

export default function Portal() {
    const navigate = useNavigate();
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                営業ポータル
            </Typography>

            {/* TODOリスト */}
            <Paper sx={{ p: 2, mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    TODOリスト
                </Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate("/dashboard")}>
                            <ListItemText primary="本日中にフォローが必要な案件が2件" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate("/dashboard")}>
                            <ListItemText primary="前回ヒアリングから2週間経過の顧客が3社" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate("/dashboard")}>
                            <ListItemText primary="提案書ドラフト未確認が1件" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Paper>

            {/* タブ領域 */}
            <Paper sx={{ p: 2 }}>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    aria-label="営業ポータルタブ"
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    <Tab label="活動計画" {...a11yProps(0)} />
                    <Tab label="商談準備" {...a11yProps(1)} />
                    <Tab label="商品知識" {...a11yProps(2)} />
                    <Tab label="市場調査" {...a11yProps(3)} />
                </Tabs>
                <TabPanel value={tabValue} index={0}>
                    <Typography variant="body1">
                        ここには本日の活動計画や、今後のタスク一覧、アポイント設定など、活動計画をサポートする情報が表示されます。
                    </Typography>
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <Typography variant="body1">
                        ここには商談準備に必要な情報（案件情報、商談資料、事前ヒアリングメモなど）が表示されます。
                    </Typography>
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                    <Typography variant="body1">
                        ここには商品知識に関する情報、トレーニング資料、FAQなどが表示されます。
                    </Typography>
                </TabPanel>
                <TabPanel value={tabValue} index={3}>
                    <Typography variant="body1">
                        ここには市場調査の結果、業界ニュース、競合分析などが表示されます。
                    </Typography>
                </TabPanel>
            </Paper>
        </Container>
    );
}
