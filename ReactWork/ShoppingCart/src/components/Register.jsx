import React, { useState, useEffect } from 'react'

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState({});

  function getData(e) {
    e.preventDefault();
    const formData = {
      name,
      email,
      password
    }
 
    setData(formData);
    console.log(name)
  }

  useEffect(() => {
    localStorage.setItem('loginData', JSON.stringify(data));
  }, [data]);
  
  return (
    <div>
      <h2>Registration</h2>

      <form onSubmit={getData}>
        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="nameInput" aria-describedby="nameHelp" />
        </div>
        
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="emailInput" aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="passwordInput" />
        </div>
        
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  )
}

export default Register