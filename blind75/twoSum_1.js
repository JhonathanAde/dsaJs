/* 
  Two Sum (Easy)
  - Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  • You may assume that each input would have exactly one solution, and you may not use the same element twice.

  EX: Given nums = [2, 7, 11, 15], target = 9
  • Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].
*/

function twoSum(arr, target){
  // Create a hash map
  //  Format -> value: index
  let visited = {};

  // iterate through the array
  for(let i = 0; i < arr.length ; i++){
    let num = arr[i];
    let targetNum = target - num;
    // Check to see if the targetNum already exists in the hash map
    if(visited[targetNum] || visited[targetNum] === 0){
      return [visited[targetNum], i];
    } else { // If not, add num to hash map -> num(value) : index
      visited[num] = i;
    }
  }

  return;
}

console.log(twoSum([2,7,11,15], 9));