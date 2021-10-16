import React from 'react';
import { Wrapper, StyledLink, Logo } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Kurso
          <br />
          Romano
        </h1>
      </Logo>
      <StyledLink to="/group">Dashboard</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
