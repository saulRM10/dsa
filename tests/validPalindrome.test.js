"use strict";

const { validPalindrome } = require('../problems/validPalindrome');

describe("test cases from leetcode", function(){
    it("Input: s = 'A man, a plan, a canal: Panama', Output: true", function(){
        const s = "A man, a plan, a canal: Panama";
        const output = true;

        const result = validPalindrome(s)
        expect(result).toEqual(output); 
    });

    it("Input: s = 'race a car' , Output: false", function(){
        const s = "race a car";
        const output = false;

        const result = validPalindrome(s)
        expect(result).toEqual(output); 
    });

    it("Input: s = ' ' , Output: true ", function(){
        const s = " ";
        const output = true;

        const result = validPalindrome(s)
        expect(result).toEqual(output); 
    });
});
