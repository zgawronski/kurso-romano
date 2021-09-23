import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const AvaDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.success};
`;

export const NameDiv = styled.div`
p {
  display: flex;
  justify-content: space-between
    font-size: ${({ theme }) => theme.fontSize.l}
    margin-left: 10px;
    button {
      margin-left: 10px;
    }
  }
`;
