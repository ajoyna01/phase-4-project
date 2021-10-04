import React, { useState, useEffect } from 'react';
import './App.css';

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");


  function handleSubmit(e){
    e.preventDefault();

    fetch("/signup",
            {
                method: "POST",
                headers:{"Content-Type":"application/json",},
                body: JSON.stringify
                ({
                    username,
                    password,
                    password_confirmation: passwordConfirmation
                }) 
            }
    )}
  
  
  
  return (
    <form onSubmit={handleSubmit}>
       
            <label htmlFor="username">username</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
            />

            <label htmlFor="password">password</label>
            <input
                type="text"
                id="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />

            <label htmlFor="passwordConfirmation">password confirmation</label>
            <input
                type="text"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e)=> setPasswordConfirmation(e.target.value)}
            />

            <button type ="submit">Create Account</button>

    </form>
  
  );
}

export default SignUpPage