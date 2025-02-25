import React from 'react';

export default function Negotiation() {
    // ヒアリング項目リストとAIからの提案（ダミーデータ）
    const questions = [
        "現在、お困りの点はございますか？",
        "今後の資金計画をお聞かせください。"
    ];
    const aiSuggestion = "顧客Aは余剰資金の運用にも関心がある可能性があります。投資商品の提案を検討してください。";

    return (
        <section className="section">
            <div className="container">
                <h1 className="title">折衝実施</h1>
                <h2 className="subtitle">ヒアリング項目</h2>
                <ol style={{ marginBottom: '1em' }}>
                    {questions.map((q, idx) => (
                        <li key={idx}>{q}</li>
                    ))}
                </ol>
                {/* メモ入力欄 */}
                <div className="field">
                    <label className="label">面談メモ</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="メモを入力"></textarea>
                    </div>
                </div>
                {/* AIからの追加提案表示 */}
                <article className="message is-info">
                    <div className="message-header">AIからの提案</div>
                    <div className="message-body">{aiSuggestion}</div>
                </article>
            </div>
        </section>
    );
}
