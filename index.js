const _ = require('lodash');

exports = module.exports = (value) => {
  // Undefined
  if (_.isUndefined(value)) {
    return false;
  }

  // Null
  if (_.isNull(value)) {
    return false;
  }

  // Boolean
  if (_.isBoolean(value)) {
    return value;
  }

  // Number
  if (_.isNumber(value)) {

    // NaN
    if (_.isNaN(value)) {
      return false;
    }

    // Infinite
    if (!_.isFinite(value)) {
      return false;
    }

    if (0 === value) {
      return false;
    }

    return true;
  }

  // Array
  if (_.isArray(value)) {
    return !!value.length;
  }

  // Object
  if (_.isObject(value)) {
    return Object.keys(value).length !== 0;
  }

  // Uncaught value
  return !!value;
}
