import { createGlobalStyle, css } from 'styled-components';

export const bodyStyles = css`
  font-family: 'Reggae One', cursive;
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`;
