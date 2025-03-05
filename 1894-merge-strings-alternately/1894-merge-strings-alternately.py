class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        res=""
        w1=len(word1)
        w2=len(word2)
       
        start=0
        end = min(w1, w2)  # ✅ 두 단어의 최소 길이까지만 반복

        while start < end:
            res += word1[start] + word2[start]
            print(word1[start])
            start += 1

        if w1>w2:
            res+=word1[start:]
        else:
            res+=word2[start:]
        
  
        return res