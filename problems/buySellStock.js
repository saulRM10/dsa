"use strict"; 

const buySellStock = function(prices){
   // 
   const sortedArray = prices.sort(function(a, b){return a - b});

   for( var i = 0 ; i < prices.length; i++){
    if( prices.indexOf(sortedArray[i]) < prices.indexOf(sortedArray[prices.length-1]) ){
        return sortedArray[prices.length-1] - sortedArray[i];  
    }
   }

   return 0;

}

module.exports = { buySellStock }; 