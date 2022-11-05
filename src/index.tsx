import * as React from 'react'

type Props = { [key: string]: any }
type ComponentOrTag = string | React.ComponentType<Props>
type PropsHandler = (props?: Props) => string
type Fragment = string | PropsHandler
type Utility = TemplateStringsArray | string[]

const byProps = (fragment: Fragment = '', props?: Props) =>
  (typeof fragment === 'function' ? fragment(props) : fragment) || ''

export const tail =
  (str: Utility, ...args: Fragment[]) =>
  (props?: Props) =>
    str.reduce(
      (memo, current, index) =>
        `${memo}${current}${byProps(args[index], props)}`
          .trim()
          .replace(/\s{2,}/g, ' '),
      ''
    )

export const tailed =
  (componentName: ComponentOrTag) =>
  (strs: Utility, ...args: Fragment[]) =>
  ({
    className = '',
    as: useAs = componentName,
    children,
    ...props
  }: Props) => {
    const Component = typeof useAs === 'string' ? `${useAs}` : useAs
    const names = tail(strs, ...args)(props)

    return (
      <Component {...props} className={`${names} ${className}`}>
        {children}
      </Component>
    )
  }
