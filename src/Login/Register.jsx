// SignUp.js
import React, { useState } from 'react';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        // Send a request to your backend to create an account
        // Use fetch, axios, or any other HTTP library

        try {
            const response = await fetch('https://krissssz.ddns.net/register.php', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // Account created successfully
                console.log('Account created!');
            } else {
                // Handle error
                console.error('Error creating account');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='postcontainer'>
            <h2>Register</h2>
            <label>Username: </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <label>Password: </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={handleSignUp}>Take my data, take all of it</button>
        </div>
    );
};

export default RegisterPage;
