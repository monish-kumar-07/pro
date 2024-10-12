// src/components/CustomerNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
  a {
    color: ${(props) => props.theme.colors.accent};
    font-family: ${(props) => props.theme.fonts.secondary};
    text-decoration: none;
  }
`;

const CustomerNavbar = () => {
  return (
    <NavbarContainer>
      <h1 style={{ color: 'white' }}>Da Vinci Dining</h1>
      <NavLinks>
        <Link to="/welcome">Intro</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservation">Reservation</Link>
        <Link to="/review">Review</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/admin/login">Admin Login</Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default CustomerNavbar;
