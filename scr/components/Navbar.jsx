import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar is-dark" role="navigation">
            <div className="navbar-brand">
                <span className="navbar-item has-text-weight-bold">
                    営業支援システム
                </span>
            </div>
            {/* モバイルでもメニューを表示するため常にis-activeを付与 */}
            <div className="navbar-menu is-active">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/dashboard">ダッシュボード</Link>
                    <Link className="navbar-item" to="/preparation">折衝準備</Link>
                    <Link className="navbar-item" to="/negotiation">折衝実施</Link>
                    <Link className="navbar-item" to="/needs">ニーズ整理</Link>
                    <Link className="navbar-item" to="/proposal">提案書作成</Link>
                    <Link className="navbar-item" to="/delivery">提案実施</Link>
                    <Link className="navbar-item" to="/followups">フォローアップ</Link>
                </div>
            </div>
        </nav>
    );
}
