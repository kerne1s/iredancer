import { UserThemeProvider } from '@iredancer-react-native/mobile/shared/features/user-theme-provider';
import { fonts } from '@iredancer-react-native/mobile/shared/ui/styles';
import { constants } from '@iredancer-react-native/mobile/shared/utils/config';
import { setLanguage } from '@ronas-it/react-native-common-modules/i18n';
import { useFonts } from 'expo-font';

import { Stack, SplashScreen } from 'expo-router';
import { ReactElement, useEffect } from 'react';

export { ErrorBoundary } from 'expo-router';

const translations = {
  [constants.defaultLocale]: {
    ...require('i18n/mobile/app/en.json'),
    ...require('i18n/mobile/shared/en.json'),
  },
};

const useLanguage = setLanguage(translations, 'en');

// eslint-disable-next-line @typescript-eslint/naming-convention
export const unstable_settings = {
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function App(): ReactElement {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='(tabs)' />
    </Stack>
  );
}

export default function RootLayout(): ReactElement | null {
  useLanguage(constants.defaultLocale);

  const [loaded, error] = useFonts(fonts);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <UserThemeProvider>
      <App />
    </UserThemeProvider>
  );
}
