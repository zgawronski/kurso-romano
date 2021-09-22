import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, AvaDiv, NameDiv } from './UsersListItem.styles';
import Button from 'components/atoms/Button/Button';

const showIndex = (index) => alert(`this is student #${index + 1}`);

const UsersListItem = ({ index, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <AvaDiv>{average}</AvaDiv>
    <NameDiv>
      <p>
        {name}
        <Button onMouseEnter={() => showIndex(index)} />
      </p>
      <p>{attendance}</p>
    </NameDiv>
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
