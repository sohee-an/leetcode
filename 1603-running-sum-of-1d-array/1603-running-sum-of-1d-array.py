class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        res=[]

        for i in range(len(nums)):
            sum_value=sum(nums[:i+1])
            res.append(sum_value)

        return res