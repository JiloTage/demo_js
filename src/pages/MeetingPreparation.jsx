import React, { useContext, useState } from 'react';
import {
    Container,
    Typography,
    Paper,
    List,
    ListItem,
    ListItemText,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Box,
    Button,
    Card,
    CardContent,
} from '@mui/material';
import { DashboardContext } from '../contexts/DashboardContext';
import { useNavigate, Link } from 'react-router-dom';
import PageTitleBreadcrumb from '../components/PageTitleBreadcrumb';

export default function MeetingPreparation() {
    const navigate = useNavigate();
    const { addChatMessage, updateLastChatMessage, similarAnalysisResult, MemoResult } = useContext(DashboardContext);
    const [displayedRelatedNews, setDisplayedRelatedNews] = useState([]);

    // 基本情報のダミーデータ
    const company = {
        name: "株式会社テックソリューションズ",
        financialInfo: "売上高：120億円、営業利益10億円、自己資本比率：35%",
        latestNews: [
            "国内市場でのシェア拡大に成功",
            "新製品投入に伴う設備投資増大",
            "海外進出計画が進行中"
        ],
        bankInfo: "当行との取引実績：20年以上、平均年間収益1億円",
        meetingInfo: "次回商談予定日：2025年04月10日 10:00～",
        transactionHistory: "融資実行額50億円・決済XX商品導入"
    };

    // 直近の取引・訪問実績（表形式、ダミーデータ）
    const recentRecords = [
        { id: 1, date: "2025-02-20", type: "訪問", summary: "本社で現状ヒアリング実施" },
        { id: 2, date: "2025-02-25", type: "取引", summary: "40億円融資実行" },
        { id: 3, date: "2025-03-01", type: "訪問", summary: "事業計画再検討ミーティング実施" }
    ];

    // 複数のニーズ仮説（表形式、ダミーデータ）
    const needsHypotheses = [
        { id: 1, title: "初期投資効率の改善", summary: "設備投資コストが高いため、効率的な資金運用が求められる。" },
        { id: 2, title: "返済負担の軽減", summary: "既存借入の返済負担が大きく、条件見直しが必要。" },
        { id: 3, title: "市場成長性の活用", summary: "業界平均を上回る成長が期待され、さらなる資金調達が可能。" }
    ];

    // 関連ニュースのフルデータ（ダミーデータ）
    const fullRelatedNews = [
        { id: 1, title: "金融政策の変更", description: "政府が金融政策の大幅な転換を検討中。" },
        { id: 2, title: "市場動向の変化", description: "消費者信頼感指数が上昇し、景気回復の兆しが見られる。" },
        { id: 3, title: "業界再編の兆し", description: "大手企業の合併・買収が進み、業界構造に変化が起こりつつある。" },
    ];

    // ヒアリング項目
    const hearingItems = [
        {
            item: "新工場の規模と時期",
            summary: "<a href='#/minutes/new-factory'>【過去議事録】</a> 前回の商談では、顧客は新工場の規模について大まかな希望を示していましたが、具体的な時期は未定でした。<br/>キーポイント：従来の計画よりも大規模な工場設立の可能性。<br/>懸念事項：建設時期の不確定性と市場動向の変化。"
        },
        {
            item: "必要資金の概算",
            summary: "<a href='#/minutes/new-factory'>【過去議事録】</a> 前回は約40億円と見積もられていましたが、最新の財務データからは50億円に上昇する可能性が示唆されています。<br/>キーポイント：資金調達規模の拡大。<br/>懸念事項：予算確保と融資条件の再検討が必要。"
        },
        {
            item: "既存借入の状況",
            summary: "<a href='#/minutes/new-factory'>【過去議事録】</a> 既存の借入残高が高いことが指摘され、返済スケジュールに対する懸念がありました。<br/>キーポイント：追加融資が既存借入に及ぼす影響。<br/>懸念事項：借入条件の改善および返済計画の見直し。"
        },
        {
            item: "将来の海外展開有無",
            summary: "<a href='#/minutes/new-factory'>【過去議事録】</a> 海外展開については一部前向きな意見がありましたが、具体的な計画は未定です。<br/>キーポイント：海外市場での競合状況と現地ニーズの変化。<br/>懸念事項：戦略的判断とリスク管理の必要性。"
        }
    ];

    // ボタン押下で関連ニュースを1件ずつ追加
    const handleRelatedNewsButtonClick = () => {
        setDisplayedRelatedNews([]); // 初期化
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedRelatedNews(prev => [...prev, fullRelatedNews[index]]);
            index++;
            if (index >= fullRelatedNews.length - 1) {
                clearInterval(interval);
            }
        }, 1000);
    };

    // タイピング効果をシミュレートする関数
    const simulateTypingEffect = (fullText) => {
        let currentText = "";
        let i = 0;
        const interval = setInterval(() => {
            currentText += fullText[i];
            updateLastChatMessage(currentText);
            i++;
            if (i >= fullText.length) {
                clearInterval(interval);
            }
        }, 50); // 1文字あたり50ms
    };

    // ヒアリング項目は初期は非表示
    const [showHearingItems, setShowHearingItems] = useState(false);
    // 各ヒアリング項目のサマリ表示用 state（初期は空文字）
    const [displayedHearingSummaries, setDisplayedHearingSummaries] = useState(
        Array(hearingItems.length).fill("")
    );

    // simulateTypingForHearing: 指定のインデックスに対して、fullText を1文字ずつ表示する
    const simulateTypingForHearing = (index, fullText, callback) => {
        let currentText = "";
        let i = 0;
        const interval = setInterval(() => {
            currentText += fullText[i];
            setDisplayedHearingSummaries(prev => {
                const newArr = [...prev];
                newArr[index] = currentText;
                return newArr;
            });
            i++;
            if (i >= fullText.length) {
                clearInterval(interval);
                callback && callback();
            }
        }, 50);
    };

    // typeAllHearingItems: 先頭から順に各ヒアリング項目のサマリをタイピングで表示
    const typeAllHearingItems = () => {
        setShowHearingItems(true);
        const typeNext = (index) => {
            if (index >= hearingItems.length) return;
            simulateTypingForHearing(index, hearingItems[index].summary, () => {
                typeNext(index + 1);
            });
        };
        typeNext(0);
    };


    // テーブル行がクリックされたときの処理
    const handleRowClick = (item, blockType) => {
        // blockType が「直近の取引・訪問実績」なら identifier は「日付 種別」、それ以外は「タイトル」
        const identifier = blockType === "直近の取引・訪問実績"
            ? `${item.date} ${item.type}`
            : item.title;
        // ユーザー発信メッセージを追加
        const userMsg = { id: Date.now(), text: `${identifier} の詳細を説明`, isUser: true };
        addChatMessage(userMsg);
        // すぐに空のAIメッセージ（プレースホルダー）を追加
        addChatMessage({ id: Date.now() + 1, text: "", isUser: false });
        // 2秒後にタイピング効果でAIの詳細回答を追加
        setTimeout(() => {
            const fullResponse = `【詳細回答】「${identifier}」について、詳細な説明は以下の通りです。\n${item.summary}\n※（これはダミーデータによる自動回答です。）`;
            simulateTypingEffect(fullResponse);
        }, 2000);
    };



    return (
        <Container sx={{ mt: 4 }}>
            <PageTitleBreadcrumb activePhase="meeting-preparation" />
            <Typography variant="h4" gutterBottom>
                商談準備
            </Typography>

            {/* 基本情報ブロック */}
            <Paper sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6" gutterBottom>
                    基本情報
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="企業名" secondary={company.name} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="財務情報" secondary={company.financialInfo} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="最新ニュース" secondary={company.latestNews.join(" | ")} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="銀行との情報" secondary={company.bankInfo} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="商談情報" secondary={company.meetingInfo} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="取引履歴" secondary={company.transactionHistory} />
                    </ListItem>
                </List>
            </Paper>

            {/* 直近の取引・訪問実績（表形式） */}
            <Typography variant="h6" gutterBottom>
                直近の取引・訪問実績
            </Typography>
            <TableContainer component={Paper} sx={{ mb: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>日付</TableCell>
                            <TableCell>種別</TableCell>
                            <TableCell>概要</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {recentRecords.map(record => (
                            <TableRow
                                key={record.id}
                                hover
                                onClick={() => handleRowClick(record, "直近の取引・訪問実績")}
                                style={{ cursor: "pointer" }}
                            >
                                <TableCell>{record.date}</TableCell>
                                <TableCell>{record.type}</TableCell>
                                <TableCell>{record.summary}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* ニーズ仮説（表形式） */}
            <Typography variant="h6" gutterBottom>
                ニーズ仮説
            </Typography>
            <TableContainer component={Paper} sx={{ mb: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>タイトル</TableCell>
                            <TableCell>概要</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {needsHypotheses.map(hypothesis => (
                            <TableRow
                                key={hypothesis.id}
                                hover
                                onClick={() => handleRowClick(hypothesis, "ニーズ仮説")}
                                style={{ cursor: "pointer" }}
                            >
                                <TableCell>{hypothesis.title}</TableCell>
                                <TableCell>{hypothesis.summary}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* 関連ニュース普通版 */}
            <Typography variant="h6" gutterBottom>
                関連ニュース
            </Typography>
            <TableContainer component={Paper} sx={{ mb: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>タイトル</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>概要</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fullRelatedNews.map(news => (
                            <TableRow
                                key={news.id}
                                hover
                                onClick={() => handleRowClick(news, "関連ニュース")}
                                style={{ cursor: "pointer" }}
                            >
                                <TableCell>{news.title}</TableCell>
                                <TableCell>{news.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            {/* 関連ニュース（初期は空、ボタンで表示） */}
            {/*
            <Typography variant="h6" gutterBottom>
                関連ニュース
            </Typography>
            <Box sx={{ mb: 2 }}>
                <Button variant="contained" onClick={handleRelatedNewsButtonClick}>
                    AIが関連ニュースを調査
                </Button>
            </Box>
            {displayedRelatedNews.length > 0 && (
                <TableContainer component={Paper} sx={{ mb: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>タイトル</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>概要</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {displayedRelatedNews.map(news => (
                                <TableRow
                                    key={news.id}
                                    hover
                                    onClick={() => handleRowClick(news, "関連ニュース")}
                                    style={{ cursor: "pointer" }}
                                >
                                    <TableCell>{news.title}</TableCell>
                                    <TableCell>{news.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
                */}

            {/* ヒアリング項目（初期は非表示、ボタンで表示） */}
            {showHearingItems ? (
                <Paper sx={{ p: 2, mb: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        ヒアリング項目
                    </Typography>
                    <List>
                        {hearingItems.map((hearing, idx) => (
                            <ListItem key={idx}>
                                <ListItemText
                                    primary={`${idx + 1}. ${hearing.item}`}
                                    secondary={
                                        <span
                                            style={{ whiteSpace: 'pre-line' }}
                                            dangerouslySetInnerHTML={{ __html: displayedHearingSummaries[idx] || "（生成中...）" }}
                                        />
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            ) : (
                <Box sx={{ textAlign: 'left', mb: 2 }}>
                    <Button variant="contained" onClick={typeAllHearingItems}>
                        ヒアリング項目をAIで生成
                    </Button>
                </Box>
            )}

            {similarAnalysisResult && (
                <Paper sx={{ p: 2, mb: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        類似企業分析結果（業種）
                    </Typography>
                    <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                        {similarAnalysisResult}
                    </Typography>
                </Paper>
            )}

            {/* リンクボタンで MinutesFunding ページへ遷移 */}
            <Box sx={{ mt: 4, textAlign: 'right' }}>
                <Button variant="contained" component={Link} to="/summary-next-action">
                    CRMの入力
                </Button>
            </Box>
            {/* フィードバック表示セクション */}
            {MemoResult && (
                <Card sx={{ mb: 2, width: 300, height: 300 }} draggable="true">
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            売掛金の回収に困っている
                        </Typography>
                        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                            {MemoResult}
                        </Typography>
                    </CardContent>
                </Card>
            )}
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                ※ 各項目をクリックすると、チャットに自動で「〜〜の詳細を説明」と送信され、2秒後にタイピング効果付きで詳細回答が表示されます。
            </Typography>


        </Container>


    );
}
