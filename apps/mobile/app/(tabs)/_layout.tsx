import { colors } from '@iredancer-react-native/mobile/shared/ui/styles';
import { Icon } from '@iredancer-react-native/mobile/shared/ui/ui-kit';
import { Tabs } from 'expo-router';
import { ReactElement, Ref } from 'react';
import { TouchableOpacity, View } from 'react-native';

export default function TabsLayout(): ReactElement {
  return (
    <Tabs
      backBehavior='history'
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarShowLabel: false,
        tabBarButton: (props) => (
          <TouchableOpacity
            {...props}
            onBlur={props.onBlur || undefined}
            onFocus={props.onFocus || undefined}
            onLongPress={props.onLongPress || undefined}
            onPressIn={props.onPressIn || undefined}
            onPressOut={props.onPressOut || undefined}
            ref={props.ref as Ref<View>}
            delayLongPress={props.delayLongPress || undefined}
            disabled={props.disabled || false} />
        ),
      }}>
      <Tabs.Screen
        name='search'
        options={{
          tabBarIcon: ({ color }) => <Icon name='search' color={color} />,
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
