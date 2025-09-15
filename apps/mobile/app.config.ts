import { EASConfig, ExpoConfig } from '@expo/config';

const createConfig = (): Omit<ExpoConfig, 'extra'> & { extra: { eas: EASConfig } & typeof extra } => {
  const projectId = '';

  const appId = 'com.iredancer.dev';

  const extra = {
    eas: { projectId } as EASConfig,
  };

  return {
    name: 'Iredancer Dev',
    slug: 'iredancer-app',
    scheme: 'iredancer-dev',
    version: '0.1.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    splash: {
      image: './assets/images/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      url: `https://u.expo.dev/${projectId}`,
    },
    ios: {
      bundleIdentifier: appId,
      supportsTablet: false,
      buildNumber: '1',
      config: {
        usesNonExemptEncryption: false,
      },
    },
    android: {
      package: appId,
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      edgeToEdgeEnabled: true,
    },
    plugins: ['expo-router', 'expo-localization'],
    newArchEnabled: true,
    extra,
  };
};

export default createConfig;
