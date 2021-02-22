/**
 * @public
 */
export enum EBase {
  LIGHT = 'light',
  DARK = 'dark',
}

/**
 * @public
 */
export enum EColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  COPY = 'copy',
}

export type Colors = Record<EColor, string>;

/**
 * @public
 */
export type Theme = {
  base: EBase;
  colors: Colors;
};
