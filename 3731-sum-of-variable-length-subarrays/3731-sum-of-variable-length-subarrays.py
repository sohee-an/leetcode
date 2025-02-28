class Solution:
    def subarraySum(self, nums):
        sum = 0
        n = len(nums)

        for i in range(n):
            start = max(0, i - nums[i])
            for j in range(start, i + 1):
                sum += nums[j]

        return sum