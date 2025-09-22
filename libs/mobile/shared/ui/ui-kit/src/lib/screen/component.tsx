import { ReactElement, useMemo } from 'react';
import { ScrollView, ScrollViewProps, View, ViewProps } from 'react-native';
import { commonStyle, createStyles, spacings } from '@iredancer-react-native/mobile/shared/ui/styles';

export interface AppScreenProps {
  scrollDisabled?: boolean;
  hideOutsideSpacing?: boolean;
  withLoader?: boolean;
  hasForcedFullHeight?: boolean;
}

interface NonScrollableScreenProps extends ViewProps {
  scrollDisabled: true;
}

interface ScrollableScreenProps extends ScrollViewProps {
  scrollDisabled?: false;
}

export function AppScreen(props: AppScreenProps & (ScrollableScreenProps | NonScrollableScreenProps)): ReactElement {
  const {
    children,
    style: elementStyle = {},
    testID,
    scrollDisabled,
    hideOutsideSpacing,
    withLoader,
    hasForcedFullHeight,
    ...restProps
  } = props;

  const [ViewComponent, viewComponentProps] = useMemo(():
    | [typeof View, ViewProps]
    | [typeof ScrollView, ScrollViewProps] => {
    const generalSpacingStyle = !hideOutsideSpacing && styles.container;

    return scrollDisabled
      ? [
          View,
          {
            style: [commonStyle.fullFlex, generalSpacingStyle, elementStyle],
            ...restProps
          }
        ]
      : [
          ScrollView,
          {
            contentContainerStyle: [
              hasForcedFullHeight && commonStyle.fullFlex,
              generalSpacingStyle,
              elementStyle
            ],
            showsVerticalScrollIndicator: false,
            keyboardShouldPersistTaps: 'handled',
            style: commonStyle.fullFlex,
            ...restProps
          }
        ];
  }, [scrollDisabled, hasForcedFullHeight, restProps, hideOutsideSpacing]);

  return (
      <View style={commonStyle.fullFlex} testID={testID}>
        <ViewComponent {...viewComponentProps}>{children}</ViewComponent>
      </View>
  );
}

const styles = createStyles({
  container: {
    padding: spacings.contentOffset,
  },
  containerWithNoneBottomSpacing: {
    paddingBottom: 0
  }
});
