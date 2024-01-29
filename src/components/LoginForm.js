import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://back.seiyalife.xyz/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            console.log(JSON.stringify(response));

            if (response.ok) {
                console.log('ログイン成功');
                // レスポンスに基づく追加の処理をここに記述（例：ユーザーダッシュボードへのリダイレクト）
               window.location.href = 'https://analytics.seiyalife.xyz';
              console.log(JSON.stringify(response))
            } else {
                console.log('ログイン失敗');
                // エラーハンドリングをここに記述
            }
        } catch (error) {
            console.error('ログイン中にエラーが発生しました', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User Name:</label>
                    <input
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>パスワード:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">ログイン</button>
            </form>
            <br />
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    );
}

export default LoginForm;