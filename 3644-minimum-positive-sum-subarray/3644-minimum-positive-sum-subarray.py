class Solution:
    def minimumSumSubarray(self, nums: List[int], l: int, r: int) -> int:
        
        # l은 3
        
        # r_res=100000000000000
        res=100000000000000

        def solu(l):
            l_res=100000000000000
            for i in range(len(nums)):
                # print("l_arr",nums[i:i+l])
                if len(nums[i:i+l])==l:       
                    l_sum=sum(nums[i:i+l])

                if l_sum>0:
                    l_res=min(l_res,l_sum)

            return l_res
           
        for i in range(l,r+1):
            # print("index",i)
            c_res=solu(i)
            # print("c_res",c_res)
            res=min(c_res,res)
        
            


        if res == 100000000000000:  
            return -1              
        else:
            return res   