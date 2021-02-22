import styled from 'styled-components';
import { EColor, defaultTheme, getColor } from '@barking-welpe/theme';
import { IButtonStProps } from './Button.types';

const getBackgroundColor = (
  { theme, primary: p }: IButtonStProps = {
    theme: defaultTheme,
    primary: false,
  }
): string => {
  if (!('colors' in theme)) {
    return '#fff';
  }
  const { colors } = theme;
  if (!('primary' in theme) || !('secondary' in theme)) {
    return '#fff';
  }
  const { primary, secondary } = colors;
  if (!(typeof primary === 'string') || !(typeof secondary === 'string')) {
    return '#fff';
  }
  return p ? primary : secondary;
};

export const ButtonSt = styled.button<IButtonStProps>`
  background-color: ${getBackgroundColor};
  color: ${getColor(EColor.COPY)};
`;
