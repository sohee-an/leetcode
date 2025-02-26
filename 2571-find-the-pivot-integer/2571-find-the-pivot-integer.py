class Solution:
    def pivotInteger(self, n: int) -> int:

        input_list=[]
        for i in range(1,n+1):
            input_list.append(i)

       

        for i in range(len(input_list)):
            right=sum(input_list[:i+1])
            left=sum(input_list[i:])
         
            if right ==left:
                return i+1
            


        return -1