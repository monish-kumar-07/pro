import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for the navbar
const NavbarContainer = styled.nav`
  background-color: #001f3f; /* Primary color */
  padding: 1rem;
`;

const NavbarList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
`;

const NavbarItem = styled.li`
  color: #ffffff; /* White color for text */
  font-family: 'Raleway', sans-serif;
`;

const NavbarLink = styled(Link)`
  color: #ffffff; /* White color for text */
  text-decoration: none;

  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

// AdminNavbar component
const AdminNavbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem>
          <NavbarLink to="/admin/dashboard">Dashboard</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/admin/reservations">Reservations</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/admin/reviews">Reviews</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/welcome">Logout</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default AdminNavbar;
