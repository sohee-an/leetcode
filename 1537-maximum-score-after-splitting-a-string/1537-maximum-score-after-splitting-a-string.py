class Solution:
    def maxScore(self, s: str) -> int:
        max_score = 0
        
        for i in range(1, len(s)):  
            left = s[:i]
            right = s[i:]
            
            zeros_left = left.count('0')
            ones_right = right.count('1')
            
            score = zeros_left + ones_right
            max_score = max(max_score, score)
        
        return max_score