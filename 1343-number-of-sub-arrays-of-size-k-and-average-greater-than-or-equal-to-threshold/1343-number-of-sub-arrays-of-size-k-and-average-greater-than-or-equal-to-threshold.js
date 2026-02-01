/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let count = 0;
  let currentSum = 0;
  const targetSum = k * threshold; 

  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }

  
  if (currentSum >= targetSum) {
    count++;
  }


  for (let j = k; j < arr.length; j++) {

    currentSum = currentSum - arr[j - k] + arr[j];
    

    if (currentSum >= targetSum) {
      count++;
    }
  }

  return count;
};