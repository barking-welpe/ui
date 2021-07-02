import React from 'react';
import { IButtonProps } from './Button.types';
import { ButtonSt } from './Button.css';
/**
 * @public
 * Primary Button component for user interaction
 */
export const Button: React.FC<IButtonProps> = ({
  label,
  backgroundColor,
  onClick = () => undefined,
}) => {
  return (
    <ButtonSt backgroundColor={backgroundColor} onClick={onClick}>
      {label}
    </ButtonSt>
  );
};
