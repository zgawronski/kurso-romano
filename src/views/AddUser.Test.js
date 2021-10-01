import React from 'react';
import FormField from './FormField';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithThemeProvider(<FormField label="name" name="name" id="name" />);
  });
});
