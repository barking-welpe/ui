import styled from 'styled-components';
import { EColor, getColor } from '@barking-welpe/theme';
import { IButtonStProps } from './Button.types';

export const ButtonSt = styled.button<IButtonStProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${getColor(EColor.COPY)};
`;
