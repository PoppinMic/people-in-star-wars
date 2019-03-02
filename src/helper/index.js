// These functions are common help functions

/**
 * This functions converts an array of object into a Dictionary object
 * @param {Array<obejct>} arr
 * @param {String} key
 * @param {String} value
 * @returns {Object}
 */
export const arrayToDict = (arr, key, value) => {
  const dict = {};
  arr.forEach(element => {
    dict[element[key]] = element[value];
  });
  return dict;
};

/**
 *
 * @param {Array} arr Source array of values to match the dictionary object
 * @param {Object} dict A dictionary object
 */
export const matchDictKeysByArray = (arr, dict) => {
  const matchedKeys = [];
  arr.forEach(element => {
    for (const key in dict) {
      if (element === dict[key]) {
        matchedKeys.push(key);
      }
    }
  });
  return matchedKeys;
};
