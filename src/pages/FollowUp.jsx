import React from 'react';

export default function FollowUp({ tasks }) {
    // フォローアップ種別のタスクのみ抽出
    const followUps = tasks.filter(t => t.type === 'followup');

    return (
        <section className="section">
            <div className="container">
                <h1 className="title">フォローアップ</h1>
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>期限</th>
                            <th>内容</th>
                        </tr>
                    </thead>
                    <tbody>
                        {followUps.map(task => (
                            <tr key={task.id}>
                                <td>{task.due}</td>
                                <td>{task.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
