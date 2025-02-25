import React, { useState } from 'react';

export default function NeedsSolution() {
    // ヒアリングで判明したニーズ
    const identifiedNeeds = [
        "優遇金利での預金運用",
        "迅速な融資審査と実行"
    ];
    // ソリューション候補一覧（ダミーデータ）
    const solutions = [
        { name: "プレミアム預金口座", desc: "大口預金に対して優遇金利を適用", recommended: false },
        { name: "ビジネスローン迅速プラン", desc: "最短5営業日で融資が実行可能", recommended: false },
        { name: "投資信託ポートフォリオ", desc: "余剰資金の中長期運用をご提案", recommended: true }
    ];
    const [query, setQuery] = useState('');

    // 検索クエリでソリューションをフィルタ
    const filteredSolutions = solutions.filter(sol =>
        (sol.name + sol.desc).toLowerCase().includes(query.toLowerCase())
    );

    return (
        <section className="section">
            <div className="container">
                <h1 className="title">ニーズ整理 & ソリューション検索</h1>
                <h2 className="subtitle">判明したニーズ</h2>
                <ul style={{ marginBottom: '1.5em' }}>
                    {identifiedNeeds.map((need, idx) => (
                        <li key={idx}>・{need}</li>
                    ))}
                </ul>
                <div className="field">
                    <label className="label">ソリューション検索</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            placeholder="キーワードを入力"
                        />
                    </div>
                </div>
                <div className="content">
                    <h3>検索結果:</h3>
                    <ul>
                        {filteredSolutions.map((sol, idx) => (
                            <li key={idx}>
                                <strong>
                                    {sol.name}
                                    {sol.recommended && <span className="has-text-info"> (AI推奨)</span>}
                                </strong>
                                ：{sol.desc}
                            </li>
                        ))}
                        {filteredSolutions.length === 0 && (
                            <li>該当するソリューションがありません。</li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}
