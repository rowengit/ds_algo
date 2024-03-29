# [1. Two Sum](https://leetcode.com/problems/two-sum)

|Category  |Difficulty  |Likes   |Dislikes  |
|----------|------------|--------|----------|
|algorithms|Easy(47.97%)|27221   |872       |

### Tags
array | hash-table
	 		
### Companies
adobe | airbnb | amazon | apple | bloomberg | dropbox | facebook | linkedin | microsoft | uber | yahoo | yelp

## Description

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
```

Example 2:
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

Example 3:
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

## Constraints

- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- Only one valid answer exists.


## 簡而言之，它要的是

給予一個陣列和一個數字，該數字由陣列中其中兩數相加而成，請回傳一個陣列，內容為這兩數字在陣列中的index。

## 思路

由陣列中第一位數開始，定義為第i位數，並將第i位數與第i+n(n>=1)位數相加，若皆不相符，則由陣列中第二位數開始進行下一輪比對(i+1)；若結果與目標值相符，回傳求得值[i, i+n]。



## Follow-up

Can you come up with an algorithm that is less than O(n2) time complexity?

## 進階思路

定義一個mapping表(dictionary)，依序遍歷陣列元素

若目標值減去當前元素的結果值無法在mapping表中找到，則於mapping表新增:

```
// key=當前元素, value=當前元素index;

當前元素: 當前元素index
```

若可在mapping表中找到，則回傳求得值:

```
[當前元素index, mapping表紀錄另一數字的index]
```

