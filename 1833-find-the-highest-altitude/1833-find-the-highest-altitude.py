class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        res=0
        res_list=[]
        res_list.append(0)
        for i in range(len(gain)):
            nums= res_list[-1]+gain[i]
            res_list.append(nums)
      
            res= max(res,nums)

       
        return res