import { cloneDeep, isFunction } from 'lodash';
import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { Theme, useAppTheme } from './eva-theme';
import { createStyles, EStyleSet, StyleSet } from './extended-stylesheet';
import { screenWidth } from './styles';

export enum ViewPortWidthBreakpoints {
  MOBILE = 480,
  TABLET = 768,
  DESKTOP = 1024,
  WIDESCREEN = 1440,
}

export enum MediaBreakpoints {
  MOBILE = `@media (min-width: ${ViewPortWidthBreakpoints.MOBILE}px)`,
  TABLET = `@media (min-width: ${ViewPortWidthBreakpoints.TABLET}px)`,
  DESKTOP = `@media (min-width: ${ViewPortWidthBreakpoints.DESKTOP}px)`,
  WIDESCREEN = `@media (min-width: ${ViewPortWidthBreakpoints.WIDESCREEN}px)`,
}

export const isTablet = screenWidth <= ViewPortWidthBreakpoints.TABLET;

export function createAdaptiveStyles<T extends EStyleSet = EStyleSet>(
  stylesOrGetter: EStyleSet<T> | ((theme: Theme) => T),
): typeof useAdaptiveStyles {
  const useAdaptiveStyles = (theme?: Theme): StyleSet<T> => {
    const { width } = useWindowDimensions();
    const appTheme = useAppTheme();

    return useMemo(
      () => createStyles<T>(cloneDeep(isFunction(stylesOrGetter) ? stylesOrGetter(theme || appTheme) : stylesOrGetter)),
      [width, theme, appTheme],
    );
  };

  return useAdaptiveStyles;
}
