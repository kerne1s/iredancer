import { Link } from 'expo-router';
import { LinkProps } from 'expo-router/build/link/Link';
import { Fragment, PropsWithChildren, ReactElement } from 'react';

export type LinkWrapperProps = PropsWithChildren & Partial<Omit<LinkProps, 'asChild'>>;

export const LinkWrapper = (props: LinkWrapperProps): ReactElement => {
  const [Wrapper, wrapperProps] = props.href ? [Link, { ...props, asChild: true }] : [Fragment, props];

  return <Wrapper {...(wrapperProps as LinkProps)} />;
};
