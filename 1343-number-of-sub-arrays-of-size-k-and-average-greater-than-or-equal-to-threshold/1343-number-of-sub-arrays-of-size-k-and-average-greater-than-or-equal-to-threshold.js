/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let count = 0;
  let currentSum = 0;
  const targetSum = k * threshold; // 1. 기준 합계 미리 계산

  // 2. 첫 번째 윈도우(0부터 k-1까지) 합계 구하기
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }

  // 3. 첫 번째 윈도우도 조건에 맞는지 확인해야 함!
  if (currentSum >= targetSum) {
    count++;
  }

  // 4. 슬라이딩 시작 (k부터 끝까지)
  for (let j = k; j < arr.length; j++) {
    // 윈도우 이동: 나가는 놈 빼고 들어오는 놈 더하기
    currentSum = currentSum - arr[j - k] + arr[j];
    
    // 평균 이상(합계 이상)인지 확인
    if (currentSum >= targetSum) {
      count++;
    }
  }

  return count;
};