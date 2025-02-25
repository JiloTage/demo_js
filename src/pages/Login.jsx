import React, { useState } from 'react';

export default function Login({ onLogin }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // 本番環境では認証チェックが必要だが、ここでは名前入力のみでログイン
        if (name.trim() !== '') {
            onLogin(name);
        }
    };

    return (
        <section className="section">
            <div className="container">
                {/* ログインフォームを画面中央に配置 */}
                <div className="columns is-centered full-height">
                    <div className="column is-one-third">
                        <div className="box">
                            <h1 className="title has-text-centered">ログイン</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="field">
                                    <label className="label">ユーザーID</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">パスワード</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control has-text-centered">
                                        <button className="button is-link is-fullwidth" type="submit">
                                            ログイン
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
