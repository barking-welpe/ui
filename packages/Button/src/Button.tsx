import React from 'react';
import { IButtonProps } from './Button.types';
import { ButtonSt } from './Button.css';
/**
 * @public
 * Primary Button component for user interaction
 */
export const Button: React.FC<IButtonProps> = ({
  label,
  primary = false,
  onClick = () => undefined,
}) => {
  return (
    <ButtonSt primary={primary} onClick={onClick}>
      {label}
    </ButtonSt>
  );
};
