import React from "react";
import {Link} from 'react-router-dom'

function HomePage() {
    return (
        <div>
        <h1>ホームページ</h1>
        <p>ようこそ！アクションを選んでください。</p>
        <nav>
            <ul>
                <li><Link to="/login">ログイン</Link></li>
                <li><Link to="/register">登録</Link></li>
            </ul>
        </nav>
    </div>
    );
}

export default HomePage;