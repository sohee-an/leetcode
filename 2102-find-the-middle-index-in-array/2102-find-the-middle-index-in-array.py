class Solution:
    def findMiddleIndex(self, nums: List[int]) -> int:
        
        for i in range(len(nums)):
            left = sum(nums[:i])      # 0부터 i-1까지의 합
            right = sum(nums[i+1:])

            if left==right:
                return i


        return -1