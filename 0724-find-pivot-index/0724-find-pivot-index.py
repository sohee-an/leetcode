class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        res=-1
        for i in range(len(nums)):
            left_sum= sum(nums[:i])
            right_sum=sum(nums[i+1:])
           

            if left_sum==right_sum:
                res=i
                return i
              
        
        return res
