/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Easy (69.15%)
 * Likes:    6397
 * Dislikes: 271
 * Total Accepted:    1.3M
 * Total Submissions: 1.8M
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given the root of a binary tree, return the inorder traversal of its nodes'
 * values.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,null,2,3]
 * Output: [1,3,2]
 *
 *
 * Example 2:
 *
 *
 * Input: root = []
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: root = [1]
 * Output: [1]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 *
 *
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	// solution: traverse
	// let res = [];
	// const traverse = node => {
	// 	node.left && traverse(node.left);
	// 	res.push(node.val);
	// 	node.right && traverse(node.right);
	// };
	// root && traverse(root);
	// return res;

	let res = [];
	let stack = [];

	while (root || stack.length) {
		if (root) {
			stack.push(root);
			root = root.left;
		} else {
			root = stack.pop();
			res.push(root.val);
			root = root.right;
		}
	}

	return res;
};
// @lc code=end
