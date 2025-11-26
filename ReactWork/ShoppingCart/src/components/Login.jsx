import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, useNavigate } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  function verify(e) {

    e.preventDefault();

  
    const storedDataString = localStorage.getItem('loginData');

    if (storedDataString) {

      const storedUser = JSON.parse(storedDataString);

 
      if (storedUser.email === email && storedUser.password === password) {
        alert(`Login Successful! Welcome, ${storedUser.name}.`);
        navigate('/dashboard');
      } else {
        alert('Authentication Failed: Invalid email or password.');
      }
    } else {
     
      alert('No user data found. Please register first.');
    }
  }

  return (
    <div>
      <h2 style={{ backgroundColor: 'brown', color: 'white' }}>Login Form</h2>

   
      <form onSubmit={verify}>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
         
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
         
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="passwordInput"
          />
        </div>

        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>

        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login