// These functions are common help functions

/**
 * This functions converts an array of object into a Dictionary object
 * !params: key, value must be the actual keys in the array of objects and the keys among array must be unique
 * @param {Array<obejct>} arr
 * @param {String} key1
 * @param {String} key2
 * @returns {Object}
 */
export const arrayToDict = (arr, key1, key2) => {
  const dict = {};
  arr.forEach(element => {
    dict[element[key1]] = element[key2];
  });
  return dict;
};

/**
 *
 * @param {Array} arr Source array of values to match the dictionary object
 * @param {Object} dict A dictionary object
 * @returns {Array} An array of matchedKeys
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
