class Solution:
    def addDigits(self, num: int) -> int:
        # str_num=str(num)
        # length = len(str_num)
        # sum_num=0
        
        # if(length==1):
        #     return num
        # for val in str_num :
        #     sum_num+=int(val)


        
        # return self.addDigits(sum_num)
        if num < 10:        # length 계산 없이 이렇게 더 깔끔해요
            return num
        
        sum_num = 0
        for val in str(num):
            sum_num += int(val)
        
        return self.addDigits(sum_num)

            