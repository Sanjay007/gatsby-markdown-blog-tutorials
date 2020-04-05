import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import theme from '../../config/theme';


const Title = styled.p`
  margin-bottom: 0.6rem;
  margin:1em .7em;
  border-radius:3px;
  border-bottom-right-radius:15px;
  border-bottom-left-radius:15px;
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow:1px 1px 15px rgba(67,38,100,0.15);
  padding:1.85rem;  
  background:#011c23;
  color: ${props => props.theme.colors.white.light};
font-family:${props => props.theme.fontFamily.heading};
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  z-index: 3;
  border-radius: ${props => props.theme.borderRadius.default};
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.7) 80%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: -10;
    border-radius: ${theme.borderRadius.default};
    transition: opacity ${theme.transitions.default.duration};
  }
`;
const CardTitled = ({ cover, path, date, title, excerpt }) => (
  <Link to={path}><Title>
  {title}
    </Title></Link> 
);

export default CardTitled;

CardTitled.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
