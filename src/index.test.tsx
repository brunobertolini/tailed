import { tail } from '.'

describe('Class names handler', () => {

  it('should return a list of class names', () => {
    const classNames = tail`
      a
      b
      c
      d
    `
    expect(classNames()).toBe('a b c d')
  })

})
