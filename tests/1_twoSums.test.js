"use strict";

const { twoSum } = require('../problems/1_twoSums');


describe("test cases from leetcode ", function(){
    it("Input: nums = [2,7,11,15], target = 9, Output: [0,1]", function(){
        const nums = [2,7,11,15];
        const target = 9;
        const output = [0,1];

        const result = twoSum(nums,target );
        expect(result).toStrictEqual(output);
    });

    it("Input: nums = [3,2,4], target = 6, Output: [1,2]", function(){
        const nums = [3,2,4];
        const target = 6;
        const output = [1,2];

        const result = twoSum(nums,target );
        expect(result).toStrictEqual(output);
    });

    it("Input: nums = [3,3], target = 6, Output: [0,1]", function(){
        const nums = [3,3];
        const target = 6;
        const output = [0,1];

        const result = twoSum(nums,target );
        expect(result).toStrictEqual(output);
    });
})