"use strict";

const { invertBinaryTree } = require('../problems/1_twoSums');


describe("test cases from leetcode ", function(){
    it("Input: root =[4,2,7,1,3,6,9], Output: [4,7,2,9,6,3,1]", function(){
        const root = [4,2,7,1,3,6,9];
        const output = [4,7,2,9,6,3,1];

        const result = invertBinaryTree(root);
        expect(result).toStrictEqual(output);
    });

    it("Input: root = [2,1,3], Output: [2,3,1]", function(){
        const root = [2,1,3];
        const output = [2,3,1];

        const result = invertBinaryTree(root);
        expect(result).toStrictEqual(output);
    });

    it("Input: root = [], Output: []", function(){
        const root = [];
        const output = [];

        const result = invertBinaryTree(root);
        expect(result).toStrictEqual(output);
    });
})