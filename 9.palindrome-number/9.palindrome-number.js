/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (51.76%)
 * Likes:    4584
 * Dislikes: 1942
 * Total Accepted:    1.7M
 * Total Submissions: 3.2M
 * Testcase Example:  '121'
 *
 * Given an integer x, return true if x is palindrome integer.
 *
 * An integer is a palindrome when it reads the same backward as forward.
 *
 *
 * For example, 121 is a palindrome while 123 is not.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: x = 121
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 *
 *
 * Example 3:
 *
 *
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 *
 *
 * Example 4:
 *
 *
 * Input: x = -101
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * -2^31 <= x <= 2^31 - 1
 *
 * 0,1,2,3
 * 0,1,2
 *
 * Follow up: Could you solve it without converting the integer to a string?
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	if (x < 0) return false;
	let result = true;

	let getNum = [];
	let tmpX = x;

	while (tmpX >= 1) {
		getNum.push(tmpX % 10);
		tmpX = Math.floor(tmpX / 10);
	}

	for (let i = 0; i < getNum.length; i++) {
		let lastIdx = getNum.length - 1 - i;
		if (i === lastIdx || i > lastIdx) break;
		if (getNum[i] !== getNum[lastIdx]) {
			result = false;
		}
	}

	return result;
};
// @lc code=end
