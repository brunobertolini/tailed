# Tailed

Tailed is a tiny lib to add styled-components syntax like, with suport to conditional classes.

## Motivation

It's was initally be created to work with tailwindcss and avoid class mess inside react components without need a  build process, but it's can used with any framework (maybe I need split in two packages later).

## Usage

Tailed works like styled-components, but, with class names instead of css props.

```js
import { tailed } from 'tailed-js'

const Box = tailed('div')`
  bg-red
  p-2 lg:p-4
  rounded-sm lg:rounded-lg

  ${props => props?.size === 'small' && 'text-sm'}
`

// it's allow especialization
const ErrorBox = tailed(Box)`
  border-red
`

// and you can continue using className prop to add extra class names
const App = () => (
  <Box className="m-4">
    Magic!
  </Box>
)

```

### Using "as" prop

Like styled-components, you can add `as` prop to use a diferent base component:

```js
const Button = tailed('button')``

// In this case, the rendered element will be an <a> tag instead of <button>.
<Button as="a" />

// There, you get AnotherComponent rendered instead of <button> tag
<Button as={AnotherComponent}>
```

## Using without React

You can use this lib with a more independent way, importing `tail` insteadof `tailed`.

```js
import { tail } from `tailed-js`

const classNames = tail`
  bg-red
  p-2 lg:p-4
  rounded-sm lg:rounded-lg

  ${props => props?.size === 'small' && 'text-sm'}
`

const names = classNames({
  size: 'small'
})

```

It's totally independent of lib/frameowork and is a dependency free.

## A bit more powerfull

Using tailed with [styled-by](https://github.com/brunobertolini/styled-by), you can create a powerfull conditional styles handler.

```js
import { tail } from 'tailed-js'
import styledBy from 'styled-by'

// you can use tail or tailed here
const classNames = tail`
  bg-red
  p-2 lg:p-4
  rounded-sm lg:rounded-lg

  ${styledBy('size', {
    sm: 'text-sm',
    lg: 'text-lg'
  })}
`
```
