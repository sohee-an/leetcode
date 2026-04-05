class Solution:
    def fizzBuzz(self, n: int) -> List[str]:

        result =[]
        for val in range(1,n+1):
            if (val%3==0 and val%5 ==0):
                result.append("FizzBuzz")
            elif val%3==0:
                 result.append("Fizz")
            elif val%5==0:
                result.append("Buzz")
            else:
                result.append(str(val))


        return result

        