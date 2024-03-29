"use strict";

var _Validator = require("../Validator");
describe('Check number', function () {
  test('number checker case', function () {
    expect((0, _Validator.validator)('8 (927) 000-00-00')).toEqual('+79270000000');
  });
  test('number checker case2', function () {
    expect((0, _Validator.validator)('+7 960 000 00 00')).toEqual('+79600000000');
  });
  test('number checker case3', function () {
    expect((0, _Validator.validator)('+86 000 000 0000')).toEqual('+860000000000');
  });
});