import React, { useState, useEffect } from 'react';


function LogInPage({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);



  function handleSubmit(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {

      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  
  
  
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

            <button type ="submit">Log In</button>

            <div>

            </div>

    </form>
  
  );
}

export default LogInPage