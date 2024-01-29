"use strict";

const { buySellStock } = require('../problems/buySellStock');


describe("test cases from leetcode ", function(){
    it("Input: prices = [7,1,5,3,6,4], Output: 5", function(){
        const prices = [7,1,5,3,6,4];
        const output = 5;

        const result = buySellStock(prices);
        expect(result).toEqual(output);
    });

    it("Input: nums = [7,6,4,3,1] , Output: 0", function(){
        const prices = [7,6,4,3,1];
        const output = 0;

        const result = buySellStock(prices);
        expect(result).toEqual(output);
    });
})