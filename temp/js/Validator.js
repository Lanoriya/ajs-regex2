"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validator = validator;
function validator(str) {
  str = str.replace(/[\s()-]/g, '');
  return str.replace(/^\8/g, '+7');
}