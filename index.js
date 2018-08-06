module.exports = (value) => {

    // check null or undefined
    if ( 0 === value || null === value || 'undefined' === typeof value ) {
        return false;
    }

    // check value is Nan
    if ( 'string' !== typeof value && isNaN(value)) {
        return false;
    }

    // check is isFinite
    if ( 'number' === typeof value && !isFinite(value) ) {
        return false;
    }

    // check if value is an number
    if ( 'number' === typeof value ) {
        return true;
    }

    // check if value is an array
    if ( Array.isArray(value) ) {
        // If array has item return true or return false
        return !!value.length;
    }

    // check if value is an object
    if ( 'object' === typeof value ) {
        return Object.keys(obj).length !== 0;
    }

    return !!value;
};
