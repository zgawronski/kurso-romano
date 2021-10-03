import React from 'react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import AddUser from './AddUser';
import { screen, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('AddUser Test', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );

    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grażyna' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Grażyna');
  });
});
