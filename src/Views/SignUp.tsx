import React, { useState } from 'react';
import { handleSignUp } from "../Config/Firebase";

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

 

  return (
    <div>
      <h1>Signup</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => handleSignUp(email, password)}>Signup</button>
    </div>
  );
};

export default SignUp;
