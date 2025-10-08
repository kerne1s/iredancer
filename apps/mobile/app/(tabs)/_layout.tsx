import { colors, createStyles } from '@iredancer-react-native/mobile/shared/ui/styles';
import { Header, Icon } from '@iredancer-react-native/mobile/shared/ui/ui-kit';
import { useTranslation } from '@ronas-it/react-native-common-modules/i18n';
import { Tabs } from 'expo-router';
import { ReactElement } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabsLayout(): ReactElement {
  const t = useTranslation('SHARED.TABS_LAYOUT');
  const { bottom } = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        header: (props) => <Header {...props} />,
        tabBarActiveTintColor: colors.primary,
        tabBarShowLabel: false,
        tabBarButton: (props) => <TouchableOpacity {...(props as TouchableOpacityProps)} style={[props.style, styles.tabBarButton]} />,
        tabBarStyle: { paddingBottom: bottom, height: 2 * bottom },
      }}>
      <Tabs.Screen
        name='search'
        options={{
          tabBarIcon: ({ color }) => <Icon name='search' color={color} />,
          title: t('TEXT_SEARCH_COMPETITIONS'),
        }} />
      <Tabs.Screen
        name='favorites'
        options={{
          tabBarIcon: ({ color }) => <Icon name='heart' color={color} />,
        }} />
      <Tabs.Screen
        name='qualifications'
        options={{
          tabBarIcon: ({ color }) => <Icon name='barChart' color={color} />,
        }} />
      <Tabs.Screen
        name='schools'
        options={{
          tabBarIcon: ({ color }) => <Icon name='education' color={color} />,
        }}/>
      <Tabs.Screen
        name='settings'
        options={{
          tabBarIcon: ({ color }) => <Icon name='settings' color={color} />,
        }} />
    </Tabs>
  );
}

const styles = createStyles({
  tabBarButton: {
    alignItems: 'center',
    justifyContent: 'center'
  },
});
