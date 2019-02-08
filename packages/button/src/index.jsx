import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DefaultButton = styled.button`
  line-height: 1.5;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 3px;
  height: 32px;
  user-select: none;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  position: relative;
  box-shadow: 0 2px 0 rgba(0,0,0,0.015);
  color: hsl(0, 0%, 29%);
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 86%);
  outline: none;
  &:hover {
    border-color: hsl(0, 0%, 71%);
  }
`;

const ThemedButton = styled(DefaultButton)`
  font-weight: ${props => props.theme.color[props.type] && props.theme.typography.weightNormal};
  border: 1px solid ${props => props.theme.color.border || 'transparent'};
  border-radius: ${props => props.theme.size.radius || '4px'};
  color: ${props => props.theme.color.light || 'hsl(0, 0%, 29%)'};
  background-color: ${props => props.theme.color[props.type] || 'hsl(0, 0%, 100%)'};
  border-color: ${props => props.theme.color[props.type] || 'hsl(0, 0%, 86%)'};
  &:hover {
    border-color: ${props => props.theme.color[props.type] || 'hsl(0, 0%, 71%)'};
  }
`;

/**
 * A fresh button component.
 */
const Button = ({ children, ...rest }) => {
  return (
    <ThemedButton {...rest}>
      {children}
    </ThemedButton>
  );
};

Button.defaultProps = {
  type: 'default'
};

Button.propTypes = {
  type: PropTypes.oneOf([
    'default',
    'primary',
    'info',
    'success',
    'warning',
    'danger'
  ]).isRequired
};

export default Button;
