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

  it('should return a conditional list of class names', () => {
    const classNames = tail`
      a
      ${(props) => props?.b && 'b'}
      c
      ${(props) => props?.d && 'd'}
      e
      ${(props) => props?.f && 'f'}
    `
    expect(classNames({d: true})).toBe('a c d e')
  })

})
