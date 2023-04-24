/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const  pathArr = path.split('.');

  return obj => {
    let objValues = obj;
    for (const prop of pathArr) {
      if (objValues === undefined) break;
      objValues = objValues[prop]
    }
    return objValues;
  }
}
