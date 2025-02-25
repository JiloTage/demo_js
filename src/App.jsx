import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Preparation from './pages/Preparation.jsx';
import Negotiation from './pages/Negotiation.jsx';
import NeedsSolution from './pages/NeedsSolution.jsx';
import ProposalDraft from './pages/ProposalDraft.jsx';
import ProposalDelivery from './pages/ProposalDelivery.jsx';
import FollowUp from './pages/FollowUp.jsx';

// ダミーデータ: タスクとアラートの初期一覧
const tasks = [
    { id: 1, title: "顧客A: 商談準備を実施", type: "task" },
    { id: 2, title: "顧客A: 提案書ドラフトを作成", type: "task" },
    { id: 3, title: "顧客Aにフォローコール", type: "followup", due: "2025-03-01" },
    { id: 4, title: "コンプライアンス研修を受講 (締切: 3/31)", type: "task" }
];
const alerts = [
    "顧客A: 提案書が上司に承認されました。",
    "顧客C: AIが新規クロスセル機会を検知しました。"
];

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");

    const handleLogin = (name) => {
        setUserName(name);
        setLoggedIn(true);
    };

    return loggedIn ? (
        <>
            <Navbar />
            <Routes>
                {/* ログイン後、デフォルトでダッシュボードへ */}
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route
                    path="/dashboard"
                    element={<Dashboard userName={userName} tasks={tasks} alerts={alerts} />}
                />
                <Route path="/preparation" element={<Preparation />} />
                <Route path="/negotiation" element={<Negotiation />} />
                <Route path="/needs" element={<NeedsSolution />} />
                <Route path="/proposal" element={<ProposalDraft />} />
                <Route path="/delivery" element={<ProposalDelivery />} />
                <Route path="/followups" element={<FollowUp tasks={tasks} />} />
            </Routes>
        </>
    ) : (
        // ログインしていない場合はログインページを表示
        <Login onLogin={handleLogin} />
    );
}
