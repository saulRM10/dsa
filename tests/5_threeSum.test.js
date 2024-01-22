"use strict"; 

const threeSum = require('../problems/5_threeSum');

describe("test cases from leetcode", function(){
    it.skip("Input: nums = [-1,0,1,2,-1,-4], Output: [[-1,-1,2],[-1,0,1]]", function(){
        const nums = [-1,0,1,2,-1,-4];
        const output = [[-1,-1,2],[-1,0,1]];

        const result = threeSum(nums)
        expect(result).toStrictEqual(output);
    });

    it("Input: nums = [0,1,1], Output:  []", function(){
        const nums = [0,1,1];
        const output =  [];

        const result = threeSum(nums)
        expect(result).toStrictEqual(output);
    });

    it("Input: nums = [0,0,0], Output: [[0,0,0]]", function(){
        const nums = [0,0,0];
        const output =  [[0,0,0]];

        const result = threeSum(nums)
        expect(result).toStrictEqual(output);
    });
});