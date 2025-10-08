import { CustomSchemaType } from '@eva-design/dss';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import { noop } from 'lodash';
import React, { ReactElement, createContext } from 'react';
import { mapping, theme, UserTheme } from '@iredancer-react-native/mobile/shared/ui/styles';
import { userThemeConfig } from './config';

interface UserThemeProviderProps {
  children: React.ReactNode;
}

export const UserThemeContext = createContext<{
  userTheme: UserTheme;
  isAutoTheme: boolean | null;
  hasDeviceTheme: boolean | null;
  setUserTheme: (value: UserTheme) => void;
  toggleIsAutoTheme: (isAutoTheme: boolean) => void;
}>({
  userTheme: userThemeConfig.defaultUserTheme,
  hasDeviceTheme: null,
  isAutoTheme: null,
  setUserTheme: noop,
  toggleIsAutoTheme: noop,
});

export function UserThemeProvider({ children }: UserThemeProviderProps): ReactElement {
  return (
    <ApplicationProvider {...eva} theme={theme['light']} customMapping={mapping as CustomSchemaType}>
      <StatusBar style={'light'} />
      {children}
    </ApplicationProvider>
  );
}
