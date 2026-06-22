class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:

        nums.sort()
        res = nums[0] + nums[1] + nums[2]
        
        for i in range(len(nums)):
            
            if(i>0 and nums[i]==nums[i-1]):
                continue

            left=i+1
            right=len(nums)-1

            while left<right:
                current_sum= nums[i]+nums[left]+nums[right]
                if abs(current_sum - target) < abs(res - target):
                    res = current_sum

                if(current_sum<target):
                    left+=1
                elif(current_sum>target):
                    right-=1
                else:
                    return target


                
        
        return res
        