import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  backgroud: none;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 12px 24px;
  outline: none;
`;

const Button = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
