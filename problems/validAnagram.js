"use strict";

const  isAnagram = function(s, t) {
     const charArrayS = s.split('').sort().join() 
     const charArrayT =  t.split('').sort().join();

     return charArrayS === charArrayT; 
};

module.exports = { isAnagram }; 