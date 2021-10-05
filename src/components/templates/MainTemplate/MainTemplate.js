import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import styled from 'styled-components';

const SearchBar = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

const News = styled.div`
  grid-row: 1/2;
  grid-column: 3/3;
  border-left: 1px solid ${({ theme }) => theme.colors.grey};
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <News>
        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      </News>
    </Wrapper>
  );
};

export default MainTemplate;
