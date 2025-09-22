import { colors, createStyles } from '@iredancer-react-native/mobile/shared/ui/styles';
import { ReactElement } from 'react';
import { View, Text } from 'react-native';

export default function SchoolsScreen(): ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Schools</Text>
    </View>
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
