import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://back.seiyalife.xyz/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                console.log('ログイン成功');
                navigate('/login');

                // レスポンスに基づく追加の処理をここに記述（例：ユーザーダッシュボードへのリダイレクト）
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
                <label>Email address:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Sign in</button>
        </form>
        <br />

         <Link to="/">Home</Link>
        </div>
    );
}

export default RegisterForm;
