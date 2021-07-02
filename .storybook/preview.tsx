import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './_config/global';
import themes from './themes';
import locale, { getCaptionForLocale } from './locale';

const items = Object.keys(themes);
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: items[0],
    toolbar: {
      icon: 'paintbrush',
      // array of plain string values or MenuItem shape (see below)
      items,
    },
  },
  locale,
};

const withThemeProvider = (Story, context) => {
  const {
    globals: { theme: t = 'light', locale },
  } = context;

  const theme = themes[t];
  const caption = getCaptionForLocale(locale);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ ...theme, caption }}>
        <Story {...context} />
      </ThemeProvider>
    </>
  );
};
export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
