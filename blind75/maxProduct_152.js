/* 
  152.) Max Product Subarray (Medium)
    Technique: Dynamic Programming

    • Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

    Example 1:
      Input: [2, 3, -2, 4]
      Output: 6
      Explanation: [2, 3] has the largest product 6.

*/

let maxProduct = (nums) => {
  let result = Math.max(...nums);
  let currentMax = 1;
  let currentMin = 1;

  for(let i = 0; i < nums.length; i++){
    let num = nums[i];

    if(num === 0){
      currentMax = 1;
      currentMin = 1;
    }

    let temp = currentMax * num;
    currentMax = Math.max( num * currentMax, num * currentMin, num );
    currentMin = Math.min(temp, num * currentMin, num);
    result = Math.max(currentMax, result);
  }

  return result;
}

console.log(maxProduct([2, 3, -2, 4]));