//problem:You are given an array prices where prices[i] is the price of a given stock on the ith day.You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
var maxProfit = function(arr) {
    let min = 0;
    let maxProfit = 0; //set only if its greater than 0
    min = arr[0];

    for(i=1; i < arr.length; i++)
    {
         min = Math.min(arr[i], min)
         let profit = arr[i] - min;
         maxProfit = Math.max(maxProfit, profit);
    }
    return maxProfit;
    
};
