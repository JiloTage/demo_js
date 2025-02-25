import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NegotiationList from './components/NegotiationList';
import NegotiationDetails from './components/NegotiationDetails';
import ProposalDraft from './components/ProposalDraft';
import FollowUp from './components/FollowUp';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/negotiations" element={<NegotiationList />} />
            <Route path="/negotiations/:id" element={<NegotiationDetails />} />
            <Route path="/proposal" element={<ProposalDraft />} />
            <Route path="/followup" element={<FollowUp />} />
        </Routes>
    );
}

export default App;
