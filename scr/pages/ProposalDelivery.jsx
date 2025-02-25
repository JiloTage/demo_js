import React from 'react';
import { Link } from 'react-router-dom';

export default function ProposalDelivery() {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">提案実施</h1>
                <div className="content">
                    <ul>
                        <li>商談結果: 顧客に提案書を提示済み。</li>
                        <li>CRM更新: 商談ステータスを「提案済み」に更新。</li>
                        <li>フォローアップ: 次回フォローコールを2025-03-01に設定。</li>
                    </ul>
                </div>
                <div className="buttons">
                    <Link to="/dashboard" className="button is-link">
                        ダッシュボードに戻る
                    </Link>
                </div>
            </div>
        </section>
    );
}
