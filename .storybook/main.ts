module.exports = {
  stories: [
    './_introduction/*.stories.mdx',
    '../packages/**/src/*.stories.mdx',
    '../packages/**/src/docs/*.stories.mdx',
    '../packages/**/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
  ],
  reactDocgen: 'react-docgen-typescript',
  reactDocgenTypescriptOptions: {
    shouldExtractLiteralValuesFromEnum: true,
    propFilter: (prop) =>
      prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
  },
};
