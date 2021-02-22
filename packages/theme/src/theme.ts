import { EBase, EColor } from './theme.types';
import type { Colors, Theme } from './theme.types';

const defaultTheme: Theme = {
  base: EBase.LIGHT,
  colors: {
    [EColor.PRIMARY]: '#041E42',
    [EColor.SECONDARY]: '#E35205',
    [EColor.COPY]: '#53565A',
  },
};

/**
 *
 * @public
 * Theme color getter
 */
const getColor = (prop: EColor) => ({
  theme = defaultTheme,
}: {
  theme: Theme;
}): string => theme.colors[prop];

export { EBase, EColor, defaultTheme, getColor };
export type { Colors, Theme };
