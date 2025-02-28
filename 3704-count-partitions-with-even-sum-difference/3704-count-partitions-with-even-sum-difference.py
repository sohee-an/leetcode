class Solution:
    def countPartitions(self, nums: List[int]) -> int:
        res=0

        for i in range(1,len(nums)):
            left=sum(nums[:i])
            right=sum(nums[i:])
            print(left)
            print(right)

            m=abs(left-right)

            if m%2==0:
                res+=1
        
        return res
