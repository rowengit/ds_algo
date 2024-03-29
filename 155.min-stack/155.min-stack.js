/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start

var MinStack = function () {
	this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	this.stack = [...this.stack, val];
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.stack = this.stack.slice(0, this.stack.length - 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	let min = null;
	this.stack.forEach(v => {
		if (min === null) min = v;
		if (v < min) min = v;
	});
	return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
