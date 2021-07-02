import type { Theme } from '@barking-welpe/theme';

/**
 * Button props
 *
 * @public
 */
export interface IButtonProps {
  /**
   * @remarks
   * button background color
   */
  backgroundColor: string;
  /**
   * @remarks
   * Button contents
   */
  label: string;
  /**
   * @remarks
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * ButtonSt props
 * @public
 */
export interface IButtonStProps {
  theme?: Theme;
  backgroundColor?: string;
  onClick?: () => void;
}
