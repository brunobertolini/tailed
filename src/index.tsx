type Props = { [key: string]: any }

type PropsHandler = (props?: Props) => string
type Fragment = string | PropsHandler
type Utility = TemplateStringsArray | string[]

const byProps = (fragment: Fragment = '', props?: Props) =>
  typeof fragment === 'function' ? fragment(props) : fragment

export const tail = (str: Utility, ...args: [Fragment?]) =>
  (props?: Props) =>
    str.reduce(
      (memo, current, index) =>
        `${memo}${current}${byProps(args[index], props)}`
          .trim()
          .replace(/\s{2,}/g, ' '),
      ''
    )
