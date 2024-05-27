// frontend/src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/data">View Data</Link>
    </div>
  );
};

export default Home;
