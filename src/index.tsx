import * as React from 'react';

type Props<T> = { [key: string]: any } & T;
type ComponentOrTag<T> = string | React.ComponentType<Props<T>>
type PropsHandler<T> = (props: Props<T>) => string | undefined | boolean
type Fragment<T> = string | PropsHandler<T>
type Utility = TemplateStringsArray | string[]

const byProps = <T,>(fragment: Fragment<T> = '', props: Props<T>) =>
	(typeof fragment === 'function' ? fragment(props) : fragment) || ''

export const tail =
  <T,>(str: Utility, ...args: Fragment<T>[]) =>
  (props: Props<T>) =>
    str.reduce(
      (memo, current, index) =>
        `${memo}${current}${byProps<T>(args[index], props)}`
          .trim()
          .replace(/\s{2,}/g, ' '),
      ''
    );

export const tailed =
  <T,>(componentName: ComponentOrTag<T>) =>
  (strs: Utility, ...args: Fragment<T>[]) =>
  ({
    className = '',
    as: useAs = componentName,
    children,
    ...props
  }: Props<T>) => {

    const Component = typeof useAs === 'string' ? `${useAs}` : useAs
    const names = tail<T>(strs, ...args)(props as Props<T>)

    return (
      <Component {...props} className={`${names} ${className}`}>
        {children}
      </Component>
    )
  }
