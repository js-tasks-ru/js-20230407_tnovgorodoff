/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === undefined) {
    return string;
  }
  if (size === 0 || string.length === 0) {
    return '';
  }
  let symArr = string.split(''),
    num = 0,
    prevSym;
  const resArr = [];

  for (let sym of symArr) {
    if (prevSym === sym) {
      if (num < size) {
        num++;
        resArr.push(sym);
      }
    }
    else {
        prevSym = sym;
        num = 1;
        resArr.push(sym);
      }
    }
    return resArr.join('');
}
