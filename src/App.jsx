// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Layout from './components/Layout.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import MeetingPreparation from './pages/MeetingPreparation.jsx';
import SummaryNextAction from './pages/SummaryNextAction.jsx';
import MinutesNewFactory from './pages/MinutesNewFactory.jsx';
import MinutesFunding from './pages/MinutesFunding.jsx';
import MinutesLoanStatus from './pages/MinutesLoanStatus.jsx';
import MinutesOverseas from './pages/MinutesOverseas.jsx';
import { DashboardProvider } from './contexts/DashboardContext';


export default function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");

    const handleLogin = (name) => {
        setUserName(name);
        setLoggedIn(true);
    };

    return loggedIn ? (
        <DashboardProvider>
            <Navbar />
            <Layout>
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<Dashboard userName={userName} />} />
                    <Route path="/meeting-preparation" element={<MeetingPreparation />} />
                    <Route path="/summary-next-action" element={<SummaryNextAction />} />
                    <Route path="/minutes/new-factory" element={<MinutesNewFactory />} />
                    <Route path="/minutes/funding" element={<MinutesFunding />} />
                    <Route path="/minutes/loan-status" element={<MinutesLoanStatus />} />
                    <Route path="/minutes/overseas" element={<MinutesOverseas />} />
                </Routes>
            </Layout>
        </DashboardProvider>
    ) : (
        <Login onLogin={handleLogin} />
    );
}
