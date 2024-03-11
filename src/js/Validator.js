export function validator(str) {
  str = str.replace(/[\s()-]/g, '')
  return str.replace(/^\8/g, '+7')
}