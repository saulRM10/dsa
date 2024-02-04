"use strict";

const { isAnagram } = require('../problems/validAnagram');

describe("test cases from leetcode ", function(){
    it("Input: s = 'anagram', t = 'nagaram', Output: true", function(){
        const s = "anagram";
        const t = "nagaram";

        const result = isAnagram(s, t);
        expect(result).toBe(true);
    });

    it("Input: s = 'rat', t = 'car', Output: false", function(){
        const s = "rat";
        const t = "car";

        const result = isAnagram(s, t);
        expect(result).toBe(false);
    });
})