import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';
import styles from 'assets/GlobalStyles.module.scss';

const UsersList = () => (
  <div>
    <div className={styles.box} />
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </div>
);

export default UsersList;
