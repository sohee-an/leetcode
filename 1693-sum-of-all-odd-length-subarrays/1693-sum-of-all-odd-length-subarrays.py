class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        res=0
        for i in range(len(arr)):
            for j in range(i,len(arr)):
                
                    if len(arr[i:j+1])%2!=0:
                        print("arr",arr[i:j+1])
                        sum_nums=sum(arr[i:j+1])
                        # print(sum_nums)
                        res+=sum_nums
            
        

        return res

                