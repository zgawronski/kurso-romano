import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';
import Button from 'components/atoms/DeleteButton/DeleteButton';
import { UserShape } from 'types';
import { UsersContext } from 'views/Root';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <Button onClick={() => deleteUser(name)} />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
