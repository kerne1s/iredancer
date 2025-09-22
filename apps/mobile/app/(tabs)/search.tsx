import { colors, commonStyle, createStyles } from '@iredancer-react-native/mobile/shared/ui/styles';
import { AppScreen } from '@iredancer-react-native/mobile/shared/ui/ui-kit';
import { ReactElement } from 'react';
import { View, Text } from 'react-native';

export default function SearchScreen(): ReactElement {
  return (
    <AppScreen style={commonStyle.fullFlex}>
      <View style={styles.container}>
        <Text style={styles.text}>Search</Text>
      </View>
    </AppScreen>
  );
}

const styles = createStyles({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.textPrimary,
  },
});
