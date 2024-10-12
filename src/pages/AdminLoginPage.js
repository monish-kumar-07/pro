import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled components for the admin login page
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e6e6e6; /* Light Gray */
  font-family: 'Merriweather', serif;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff; /* White */
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #001f3f; /* Primary Color */
  color: #fff; /* White */
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0292b7; /* Accent Color */
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
`;

// AdminLoginPage component
const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check the credentials
    if (username === 'admin' && password === 'password123') {
      // Redirect to admin dashboard
      navigate('/admin/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <LoginContainer>
      <h1>Admin Login</h1>
      <LoginForm onSubmit={handleLogin}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
      </LoginForm>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </LoginContainer>
  );
};

export default AdminLoginPage;
