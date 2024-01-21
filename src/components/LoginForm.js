import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('login', (username, password))
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
        

    )
}

export default LoginForm;