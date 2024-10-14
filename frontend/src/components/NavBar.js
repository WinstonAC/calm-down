import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #1f1f1f;  /* Dark charcoal */
  color: #fff;  /* White text */
  font-family: 'Playfair Display', serif;  /* Luxurious serif font */
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #f4f4f4; /* Off-white for a softer tone */
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  color: #fff;
  transition: color 0.3s ease;
  font-family: 'Montserrat', sans-serif;  /* Clean, minimal sans-serif font */
  
  &:hover {
    color: #e0b084;  /* Elegant gold hover effect */
  }
`;

const NavBar = () => (
  <Nav>
    <Logo>Calm Down</Logo>
    <NavList>
      <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
      <NavItem><StyledLink to="/about">About</StyledLink></NavItem>
      <NavItem><StyledLink to="/event-details">Event Details</StyledLink></NavItem>
      <NavItem><StyledLink to="/testimonials">Testimonials</StyledLink></NavItem>
      <NavItem><StyledLink to="/schedule">Event Schedule</StyledLink></NavItem>
      <NavItem><StyledLink to="/meditations">Recorded Meditations</StyledLink></NavItem>
      <NavItem><StyledLink to="/contact">Contact</StyledLink></NavItem>
    </NavList>
  </Nav>
);

export default NavBar;
