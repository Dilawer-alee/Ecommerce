import React, { useState } from 'react';
import { handleLogin } from "../Config/Firebase"; // Correct import statement

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div>
            <h1>Login</h1>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => handleLogin(email, password)}>Login</button>
        </div>
    );
};

export default Login;
