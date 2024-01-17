// Login.js
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // Send a request to your backend to authenticate the user
        // Use fetch, axios, or any other HTTP library

        try {
            const response = await fetch('https://krissssz.ddns.net/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // Login successful
                console.log('Login successful!');
            } else {
                // Handle error
                console.error('Error logging in');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='postcontainer'>
            <h2>Login</h2>
            <label>Username: </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <label>Password: </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={handleLogin}>Login</button>
            <button>Continue as Anonymous</button>
        </div>
    );
};

export default Login;
