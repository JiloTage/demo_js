import React from 'react';

export default function Preparation() {
    const clientName = '顧客A';
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">
                    折衝準備 <small className="has-text-weight-normal">（ニーズ抽出）</small>
                </h1>
                <h2 className="subtitle">対象: {clientName}</h2>
                {/* 過去履歴からの課題要約（AIによるダミー出力） */}
                <article className="message is-info">
                    <div className="message-header">AIによる取引履歴の要約</div>
                    <div className="message-body">
                        {clientName}は2019年より当行とお取引があります。以前の商談で
                        <strong>金利優遇</strong>や<strong>迅速な融資</strong>を希望していました。
                        現在、事業拡大に伴い<strong>追加の資金ニーズ</strong>があるようです。
                    </div>
                </article>
            </div>
        </section>
    );
}
