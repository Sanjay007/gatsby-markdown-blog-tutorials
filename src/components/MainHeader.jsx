import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Wrapper = styled.header`
  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);
  clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    -webkit-clip-path: polygon(100% 0, 0 0, 0 90%, 50% 100%, 100% 90%);
    clip-path: polygon(100% 0, 0 0, 0 90%, 50% 100%, 100% 90%);
  }
  background: ${props => props.theme.gradient.rightToLeft};
  min-height: 550px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    min-height: 300px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    min-height: 275px;
  }
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  margin-bottom: 3rem;
  align-items: center;
`;

const Subtitle = styled.p`
  max-width: 650px;
  color: ${props => props.theme.colors.white.light};
`;
const HeadingLarge = styled.h1`
text-align: center;
  font-size:2.3em;
  font-weight:200;
  margin:0px;
  padding:0px;
  font-style:italic;
  color: ${props => props.theme.colors.white.light};
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size:1em;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size:1em;
  }
`;

const MainHeader = ({ children, title, date, cover }) => (
  <Wrapper>
   
    <Text>
    <img  src={"https://d33wubrfki0l68.cloudfront.net/4e5626a0b7db6b84c0b51f1c0cfd56490fc19b74/7a5ad/images/logo-fancy.svg"} />
      <HeadingLarge>{title}</HeadingLarge>
      <h3>{date}</h3>

      {children && <Subtitle>{children}</Subtitle>}
    </Text>
  </Wrapper>
);

export default MainHeader;

MainHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

MainHeader.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};
