"use strict";

const { hasCycle } = require('../problems/hasCycle');


describe("test cases from leetcode ", function(){
    it("Input: nums = [2,7,11,15], target = 9, Output: [0,1]", function(){
        const nums = [2,7,11,15];
        const target = 9;
        const output = [0,1];

        const result = hasCycle(head);
        expect(result).toStrictEqual(output);
    });
})

