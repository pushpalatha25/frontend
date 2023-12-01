import React from 'react';
import '../styles/signup.css'; 

const SignUp = () => {
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
        <p>Sign Up</p>
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />

          <button type="submit">Sign Up</button>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
