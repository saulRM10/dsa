"use strict";

const { longestPalindrome } = require('../problems/3_longestPalindrome');

describe("test cases from leetcode", function(){
    it("Input: s = 'babad' , Output: 'bab'", function(){
        const s = "babad";
        const output = "bab";

        const result = longestPalindrome(s)
        expect(result).toStrictEqual(output); 
    });

    it("Input: s = 'cbba' , Output: 'bb'", function(){
        const s = "cbba";
        const output = "bb";

        const result = longestPalindrome(s)
        expect(result).toStrictEqual(output); 
    });
});

