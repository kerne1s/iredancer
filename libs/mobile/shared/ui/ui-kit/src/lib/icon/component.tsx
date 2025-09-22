import { ReactElement, ReactNode } from 'react';
import { SvgProps } from 'react-native-svg';
import { Icons } from '@iredancer-react-native/mobile/shared/ui/assets';
import { colors } from '@iredancer-react-native/mobile/shared/ui/styles';
import { IconName } from './types';

export interface IconProps extends SvgProps {
  name: IconName;
}

const defaultColor = colors.textPrimary;


export function Icon({ name, color = defaultColor, style, ...restProps }: IconProps): ReactNode {
  return name in Icons ? (Icons[name] as unknown as (props: SvgProps) => ReactElement)({ color, style, ...restProps }) : null;
}
