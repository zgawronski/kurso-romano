import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
