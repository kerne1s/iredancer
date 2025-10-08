import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Layout } from '@ui-kitten/components';
import { ReactElement, useMemo } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyles, fontFamily, rem, spacings } from '@iredancer-react-native/mobile/shared/ui/styles';
import { HeaderIconButtons } from '../header-icon-buttons';
import { AppText } from '../text';


export function Header({ options, navigation }: (NativeStackHeaderProps | BottomTabHeaderProps)): ReactElement {
  const { top } = useSafeAreaInsets();
  const title =
    options.title ||
    (typeof options.headerTitle === 'string'
      ? options.headerTitle
      : typeof options.headerTitle === 'function'
        ? options.headerTitle?.({ children: '' })
        : ' ');
  const canGoBack = navigation.canGoBack();

  const headerLeft = useMemo(
    () => canGoBack ? (
      <HeaderIconButtons
        items={[{ iconProps: { name: 'arrowLeft' }, onPress: navigation.goBack, hasExtendedTouchArea: true }]}
      />
    ) : null,
    [canGoBack]
  );

  return (
    <Layout level='1' style={[styles.header, { paddingTop: (top || 0) + rem }]}>
      <View style={styles.container}>
        <View style={styles.headerLeft}>{options.headerLeft ? options.headerLeft({ canGoBack }) : headerLeft}</View>
        <View style={styles.headerRight}>{options.headerRight && options.headerRight({ canGoBack })}</View>
        {typeof title === 'string' ? (
          <AppText
            style={styles.title}
            numberOfLines={2}
            ellipsizeMode='tail'
            isCentered>
            {title}
          </AppText>
        ) : (
          title
        )}
      </View>
    </Layout>
  );
}

const styles = createStyles({
  header: {
    paddingHorizontal: spacings.contentOffset,
    paddingBottom: '0.75rem',
    flexDirection: 'row',
  },
  headerLeft: {
    position: 'absolute',
    left: 0,
  },
  headerRight: {
    position: 'absolute',
    right: 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: '2.5rem',
  },
  title: {
    fontFamily: fontFamily.regular,
  },
});
