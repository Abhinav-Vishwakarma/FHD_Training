import React from 'react'

import { Link } from 'react-router-dom'
function MainLayout() {
  return (
    <div className = "navigation">
      <Link className='btn' to="/login">Login</Link>
      <Link className='btn' to="/register">Register</Link>
    </div>
  )
}

export default MainLayout