import React, { useState } from 'react';

export default function ProposalDraft() {
    // AIが生成した提案書ドラフト（ダミーテキスト）
    const initialDraft =
        "・優遇金利を適用した預金プランの提供\n" +
        "・迅速な審査が可能なローン商品の提案\n" +
        "・余剰資金を活用した投資信託による資産運用提案\n";

    const [draft, setDraft] = useState(initialDraft);
    const [submitted, setSubmitted] = useState(false);
    const supervisorFeedback = "上司承認済み: 提案内容に問題ありません。";

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <section className="section">
            <div className="container">
                <h1 className="title">提案書作成</h1>
                {!submitted ? (
                    <>
                        {/* 提案書ドラフトの編集エリア */}
                        <div className="field">
                            <label className="label">提案書ドラフト (AI生成)</label>
                            <div className="control">
                                <textarea
                                    className="textarea"
                                    rows="6"
                                    value={draft}
                                    onChange={e => setDraft(e.target.value)}
                                />
                            </div>
                        </div>
                        <button className="button is-link" onClick={handleSubmit}>
                            上司にレビュー依頼
                        </button>
                    </>
                ) : (
                    <>
                        {/* 上司に提出後は内容を読み取り専用で表示 */}
                        <div className="field">
                            <label className="label">提案書ドラフト</label>
                            <div className="control">
                                <textarea className="textarea" rows="6" value={draft} readOnly />
                            </div>
                        </div>
                        {/* 上司からのフィードバック表示 */}
                        <p className="has-text-success">{supervisorFeedback}</p>
                    </>
                )}
            </div>
        </section>
    );
}
