import {
  ComponentType,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
} from 'react';

export function withForwardedRef<Ref = unknown, Props = Record<string, unknown>>(
  Component: ComponentType<Props>,
): ForwardRefExoticComponent<PropsWithoutRef<Props> & RefAttributes<Ref>> {
  const WrappedComponent: ForwardRefRenderFunction<Ref, Props> = (props, ref) => (
    <Component {...props} outerRef={ref} />
  );
  const name = Component.displayName || Component.name;

  WrappedComponent.displayName = `withForwardedRef(${name})`;

  return forwardRef(WrappedComponent);
}
