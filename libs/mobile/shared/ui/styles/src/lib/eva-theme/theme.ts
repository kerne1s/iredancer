import evaDark from '@eva-design/eva/themes/dark';
import { mapValues } from 'lodash';
import { colors } from '../variables';

export type Theme = typeof darkTheme;

const darkTheme: typeof evaDark = {
  ...evaDark,
  'color-basic-default': colors.backgroundPrimary,
  'color-danger-default': colors.error,
  'color-success-default': colors.success,

  'color-primary-default': colors.primary,
  'color-primary-active': colors.primaryPressed,
  'color-primary-disabled': colors.primaryDisabled,

  'text-primary-color': colors.textPrimary,
  'text-basic-color': colors.textBasic,
  'text-disabled-color': colors.textSecondary,

  'background-basic-color-1': colors.backgroundPrimary,
  'background-basic-color-2': colors.backgroundSecondary,
  'background-basic-color-3': colors.backgroundTertiary,

  'border-basic-color-1': colors.borderPrimary,
  'border-basic-color-2': colors.borderSecondary,
};

const lightTheme: Theme = {
  ...darkTheme,
};

export const themeColorNames: Record<keyof typeof darkTheme, string> = mapValues(darkTheme, (_, key) => key);

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};

export type UserTheme = keyof typeof theme;
