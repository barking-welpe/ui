import type { Theme } from '@barking-welpe/theme';

/**
 * Button props
 *
 * @public
 */
export interface IButtonProps {
  /**
   * @remarks
   * Is this the principal call to action on the page?
   */
  primary: boolean;
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
  theme: Theme;
  primary: boolean;
  onClick?: () => void;
}
