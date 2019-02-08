import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import color from './colors';
import size from './sizes';
import typography from './typography';

const theme = {
  color,
  size,
  typography
};

/**
 * A fresh button component.
 */
const ThemeManager = ({ children, ...rest }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeManager;
