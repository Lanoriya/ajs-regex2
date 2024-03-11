import { validator } from '../Validator';

describe('Check number', () => {
  test('number checker case', () => {
    expect(validator('8 (927) 000-00-00')).toEqual('+79270000000')
  })

  test('number checker case2', () => {
    expect(validator('+7 960 000 00 00')).toEqual('+79600000000')
  })

  test('number checker case3', () => {
    expect(validator('+86 000 000 0000')).toEqual('+860000000000')
  })
})