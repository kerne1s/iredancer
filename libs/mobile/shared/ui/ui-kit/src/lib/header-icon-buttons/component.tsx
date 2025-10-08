import { ReactElement } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createStyles } from '@iredancer-react-native/mobile/shared/ui/styles';
// import { Badge, BadgePlacement } from '../badge';
import { Icon, IconProps } from '../icon';
import { LinkWrapper, LinkWrapperProps } from '../link-wrapper';
import { headerIconButtonsConfig } from './config';

export interface HeaderIconButtonsItem {
  iconProps: IconProps;
  onPress?: () => void;
  linkProps?: LinkWrapperProps;
  hasExtendedTouchArea?: boolean;
  // hasBadge?: boolean;
  isDisabled?: boolean;
}

export interface HeaderIconButtonsProps {
  items: Array<HeaderIconButtonsItem>;
}

export function HeaderIconButtons({ items }: HeaderIconButtonsProps): ReactElement {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <LinkWrapper key={item.iconProps.name} {...item?.linkProps}>
          <TouchableOpacity
            disabled={item.isDisabled}
            onPress={item.onPress}
            hitSlop={item.hasExtendedTouchArea ? headerIconButtonsConfig.touchExtensionValue : 0}>
            <Icon {...item.iconProps} />
            {/* {!!item.hasBadge && <Badge placement={BadgePlacement.TOP_RIGHT} withBorder />} */}
          </TouchableOpacity>
        </LinkWrapper>
      ))}
    </View>
  );
}

const styles = createStyles({
  container: {
    flexDirection: 'row',
    gap: '1rem'
  }
});
