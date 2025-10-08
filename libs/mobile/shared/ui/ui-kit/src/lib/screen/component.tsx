import { Layout } from '@ui-kitten/components';
import { ReactElement, useMemo } from 'react';
import { ScrollView, ScrollViewProps, View, ViewProps } from 'react-native';
import { commonStyle, createStyles, spacings } from '@iredancer-react-native/mobile/shared/ui/styles';

export interface AppScreenProps {
  scrollDisabled?: boolean;
  noOutsideSpacing?: boolean;
  withLoader?: boolean;
}

interface NonScrollableScreenProps extends ViewProps {
  scrollDisabled: true;
}

interface ScrollableScreenProps extends ScrollViewProps {
  scrollDisabled?: false;
}

export function AppScreen(props: AppScreenProps & (ScrollableScreenProps | NonScrollableScreenProps)): ReactElement {
  const { children, style: elementStyle = {}, testID, scrollDisabled, noOutsideSpacing, ...restProps } = props;

  const [ViewComponent, viewComponentProps] = useMemo(
    (): [typeof View, ViewProps] | [typeof ScrollView, ScrollViewProps] =>
      scrollDisabled
        ? [View, { style: [commonStyle.fullFlex, !noOutsideSpacing && styles.container, elementStyle], ...restProps }]
        : [
            ScrollView,
            {
              contentContainerStyle: [styles.scroll, !noOutsideSpacing && styles.container, elementStyle],
              showsVerticalScrollIndicator: false,
              keyboardShouldPersistTaps: 'handled',
              ...restProps,
            },
          ],
    [scrollDisabled, restProps, noOutsideSpacing],
  );

  return (
    <Layout level='1' style={commonStyle.fullFlex} testID={testID}>
      <ViewComponent {...viewComponentProps}>{children}</ViewComponent>
    </Layout>
  );
}

const styles = createStyles({
  scroll: {
    minHeight: '100%',
  },
  container: {
    padding: spacings.basicOffset,
  },
});
