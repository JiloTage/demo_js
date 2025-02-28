// src/contexts/DashboardContext.jsx
import React, { createContext, useState } from 'react';

const initialChatMessages = [
    { id: 1, text: 'こんにちは、どのようなお手伝いが必要ですか？', isUser: false }
];

export const DashboardContext = createContext();

export function DashboardProvider({ children }) {
    const [chatMessages, setChatMessages] = useState(initialChatMessages);
    const [negotiationCards, setNegotiationCards] = useState([
        {
            id: 1,
            name: "株式会社テックソリューションズ",
            meetingStart: "2025-03-15 10:00",
            status: "未着手",
            nextAction: "初回ヒアリング実施",
            importance: "高",
            storeNumber: "002",
            customerNumber: "1001",
            phase: "初回提案準備段階",
            dueDate: "2025-03-15",
            urgent: true,
            news: 3
        },
        {
            id: 2,
            name: "有限会社スマートシステムズ",
            meetingStart: "2025-03-20 14:00",
            status: "進行中",
            nextAction: "追加資料送付",
            importance: "中",
            storeNumber: "002",
            customerNumber: "2002",
            phase: "ニーズヒヤリング段階",
            dueDate: "2025-03-25",
            urgent: false,
            news: 2
        },
        {
            id: 3,
            name: "株式会社グローバルネットワーク",
            meetingStart: "2025-03-25 09:00",
            status: "完了",
            nextAction: "フォローアップ実施",
            importance: "低",
            storeNumber: "002",
            customerNumber: "3003",
            phase: "契約締結段階",
            dueDate: "2025-03-20",
            urgent: false,
            news: 1
        }
    ]);
    const [newsCards, setNewsCards] = useState([
        {
            id: 101,
            title: "市場ニュース分析：マクロ経済動向",
            description: "最新の統計によると、景気回復の兆しが見られつつあり、金融政策の転換が検討されています。"
        },
        {
            id: 102,
            title: "市場ニュース分析：業界再編の動向",
            description: "複数の大手企業が合併・買収を進める中、業界全体での競争環境が大きく変化しています。"
        }
    ]);
    const [reportCards, setReportCards] = useState([]);
    const [chatPrefill, setChatPrefill] = useState("");
    // 新たに追加：類似企業分析結果のグローバル状態
    const [similarAnalysisResult, setSimilarAnalysisResult] = useState("");
    const [feedbackResult, setFeedbackResult] = useState("");
    const [MemoResult, setMemoResult] = useState("");

    const [alerts, setAlerts] = useState([
        {
            id: 1,
            title: "商談",
            description: "至急対応が必要な商談があります。優先的に対処してください。",
        },
        {
            id: 2,
            title: "為替",
            description: "昨日中に大きな値動きがありました。確認しておきましょう。",
        },
        {
            id: 3,
            title: "活動計画",
            description: "前回活動計画を立ててから2ヶ月経過しました。見直しは必要ありませんか？",
        }
    ]);

    const updateLastChatMessage = (text) => {
        setChatMessages(prev => {
            const updated = [...prev];
            if (updated.length > 0) {
                updated[updated.length - 1] = { ...updated[updated.length - 1], text };
            }
            return updated;
        });
    };

    const addChatMessage = (msg) => {
        setChatMessages(prev => [...prev, msg]);
    };

    const clearChatMessages = () => {
        setChatMessages(initialChatMessages);
    };

    return (
        <DashboardContext.Provider
            value={{
                negotiationCards,
                setNegotiationCards,
                newsCards,
                reportCards,
                setReportCards,
                chatMessages,
                addChatMessage,
                updateLastChatMessage,
                clearChatMessages,
                chatPrefill,
                setChatPrefill,
                similarAnalysisResult,
                setSimilarAnalysisResult,
                feedbackResult,
                setFeedbackResult,
                alerts,
                setAlerts,
                MemoResult,
                setMemoResult
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
}
