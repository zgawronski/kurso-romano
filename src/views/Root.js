import React, { useState } from 'react';
import Dashboard from './Dashboard';
import { users as usersData } from 'data/users';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.style';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddUser from './AddUser';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const Root = () => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    };
    setUsers([newUser, ...users]);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersContext.Provider
            value={{
              users,
              handleAddUser,
              deleteUser,
            }}
          >
            <Wrapper>
              <Switch>
                <Route path="/add-user">
                  <AddUser />
                </Route>
                <Route path="/" exact>
                  <Dashboard />
                </Route>
              </Switch>
            </Wrapper>
          </UsersContext.Provider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
