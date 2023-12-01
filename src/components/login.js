import React from 'react';
import '../styles/login.css'; 

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
 
  };

  return (
    <div>
      <header>
        <img src="image4.png" alt="Shridevi Logo" className="logo" />
        <h1>Shridevi Institution of Technology</h1>
        <ul>
          <li><a href="home.html">HOME</a></li>
        </ul>
      </header>

      <main>
        <p>Login</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Login</button>
        </form>
      </main>
    </div>
  );
};

export default Login;
