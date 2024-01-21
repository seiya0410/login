import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // API通信を行う処理をここに記述
        console.log('登録', { email, username, password });
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
                <label>Use rname:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
