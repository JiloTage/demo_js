import React from 'react';

export default function Dashboard({ userName, tasks, alerts }) {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">ダッシュボード</h1>
                {userName && (
                    <h2 className="subtitle">ようこそ、{userName}さん</h2>
                )}
                {/* 担当者のタスク一覧 */}
                <nav className="panel">
                    <p className="panel-heading">タスク</p>
                    {tasks.filter(t => t.type === 'task').map(task => (
                        <div key={task.id} className="panel-block">
                            {task.title}
                        </div>
                    ))}
                </nav>
                {/* フォローアップ（今後の予定）一覧 */}
                <nav className="panel">
                    <p className="panel-heading">フォローアップ</p>
                    {tasks.filter(t => t.type === 'followup').map(task => (
                        <div key={task.id} className="panel-block">
                            {task.due ? `${task.due}: ${task.title}` : task.title}
                        </div>
                    ))}
                </nav>
                {/* アラート（通知）一覧 */}
                <nav className="panel">
                    <p className="panel-heading">アラート</p>
                    {alerts.map((alert, idx) => (
                        <div key={idx} className="panel-block">
                            {alert}
                        </div>
                    ))}
                </nav>
            </div>
        </section>
    );
}
