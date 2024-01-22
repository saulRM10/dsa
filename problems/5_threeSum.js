"use strict";

const threeSum = function(nums) {
    var result = [];
    for( var i = 0; i < nums.length; i++){
        for( var j = i + 1; j < nums.length; j++){
            for( var h = j+1; h < nums.length; h++){
                if(nums[i] + nums[j]+ nums[h] === 0){
                    var varaition = [nums[i], nums[j], nums[h]];
                    result.push(varaition);
                }
            }
        }
    }
    //console.log( result?.length >= 1 ? printTriplets(result) : "no pairs");
    return result;
};

// const printTriplets = function(array){
//     for( var i = 0; i < array.length; i++){
//         console.log(`pair # ${i + 1} : ${array[i]}`);
//     }
// };


module.exports = threeSum;


