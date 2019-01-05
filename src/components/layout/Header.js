import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={{color: '#fff', marginRight: '10px'}} to="/">Home</Link>
      <Link style={{color: '#fff'}} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  color: '#fff',
  backgroundColor: '#000',
  textAlign: 'center',
  padding: '10px'
}

export default Header;