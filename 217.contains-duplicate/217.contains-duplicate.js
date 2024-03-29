/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	let map = {};
	let res = false;
	for (let i = 0; i < nums.length; i++) {
		if (map[nums[i]]) {
			return true;
		} else {
			map[nums[i]] = 1;
		}
	}

	return res;
};
// @lc code=end
