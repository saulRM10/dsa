"use strict";

const validPalindrome = function(s) {
    const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reverseString = cleanString.split('').reverse().join('');;
    return cleanString === reverseString;
};


module.exports = { validPalindrome };