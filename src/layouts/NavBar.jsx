import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 100;
  font-size: 0.7rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 1rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
   
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/blog">Javascript</Link>
      <Link to="/blog">React</Link>
      <Link to="/blog">Node</Link>
      <Link to="/blog">Angular</Link>
      <Link to="/about">About</Link>
    </Nav>
  </Headroom>
);

export default NavBar;