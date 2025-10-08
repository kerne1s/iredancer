import { Text, TextProps } from '@ui-kitten/components/ui';
import { PropsWithChildren, ReactElement, useCallback } from 'react';
import { Platform, TextInput } from 'react-native';
import { createStyles } from '@iredancer-react-native/mobile/shared/ui/styles';

export interface AppTextProps extends TextProps {
  isCentered?: boolean;
  category?: TextProps['category'] | 's3';
  status?: TextProps['status'] | 'secondary';
}

export function AppText({ style: elementStyle, isCentered, ...restProps }: AppTextProps): ReactElement {
  // NOTE: Workaround to make text selectable for iOS
  // Issue: https://github.com/facebook/react-native/issues/13938
  const WrapperComponent = useCallback(
    ({ children }: PropsWithChildren) => {
      if (restProps.selectable && Platform.OS === 'ios') {
        return (
          <TextInput
            editable={false}
            scrollEnabled={false}
            multiline={true}
            style={[style.wrapper, isCentered && style.center, elementStyle]}>
            {children}
          </TextInput>
        );
      } else {
        return children;
      }
    },
    [restProps.selectable]
  );

  return (
    <WrapperComponent>
      <Text style={[isCentered && style.center, elementStyle]} {...restProps} />
    </WrapperComponent>
  );
}

const style = createStyles({
  center: {
    textAlign: 'center'
  },
  wrapper: {
    paddingTop: 0
  }
});
