---
title: leetcode题解
date: 2022-06-19 16:56:31
tags: ["js","leetcode"]
prev: false
next: ../初识typescript
category: 学习
sticky: true
comments: true
---

## 前言

leetcode刷题题解
<!-- more -->

把在leetcode上刷过的题目记录一二


## 2.两数相加
```js
/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let out = new ListNode()
    while (l1 || l2) {
        const value = l1 ? l1.value : 0 + l2 ? l2.value : 0
        if (value > 10) {
            out.value = value
            l1.next.value += 1
        } else {
            out.value = value - 10
        }
    }
    return out
};
// @lc code=end


```


## 4.寻找两个正序数组的中位数
```js
/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const nums = [...nums1, ...nums2].sort((a, b) => b - a)
    if (nums.length % 2 === 0) {
        const end = nums.length / 2
        return ((nums[end - 1] + nums[end]) / 2).toFixed(5).toString().padEnd(5, "0")
    } else {
        return nums[(nums.length - 1) / 2] + ".00000"
    }
};
// @lc code=end


```


## 13.罗马数字转整数
```js
/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map1 = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    const map2 = new Map([
        ['IV', 4],
        ['IX', 9],
        ['XL', 40],
        ['XC', 90],
        ['CD', 400],
        ['CM', 900],
    ]);
    let count = 0;
    for (const [key, value] of map2) {
        if (s.includes(key)) {
            s = s.replace(key, '');
            count += value;
        }
    }
    for (let i = 0; i < s.length; i++) {
        count += map1.get(s[i]);
    }
    return count
};
// @lc code=end


```


## 14.最长公共前缀
```js
/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0]
    let s = ""
    let f = true
    let r = 0
    while (f) {
        if (!strs[0][r]) {
            f = false
            return s
        }
        let l = strs[0][r]
        for (let i = 0; i < strs.length - 1; i++) {
            if (!strs[i][r] || l !== strs[i + 1][r]) {
                f = false
                l = ""
                return s
            }
        }
        s += l
        r++
    }
    return s
};
// @lc code=end


```


## 21.合并两个有序链表
```js
/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let headnode = new ListNode(), node = headnode;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            node.next = l1
            l1 = l1.next
        } else {
            node.next = l2
            l2 = l2.next
        }
        node = node.next
    }
    node.next = l1 || l2
    return headnode.next
};
// @lc code=end


```


## 26.删除有序数组中的重复项
```js
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length;) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i - 1, 1)
        } else {
            i++
        }
    }
    return nums.length
};
// @lc code=end


```


## 27.移除元素
```js
/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length;) {
        if (nums[i] === val) {
            nums.splice(i, 1)
        } else {
            i++
        }
    }
    return nums.length
};
// @lc code=end


```


## 35.搜索插入位置
```js
/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (target <= nums[0]) return 0
    if (target > nums[nums.length - 1]) return nums.length
    for (let i = 0; i < nums.length; i++) {
        if (nums[i - 1] <= target && nums[i] >= target) return i
    }
};
// @lc code=end


```


## 53.最大子序和
```js
/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let prev = 0, max = -Number.MAX_VALUE
    for (let i = 0; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i])
        max = Math.max(max, prev)
    }
    return max
};
// @lc code=end


```


## 58.最后一个单词的长度
```js
/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const arr = s.trim().split(" ")
    return arr[arr.length - 1].length
};
// @lc code=end


```


## 66.加一
```js
/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i > -1; i--) {
        digits[i]++
        if (digits[i] > 9) {
            digits[i] = 0
        } else {
            return digits
        }
    }
    digits.unshift(1)
    return digits
};
// @lc code=end


```


## 67.二进制求和
```js
/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2)
};
// @lc code=end


```


## 83.删除排序链表中的重复元素
```js
/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

import { left } from "inquirer/lib/utils/readline";

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let node = head
    while (node) {
        const next = node.next
        if (next && (next.val === node.val)) {
            node.next = next.next
        } else {
            node = node.next
        }
    }
    return head
};
// @lc code=end


```


## 88.合并两个有序数组
```js
/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    for (let i = m + n - 1; i >= 0; i--) {
        if (n === 0) break
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[i] = nums1[m - 1];
            m--;
        } else {
            nums1[i] = nums2[n - 1]
            n--;
        }
    }
};
// @lc code=end


```


## 94.二叉树的中序遍历
```js
/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
    let res = [], stack = []
    while (root || stack.length > 0) {
        if(root){
            stack.push(root)
            root = root.left
        }else{
            root = stack.pop()
            res.push(root.val)
            root = root.right
        }
    }
    return res
};
// @lc code=end


```


## 100.相同的树
```js
/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    let stackP = [], stackQ = []
    while (p || stackP.length || q || stackQ.length) {
        if (p || q) {
            if ((!p || !q) || p.val !== q.val) return false
            stackP.push(p)
            stackQ.push(q)
            p = p.left
            q = q.left
        } else {
            p = stackP.pop()
            q = stackQ.pop()
            if (p.val !== q.val) return false
            p = p.right
            q = q.right
        }
    }
    return true
};
// @lc code=end


```


## 101.对称二叉树
```js
/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let stackP = [], stackQ = [], p = root.left, q = root.right
    while (p || stackP.length || q || stackQ.length) {
        if (p || q) {
            if ((!p || !q) || p.val !== q.val) return false
            stackP.push(p)
            stackQ.push(q)
            p = p.left
            q = q.right
        } else {
            p = stackP.pop()
            q = stackQ.pop()
            if (p.val !== q.val) return false
            p = p.right
            q = q.left
        }
    }
    return true
};
// @lc code=end


```


## 104.二叉树的最大深度
```js
/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
// @lc code=end


```


## 108.将有序数组转换为二叉搜索树
```js
/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

};
// @lc code=end


```


## 110.平衡二叉树
```js
/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {

};
// @lc code=end


```


## 118.杨辉三角
```js
/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = [[1]]
    for (let i = 1; i < numRows; i++) {
        let item = [1]
        for (let j = 1; j < res[i - 1].length; j++) {
            item.push(res[i - 1][j] + res[i - 1][j - 1])
        }
        item.push(1)
        res.push(item)
    }
    return res
};
// @lc code=end


```


## 119.杨辉三角-ii
```js
/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let res = [[1]]
    for (let i = 1; i < rowIndex + 1; i++) {
        let item = [1]
        for (let j = 1; j < res[i - 1].length; j++) {
            item.push(res[i - 1][j] + res[i - 1][j - 1])
        }
        item.push(1)
        res.push(item)
    }
    return res.pop()
};
// @lc code=end


```


## 121.买卖股票的最佳时机
```js
/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = Number.MAX_SAFE_INTEGER, max = 0
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        max = Math.max(max, prices[i] - min)
    }
    return max
};
// @lc code=end


```


## 125.验证回文串
```js
/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.trim() === "") return true
    s = (s.match(/[0-9a-z]/ig) || []).map(i => i.toLocaleLowerCase())
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - i - 1]) return false
    }
    return true
};
// @lc code=end


```


## 136.只出现一次的数字
```js
/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    for (let j = 1; j < nums.length;) {
        if (nums[0] === nums[j]) {
            nums.splice(j, 1)
            nums.shift()
            j = 1
        } else {
            j++
        }
    }
    return nums[0]
};
// @lc code=end


```


## 144.二叉树的前序遍历
```js
/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
    let res = [], stack = []
    while (root || stack.length > 0) {
        if (root) {
            res.push(root.val)
            stack.push(root)
            root = root.left
        } else {
            root = stack.pop()
            root = root.right
        }
    }
    return res
};
// @lc code=end


```


## 145.二叉树的后序遍历
```js
/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
    if (!root) return []
    let res = [], stack = [root]
    while (stack.length > 0) {
        root = stack.shift()
        res.unshift(root.val)
        if (root.left) stack.unshift(root.left)
        if (root.right) stack.unshift(root.right)
    }
    return res
};
// @lc code=end


```


## 155.最小栈
```js
/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push({
        val,
        min: this.stack.length === 0 ? val : Math.min(val, this.getMin())
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1].val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack[this.stack.length - 1].min
}
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end


```


## 160.相交链表
```js
/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let a = headA, b = headB
    while (a !== b) {
        a = !a ? headB : a.next
        b = !b ? headA : b.next
    }
    return a
};
// @lc code=end


```


## 167.两数之和-ii-输入有序数组
```js
/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let m = 0, n = numbers.length - 1
    while (true) {
        if (numbers[m] + numbers[n] > target) {
            n--
        } else if (numbers[m] + numbers[n] < target) {
            m++
        } else {
            return [m + 1, n + 1]
        }
    }
};
// @lc code=end


```


## 168.excel表列名称
```js
/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    const map = new Map([[0, "Z"], [1, "A"], [2, "B"], [3, "C"], [4, "D"], [5, "E"], [6, "F"], [7, "G"], [8, "H"], [9, "I"], [10, "J"], [11, "K"], [12, "L"], [13, "M"], [14, "N"], [15, "O"], [16, "P"], [17, "Q"], [18, "R"], [19, "S"], [20, "T"], [21, "U"], [22, "V"], [23, "W"], [24, "X"], [25, "Y"], [26, "Z"]])
    let res = []
    while (columnNumber > 26) {
        res.unshift(map.get(columnNumber % 26))
        columnNumber = Math.ceil(columnNumber / 26 - 1)
    }
    res.unshift(map.get(columnNumber))
    return res.join("")
};
// @lc code=end


```


## 169.多数元素
```js
/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort((a, b) => a - b)
    return nums.length % 2 === 0 ? nums[nums.length / 2] : nums[(nums.length - 1) / 2]
};
// @lc code=end


```


## 171.excel-表列序号
```js
/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    const map = new Map([["A", 1], ["B", 2], ["C", 3], ["D", 4], ["E", 5], ["F", 6], ["G", 7], ["H", 8], ["I", 9], ["J", 10], ["K", 11], ["L", 12], ["M", 13], ["N", 14], ["O", 15], ["P", 16], ["Q", 17], ["R", 18], ["S", 19], ["T", 20], ["U", 21], ["V", 22], ["W", 23], ["X", 24], ["Y", 25], ["Z", 26]])
    let res = 0
    for (let i = 0; i < columnTitle.length; i++) {
        res += map.get(columnTitle[columnTitle.length - 1 - i]) * (26 ** i)
    }
    return res
};
// @lc code=end


```


## 172.阶乘后的零
```js
/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let numZeroes = 0;
    for (let i = 5; i <= n; i *= 5) {
        numZeroes += Math.floor(n / i);
    }
    return numZeroes;
};
// @lc code=end


```


## 191.位-1-的个数
```js
/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = 0
    n = n.toString(2)
    for (let index = 0; index < n.length; index++) {
        if(n[index]==="1") res ++
    }
    return res
};
// @lc code=end


```


## 202.快乐数
```js
/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    while (true) {
        n = n.toString()
        let count = 0
        for (let index = 0; index < n.length; index++) {
            count += Number(n[index]) ** 2
        }
        if (count === 1 || count === 130 || count === 129 || count === 133 || count == 190 || count === 167) return true
        if (count > 100) return false
        n = count
    }
};
// @lc code=end


```


## 203.移除链表元素
```js
/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    while (head) {
        if (head.val === val) {
            head = head.next
        } else {
            break
        }
    }
    let curr = head
    while (curr && curr.next) {
        if (curr.next.val === val) curr.next = curr.next.next;
        else curr = curr.next;
    }
    return head
};
// @lc code=end


```


## 204.计数质数
```js
/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

 var countPrimes = function(n) {
    let seen = new Uint8Array(n), ans = 0
    for (let num = 2; num < n; num++) {
        if (seen[num]) continue
        ans++
        for (let mult = num * num; mult < n; mult += num)
            seen[mult] = 1
    }
    return ans
};
// @lc code=end


```


## 205.同构字符串
```js
/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function (s, t) {
    const mapS = new Map(), mapT = new Map()
    for (let i = 0; i < s.length; i++) {
        if (!mapS.has(s[i]) && !mapT.has(t[i])) {
            mapS.set(s[i], t[i])
            mapT.set(t[i], s[i])
            continue
        }
        if (mapS.get(s[i]) !== t[i] || mapT.get(t[i]) !== s[i]) return false
    }
    return true
};
// @lc code=end
```


## 206.反转链表
```js
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

};
// @lc code=end


```


## 338.比特位计数
```js
/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  return new Array(n + 1).fill(0).map((item, index) => {
    const num = index.toString(2)
    let count = item
    for (let i = 0; i < num.length; i++) {
      if (num[i] === "1") count++
    }
    return count
  })
};
// @lc code=end


```


## 342.4-的幂
```js
/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n < 1) return false
  while (n !== 1) {
    if (n % 4 !== 0) return false
    n /= 4
  }
  return true
};
// @lc code=end


```


## 345.反转字符串中的元音字母
```js
/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */


// @lc code=end


```


## 350.两个数组的交集-ii
```js
/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const res = [];
  [nums1, nums2] = nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1];
  for (let i = 0; i < nums1.length; i++) {
    const index = nums2.indexOf(nums1[i])
    if (index > -1) {
      res.push(nums1[i])
      nums2.splice(index, 1)
    }
  }
  return res
};
// @lc code=end


```


## 367.有效的完全平方数
```js
/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let res = 1
  while (res * res <= num) {
    if (res * res === num) return true
    res++
  }
  return false
};
// @lc code=end


```


## 374.猜数字大小
```js
/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let s = 0, c
  while (true) {
    c = (s + n) / 2
    const g = guess(c)
    if (g === 0) {
      return c
    } else if (g === -1) {
      s = c
    } else {
      n = c
    }
  }
};
// @lc code=end


```


## 389.找不同
```js
/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  while (s.length > 0) {
    t = t.replace(s[0], "")
    s = s.replace(s[0], "")
  }
  return t[0]
};
// @lc code=end


```


## 392.判断子序列
```js
/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) return true
  let index = 0
  while (index < t.length) {
    if (t.substr(0, s.length) === s) return true
    if (s[index] === t[index]) {
      index++
      continue
    }
    t = t.replace(t[index], "")
  }
  return false
};
// @lc code=end


```


## 401.二进制手表
```js
/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
  
};
// @lc code=end


```


## 405.数字转换为十六进制数
```js
/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {

};
// @lc code=end


```


## 409.最长回文串
```js
/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  const set = new Set();
  let count = 0;
  for(let i=0; i<s.length; i++){
      if(set.has(s[i])){
          count +=2;
          set.delete(s[i])
      }else{
          set.add(s[i])
      }
  }
  return set.size>0 ? count+1 : count;
};
// @lc code=end


```


## 412.fizz-buzz
```js
/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    let num
    if (i % 3 === 0 && i % 5 === 0) {
      num = 'FizzBuzz';
    } else if (i % 3 === 0) {
      num = 'Fizz';
    } else if (i % 5 === 0) {
      num = "Buzz"
    } else {
      num = i.toString()
    }
    arr.push(num)
  }
  return arr
};
// @lc code=end


```


## 414.第三大的数
```js
/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const arr = [...new Set(nums)].sort((a, b) => b - a)
  return arr.length > 2 ? arr[2] : arr[0]
};
// @lc code=end


```


## 415.字符串相加
```js
/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const len = Math.max(num1.length, num2.length),
    len1 = num1.length,
    len2 = num2.length;
  let res = '',
    flag = 0;
  for (let i = 1; i <= len; i++) {
    let n =
      (Number(num1[len1 - i]) || 0) + (Number(num2[len2 - i]) || 0) + flag;
    if (n >= 10) {
      n -= 10;
      flag = 1;
    } else {
      flag = 0;
    }
    res = n + res;
  }
  return `${flag || ''}${res}`;
};
// @lc code=end


```


## 434.字符串中的单词数
```js
/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  return s.split(/\s+/).filter(Boolean).length
};
// @lc code=end


```


## 441.排列硬币
```js
/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let i = 1, res = 1
  while (true) {
    res += ++i
    if (res === n) return i
    else if (res > n) return i - 1
  }
};
// @lc code=end


```


## 448.找到所有数组中消失的数字
```js
/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const res = []
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) res.push(i)
  }
  return res
};
// @lc code=end


```


## 453.最小操作次数使数组元素相等
```js
/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小操作次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  if (nums.length === 1 || [... new Set(nums)].toString() === "0") return 0
  const count = nums.reduce((prev, next) => {
    return prev + next
  }, 0)
  return Math.abs(count - nums.length)
};
// @lc code=end


```


## 455.分发饼干
```js
/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g = g.sort()
  s = s.sort()
  let count = 0
  for (let i = 0; i < g.length; i++) {
    const index = s.indexOf(g[i])
    if (index > 0) {
      count++
      s.splice(index, 1)
    }
  }
  return count
};
// @lc code=end


```


## 459.重复的子字符串
```js
/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  return 1
};
// @lc code=end


```


## 485.最大连续-1-的个数
```js
/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  if ([...new Set(nums)].toString() === "0") return 0
  let max = 0, start = -1, end = -1
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === 1) {
      if (start < 0) start = i
      end = i
    } else {
      max = Math.max(max, end - start + 1)
      start = -1
      end = -1
    }
  }
  return max
};
// @lc code=end


```


## 495.提莫攻击
```js
/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  const set = new Set()
  for (let i = 0; i < timeSeries.length; i++) {
    for (let j = 0; j < duration; j++) {
      set.add(timeSeries[i] + j)
    }
  }
  return set.size
};
// @lc code=end


```


## 496.下一个更大元素-i
```js
/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const res = [], max = Math.max(...nums2)
  for (let i = 0; i < nums1.length; i++) {
    const index = nums2.indexOf(nums1[i])
    if (nums1[i] === max || index === nums2.length - 1) {
      res.push(-1)
      continue
    }
    for (let j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        res.push(nums2[j])
        break
      } else {
        if (j === nums2.length - 1) res.push(-1)
      }
    }
  }
  return res
};
// @lc code=end


```


## 500.键盘行
```js
/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const res = [], set1 = new Set(["Q", "q", "W", "w", "E", "e", "R", "r", "T", "t", "Y", "y", "U", "u", "I", "i", "O", "o", "P", "p"]), set2 = new Set(["A", "a", "S", "s", "D", "d", "F", "f", "G", "g", "H", "h", "J", "j", "K", "k", "L", "l"]), set3 = new Set(["Z", "z", "X", "x", "C", "c", "V", "v", "B", "b", "N", "n", "M", "m"])
  for (let i = 0; i < words.length; i++) {
    res.push(words[i])
    const set = set1.has(words[i][0]) ? set1 : set2.has(words[i][0]) ? set2 : set3
    for (let j = 1; j < words[i].length; j++) {
      if (!set.has(words[i][j])) {
        res.pop()
        break
      }
    }
  }
  return res
};
// @lc code=end


```


## 504.七进制数
```js
/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  const flag = num < 0
  num = Math.abs(num)
  
};
// @lc code=end


```


## 506.相对名次
```js
/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const map = new Map([[1, "Gold Medal"], [2, "Silver Medal"], [3, "Bronze Medal"]])
  const arr = score
    .map((value, index) => ({ value, index }))
    .sort((a, b) => b.value - a.value);
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res[arr[i].index] = map.get(i + 1) || (i + 1).toString()
  }
  return res;
};
// @lc code=end


```


## 507.完美数
```js
/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
 var checkPerfectNumber = function (num) {
  const arr = []
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) arr.push(i)
  }
  return num === arr.reduce((prev, next) => prev + next, 0)
};
// @lc code=end


```


## 520.检测大写字母
```js
/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.length === 1) return true
  const stage = word[0].charCodeAt(0) < 91 && word[1].charCodeAt(0) < 91 ? 1 : flag2 = word[0].charCodeAt(0) > 96 && word[1].charCodeAt(0) > 96 ? 2 : flag3 = word[0].charCodeAt(0) < 91 && word[1].charCodeAt(0) > 96 ? 3 : 0
  if (stage === 0) return false
  for (let i = 2; i < word.length; i++) {
    if (stage === 1) {
      if (word[i].charCodeAt(0) > 96) return false
    } else {
      if (word[i].charCodeAt(0) < 91) return false
    }
  }
  return true
};
// @lc code=end


```


## 521.最长特殊序列-ⅰ
```js
/*
 * @lc app=leetcode.cn id=521 lang=javascript
 *
 * [521] 最长特殊序列 Ⅰ
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
 var findLUSlength = function(a, b) {
  if (a === b) return -1;
  else return Math.max(a.length, b.length);
};
// @lc code=end


```


## 541.反转字符串-ii
```js
/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function (s, k) {
  s = s.split('');
  for (let i = 0; i < s.length; i += 2 * k) {
    const len = Math.min(s.slice(i).length, k);
    for (let j = 0; j < len / 2; j++) {
      [s[i + j], s[i + len - 1 - j]] = [s[i + len - 1 - j], s[i + j]];
    }
  }
  return s.join("")
};
// @lc code=end


```


## 551.学生出勤记录-i
```js
/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let countA = 0, countL = 0, prev
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") countA++
    if (s[i] === "L") {
      countL++
    } else {
      countL = 0
    }
    if (countA > 1 || countL > 2) return false
    prev = s[i]
  }
  return true
};
// @lc code=end


```


## 557.反转字符串中的单词-iii
```js
/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.split(" ").map(item => item.split("").reverse().join("")).join(" ")
};
// @lc code=end


```


## 561.数组拆分-i
```js
/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums = nums.sort((a, b) => a - b)
  let count = 0
  for (let i = 0; i < nums.length; i += 2) {
    count += nums[i]
  }
  return count
};
// @lc code=end


```


## 566.重塑矩阵
```js
/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  if (mat[0].length * mat.length !== r * c) return mat;
  const res = [];
  let item = [];
  mat = mat.flat();
  for (let i = 0; i < mat.length; i++) {
    if (item.length < c) item.push(mat[i]);
    if (item.length === c) {
      res.push(item);
      item = [];
    }
  }
  return res;
};
// @lc code=end


```


## 575.分糖果
```js
/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const len = candyType.length
  candyType = [...new Set(candyType)]
  return Math.min(len / 2, candyType.length)
};
// @lc code=end


```


## 594.最长和谐子序列
```js
/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  
};
// @lc code=end


```


## 598.范围求和-ii
```js
/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {

};
// @lc code=end


```


## 599.两个列表的最小索引总和
```js
/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const map = new Map()
  let min = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < list1.length; i++) {
    const index = list2.indexOf(list1[i]), item = map.get(i + index) || []
    if (index > -1) {
      item.push(list2[index])
      map.set(i + index, item)
      min = Math.min(min, i + index)
    }
  }
  return map.get(min)
};
// @lc code=end


```


## 605.种花问题
```js
/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  const len = flowerbed[1] === 1 || flowerbed[flowerbed.length - 2] === 1 ? flowerbed.length - 1 : flowerbed.length, all = len % 2 === 0 ? len / 2 : (len + 1) / 2, aready = flowerbed.reduce((prev, next) => prev + next, 0)
  return all - aready - n >= 0
};
// @lc code=end


```


## 627.变更性别
```js

```


## 628.三个数的最大乘积
```js
/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums = nums.sort((a, b) => a - b)
  const len = nums.length
  return Math.max(nums[len - 1] * nums[len - 2] * nums[len - 3], nums[len - 1] * nums[0] * nums[1])
};
// @lc code=end


```


## 643.子数组最大平均数-i
```js
/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let max = nums.slice(0, k).reduce((a, b) => a + b, 0) / k, curr = max
  for (let i = k; i < nums.length; i++) {
    curr += (nums[i] - nums[i - k]) / k
    max = Math.max(max, curr)
  }
  return max
};
// @lc code=end


```


## 645.错误的集合
```js
/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return [nums[i], i + 1]
  }
};
// @lc code=end


```


## 657.机器人能否返回原点
```js
/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  const map = new Map()
  for (let i = 0; i < moves.length; i++) {
    if (!map.has(moves[i])) map.set(moves[i], 0)
    else map.set(moves[i], map.get(moves[i]) + 1)
  }
  return map.get("U") === map.get("D") && map.get("L") === map.get("R")
};
// @lc code=end


```


## 661.图片平滑器
```js
/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {

};
// @lc code=end


```


## 674.最长连续递增序列
```js
/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let arr = [nums[0]], len = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= arr[arr.length - 1]) arr = [];
    arr.push(nums[i]);
    len = Math.max(len, arr.length);
  }
  return len;
};

// @lc code=end


```


## 680.验证回文字符串-ⅱ
```js
/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const str = s.split('');
  for (let i = 0; i < s.length / 2; i++) {
    let arr1 = str.slice(0), arr2 = str.slice(0);
    arr1.splice(i, 1);
    arr1 = arr1.reverse();
    arr2.splice(i, 1);
    const str1 = arr1.join(''), str2 = arr2.join('');
    if (str1 === str2) return true;
  }
  return false;
};
// @lc code=end


```


## 682.棒球比赛
```js
/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let res = 0, arr = [];
  for (let i = 0; i < ops.length; i++) {
    let item = 0;
    if (ops[i] === '+') item = arr[arr.length - 1] + arr[arr.length - 2];
    else if (ops[i] === 'D') item = arr[arr.length - 1] * 2;
    else if (ops[i] === 'C') {
      const del = arr.pop();
      res -= Number(del);
      continue
    } else item = Number(ops[i]);
    arr.push(item);
    res += item;
  }
  return res;
};
// @lc code=end


```


## 697.数组的度
```js
/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {

};
// @lc code=end


```


## 704.二分查找
```js
/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  if (nums[start] === target) return start;
  if (nums[end] === target) return end;
  while (start !== end) {
    const mid = start + Math.floor((end - start + 1) / 2);
    if (nums[mid] > target) end = mid - 1;
    else if (nums[mid] < target) start = mid;
    else return mid;
  }
  return -1;
};
// @lc code=end


```


## 705.设计哈希集合
```js
/*
 * @lc app=leetcode.cn id=705 lang=javascript
 *
 * [705] 设计哈希集合
 */

// @lc code=start

var MyHashSet = function () {
  this.set = {}
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  this.set[key] = true
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  delete this.set[key]
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.set[key] || false
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end


```


## 706.设计哈希映射
```js
/*
 * @lc app=leetcode.cn id=706 lang=javascript
 *
 * [706] 设计哈希映射
 */

// @lc code=start

var MyHashMap = function () {
  this.map = {}
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.map[key] = value
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  return this.map[key] || this.map[key] === 0 ? this.map[key] : -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  delete this.map[key]
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end


```


## 709.转换成小写字母
```js
/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let res = ""
  for (let i = 0; i < s.length; i++) {
    res += /[A-Z]/.test(s[i]) ? s[i].toLocaleLowerCase() : s[i]
  }
  return res
};
// @lc code=end


```


## 720.词典中最长的单词
```js
/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {

};
// @lc code=end


```


## 724.寻找数组的中心下标
```js
/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let left = 0, right = nums.reduce((a, b) => a + b, -nums[0])
  if (left === right) return 0
  for (let i = 1; i < nums.length; i++) {
    left += nums[i - 1]
    right -= nums[i]
    if (left === right) return i
  }
  return -1
};
// @lc code=end


```


## 728.自除数
```js
/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const arr = []
  for (let i = left; i <= right; i++) {
    const str = i.toString()
    let flag = true
    for (let j = 0; j < str.length; j++) {
      const item = Number(str[j])
      if (item === 0 || i % item !== 0) flag = false
    }
    if (flag) arr.push(i)
  }
  return arr
};
// @lc code=end


```


## 733.图像渲染
```js
/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {

};
// @lc code=end


```


## 744.寻找比目标字母大的最小字母
```js
/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  target = target.charCodeAt()
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].charCodeAt() > target) return letters[i]
  }
  return letters[0]
};
// @lc code=end


```


## 746.使用最小花费爬楼梯
```js
/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  for (let i = cost.length - 3; i !== -1; i--)
    cost[i] += Math.min(cost[i + 1], cost[i + 2])
  return Math.min(cost[0], cost[1])
};
// @lc code=end


```


## 747.至少是其他数字两倍的最大数
```js
/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  if (nums.length === 1) return 0
  const arr = nums.slice(0).sort((a, b) => b - a)
  if (arr[0] >= arr[1] * 2) return nums.indexOf(arr[0])
  return -1
};
// @lc code=end


```


## 748.最短补全词
```js
/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  let res = '';
  const license = licensePlate.match(/[A-z]/g).map(item => item.toLocaleLowerCase())
  for (let i = 0; i < words.length; i++) {
    if (res && res.length <= words[i].length) continue;
    const arr = license.slice(0);
    const arr1 = words[i].toLocaleLowerCase().split('');
    for (let j = 0; j < arr1.length; j++) {
      const index = arr.indexOf(arr1[j])
      if (index > -1) arr.splice(index, 1)
      if (arr.length === 0) {
        res = words[i];
        break
      }
    }
  }
  return res;
};
// @lc code=end


```


## 762.二进制表示中质数个计算置位
```js
/*
 * @lc app=leetcode.cn id=762 lang=javascript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  const map = new Map();
  let res = 0;
  for (let i = left; i <= right; i++) {
    if (isPrime(i.toString(2).match(/1/g).length, map)) res++;
  }
  return res;
};

/**
 * @param {number} num
 * @param {Map<string,boolean>} map
 * @return {boolean}
 */
var isPrime = function (num, map) {
  if (num === 1) return false;
  if (map.has(num)) return map.get(num);
  map.set(num, true);
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      map.set(num, false);
      break;
    }
  }
  return map.get(num);
};
// @lc code=end

```


## 766.托普利茨矩阵
```js
/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 托普利茨矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {

};
// @lc code=end


```


## 771.宝石与石头
```js
/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let res = 0
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) res++
  }
  return res
};
// @lc code=end


```


## 796.旋转字符串
```js
/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s === goal) return true
  for (let i = 1; i < s.length; i++) {
    if (s.slice(i) + s.slice(0, i) === goal) return true
  }
  return false
};
// @lc code=end


```


## 804.唯一摩尔斯密码词
```js
/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const set = new Set(), arr = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
  for (let i = 0; i < words.length; i++) {
    let item = ""
    for (let j = 0; j < words[i].length; j++) {
      item += arr[words[i][j].charCodeAt() - 97]
    }
    set.add(item)
  }
  return set.size
};
// @lc code=end


```


## 806.写字符串需要的行数
```js
/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let res = [1, 0]
  for (let i = 0; i < s.length; i++) {
    const item = widths[s[i].charCodeAt() - 97]
    if (res[1] + item <= 100) {
      res[1] += item
      continue
    }
    res[0]++
    res[1] = item
  }
  return res
};
// @lc code=end


```


## 812.最大三角形面积
```js
/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  let l = 0, w = 0
  for (let i = 1; i < points.length; i++) {
    l = Math.max(l, points[i][0] > points[i - 1][0] ? points[i][0] - points[i - 1][0] : points[i - 1][0] - points[i][0])
    w = Math.max(w, points[i][1] > points[i - 1][1] ? points[i][1] - points[i - 1][1] : points[i - 1][1] - points[i][1])
  }
  return (l * w) / 2
};
// @lc code=end


```


## 819.最常见的单词
```js
/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  paragraph = paragraph.toLocaleLowerCase().replace(/[^a-z|\s|\,]/g, "").split(/\s|\,/)
  let res = "", count = 0, map = new Map()
  for (let i = 0; i < paragraph.length; i++) {
    if (!paragraph[i]) continue
    if (!banned.includes(paragraph[i])) {
      map.set(paragraph[i], map.has(paragraph[i]) ? map.get(paragraph[i]) + 1 : 1)
      const num = map.get(paragraph[i])
      if (num > count) {
        res = paragraph[i]
        count = num
      }
    }
  }
  return res
};
// @lc code=end


```


## 824.山羊拉丁文
```js
/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const set = new Set(["a", "A", "E", "e", "I", "i", "O", "o", "U", "u"])
  sentence = sentence.split(" ")
  for (let i = 0; i < sentence.length; i++) {
    if (!set.has(sentence[i][0])) sentence[i] = sentence[i].slice(1) + sentence[i].slice(0, 1)
    sentence[i] += "ma" + "a".repeat(i + 1)
  }
  return sentence.join(" ")
};
// @lc code=end


```


## 830.较大分组的位置
```js
/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const res = []
  let curr = "", len = 1
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      curr = s[i]
      len++
      continue
    }
    if (!curr) continue
    if (len >= 3) res.push([i - len + 1, i])
    curr = ""
    len = 1
  }
  return res
};
// @lc code=end


```


## 832.翻转图像
```js
/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map(item => item.reverse().map(ele => ele === 1 ? 0 : 1))
};
// @lc code=end


```


## 836.矩形重叠
```js
/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (r1, r2) {
  return r2[0] >= r1[2] || r2[1] >= r1[3] || r2[2] <= r1[0] || r2[3] <= r1[1]
    ? false
    : true;
};
// @lc code=end


```


## 844.比较含退格的字符串
```js
/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const len = Math.max(s.length,t.length)
  let strS = "", strT = ""
  for (let i = 0; i < len; i++) {
    if (s[i] === "#") {
      strS = strS.slice(0, strS.length - 1)
    } else {
      strS += s[i] || ""
    }
    if (t[i] === "#") {
      strT = strT.slice(0, strT.length - 1)
    } else {
      strT += t[i] || ""
    }
  }
  return strS === strT
};
// @lc code=end


```


## 852.山脉数组的峰顶索引
```js
/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  return arr.indexOf(Math.max(...arr))
};
// @lc code=end


```


## 859.亲密字符串
```js
/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false
  if (s === goal) {
    if (s.length === 2 && s[0] !== s[1]) {
      return false
    }
    return true
  }
  let num = 0, currS = "", currG = ""
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      if (!currS && !currG) {
        currS = s[i];
        currG = goal[i]
      } else {
        if (currS !== goal[i] || currG !== s[i]) return false
      }
      num++
    }
    if (num > 2) return false
  }
  return true
};
// @lc code=end


```


## 860.柠檬水找零
```js
/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const map = new Map()
  for (let i = 0; i < bills.length; i++) {
    map.set(bills[i], map.has(bills[i]) ? map.get(bills[i]) + 1 : 1)
    const num5 = map.get(5) || 0, num10 = map.get(10) || 0
    if (bills[i] === 10) {
      if (num5 < 1) return false
      map.set(5, num5 - 1)
    } else if (bills[i] === 20) {
      if (num5 > 2) {
        map.set(5, num5 - 3)
        continue
      }
      if (num5 > 0 && num10 > 0) {
        map.set(5, num5 - 1)
        map.set(10, num10 - 1)
        continue
      }
      return false
    }
  }
  return true
};
// @lc code=end


```


## 884.两句话中的不常见单词
```js
/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  s1 = s1.split(" ")
  s2 = s2.split(" ")
  const len = Math.max(s1.length,s2.length),res = []
  for (let i = 0; i < len; i++) {
    if(s1[i] && s1.indexOf(s1[i])===s1.lastIndexOf(s1[i])&&!s2.includes(s1[i])) res.push(s1[i])
    if(s2[i] && s2.indexOf(s2[i])===s2.lastIndexOf(s2[i])&&!s1.includes(s2[i])) res.push(s2[i])
  }
  return res
};
// @lc code=end


```


## 888.公平的糖果棒交换
```js
/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果棒交换
 */

// @lc code=start
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  const a = aliceSizes.reduce((a, b) => a + b, 0), b = bobSizes.reduce((a, b) => a + b, 0), diff = (a - b) >> 1, set = new Set(aliceSizes)
  for (let i = 0; i < bobSizes.length; i++) {
    if(set.has(bobSizes[i]+diff))  return [bobSizes[i]+diff,bobSizes[i]]  
  }
};
// @lc code=end


```


## 896.单调数列
```js
/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let state = 0
  for (let i = 0; i < nums.length; i++) {
    if (!state || state === 2) {
      state = nums[i + 1] > nums[i] ? 1 : nums[i + 1] === nums[i] ? 2 : 3
      continue
    }
    if ((state === 1 && (nums[i + 1] < nums[i])) || (state === 3 && (nums[i + 1] > nums[i]))) return false
  }
  return true
};
// @lc code=end


```


## 905.按奇偶排序数组
```js
/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const res = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) res.unshift(nums[i])
    else res.push(nums[i])
  }
  return res
};
// @lc code=end


```


## 908.最小差值-i
```js
/*
 * @lc app=leetcode.cn id=908 lang=javascript
 *
 * [908] 最小差值 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
  const min = Math.min(...nums), max = Math.max(...nums), res = max - min - (2 * k)
  return res > 0 ? res : 0
};
// @lc code=end


```


## 914.卡牌分组
```js
/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  const map = new Map()
  let max = 0
  for (let i = 0; i < deck.length; i++) {
    if (!map.has(deck[i])) map.set(deck[i], 1)
    else map.set(deck[i], map.get(deck[i]) + 1)
    max = Math.max(max, map.get(deck[i]))
  }

  for (let i = 2; i <= max; i++) {
    let flag = true
    for (const j of map.values()) {
      const item = j % i === 0
      flag &&= item
      if (!item) break
    }
    if (flag) return true
  }
  return false
};

// var checkNum = function (num, k) {
//   while (num > 1) {
//     if (num % k === 0) num /= k
//     else return false
//   }
//   return true
// }
// @lc code=end


```


## 917.仅仅反转字母
```js
/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  s = s.split("")
  let start = 0, end = s.length - 1
  while (start < end) {
    const flagStart = /[a-z]/i.test(s[start]),
      flagEnd = /[a-z]/i.test(s[end]);
    if (flagStart && flagEnd) {
      [s[start], s[end]] = [s[end], s[start]]
      start++
      end--
      continue
    }
    if (!flagStart) start++
    if (!flagEnd) end--
  }
  return s.join("")
};
// @lc code=end


```


## 922.按奇偶排序数组-ii
```js
/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const res = []
  while (nums.length > 0) {
    const item = nums.shift()
    if ((res.length % 2 === 0 && item % 2 === 0) || res.length % 2 === 1 && item % 2 === 1) {
      res.push(item)
    } else {
      nums.push(item)
    }
  }
  return res
};
// @lc code=end


```


## 925.长按键入
```js
/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let curr = 0
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === name[curr]) continue
    if (typed[i] === name[curr + 1]) {
      curr++
      continue
    }
    return false
  }
  return true
};
// @lc code=end


```


## 929.独特的电子邮件地址
```js
/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 独特的电子邮件地址
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  emails = emails.map(item=>{
    const arr = item.split("@")
    arr[0] = arr[0].split("+")[0].replace(/\./g,"")
    return arr.join("@")
  })
  return new Set(emails).size
};
// @lc code=end


```


## 933.最近的请求次数
```js
/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function () {
  this.set = new Set()
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  for (const i of this.set.keys()) {
    if (i + 3000 < t) this.set.delete(i)
    else break
  }
  this.set.add(t)
  return this.set.size
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end


```


## 937.重新排列日志文件
```js
/*
 * @lc app=leetcode.cn id=937 lang=javascript
 *
 * [937] 重新排列日志文件
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  let zimu = [], shuzi = []
  for (let i = 0; i < logs.length; i++) {
    const str = logs[i].slice(logs[i].indexOf(" ") + 1)
    if (/\d/.test(str[0])) {
      shuzi.push(logs[i])
      continue
    }
    zimu.push(logs[i])
  }
  zimu = zimu.sort((a, b) => {
    const a1 = a.slice(a.indexOf(" ") + 1), b1 = b.slice(b.indexOf(" ") + 1)
    const n = a1.localeCompare(b1)
    if (n === 0) return a.localeCompare(b)
    else return n
  })
  return [...zimu, ...shuzi]
};
// @lc code=end


```


## 941.有效的山脉数组
```js
/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false
  const max = Math.max(...arr)
  const index = arr.indexOf(max)
  if (index !== arr.lastIndexOf(max)) return false
  for (let i = 0; i < arr.length; i++) {
    if (i < index) {
      if (arr[i] >= arr[i + 1]) return false
    } else if ((i > index)) {
      if (arr[i] <= arr[i + 1]) return false
    }
  }
  return true
};
// @lc code=end


```


## 942.增减字符串匹配
```js
/*
 * @lc app=leetcode.cn id=942 lang=javascript
 *
 * [942] 增减字符串匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  const res = [], len = s.length, arr = []
  for (let i = 0; i <= len; i++) {
    arr.push(i)
  }
  for (let i = 0; i < len; i++) {
    let item
    if (s[i] === "I") {
      item = arr.shift()
    } else {
      item = arr.pop()
    }
    res.push(item)
  }
  res.push(arr[0])
  return res
};
// @lc code=end


```


## 944.删列造序
```js
/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let res = 0
  for (let j = 0; j < strs[0].length; j++) {
    for (let i = 0; i < strs.length - 1; i++) {
      if (strs[i][j] > strs[i + 1][j]) {
        res++
        break
      }
    }
  }
  return res
};
// @lc code=end


```


## 953.验证外星语词典
```js
/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {

};
// @lc code=end


```


## 961.在长度-2-n-的数组中找出重复-n-次的元素
```js
/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 在长度 2N 的数组中找出重复 N 次的元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const n = nums.length / 2, map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) map.set(nums[i], 1)
    else {
      const a = map.get(nums[i]) + 1
      if (a === n) return nums[i]
      map.set(nums[i], a)
    }
  }
};
// @lc code=end


```


## 976.三角形的最大周长
```js
/*
 * @lc app=leetcode.cn id=976 lang=javascript
 *
 * [976] 三角形的最大周长
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums = nums.sort((a, b) => b - a)
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] + nums[i - 1] > nums[i - 2]) {
      return nums[i] + nums[i - 1] + nums[i - 2]
    }
  }
  return 0
};
// @lc code=end


```


## 977.有序数组的平方
```js
/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = nums => nums.map(item => Math.pow(item, 2)).sort((a, b) => a - b)
// @lc code=end


```


## 989.数组形式的整数加法
```js
/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  num[num.length - 1] = num[num.length - 1] + k
  let flag = 0
  for (let j = 0; j < num.length; j++) {
    const i = num.length - 1 - j
    num[i] = num[i] + flag
    flag = 0
    if (num[i] > 9) {
      flag = parseInt(num[i] / 10)
      num[i] = num[i] % 10
      if (i === 0) {
        num.unshift(flag)
        flag = 0
      }
      continue
    }
    return num
  }
};

// @lc code=end

```


## 997.找到小镇的法官
```js
/*
 * @lc app=leetcode.cn id=997 lang=javascript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if (trust.length === 0) {
    if (n === 1) return 1
    else return -1
  }
  const map = new Map(), map2 = new Map(trust)
  let max = trust[0][1]
  for (let i = 0; i < trust.length; i++) {
    if (!map.has(trust[i][1])) {
      map.set(trust[i][1], [trust[i][0]])
    } else {
      map.get(trust[i][1]).push(trust[i][0])
    }
    if (map.get(trust[i][1]).length > map.get(max).length) max = trust[i][1]
  }
  if (map2.get(max)) return -1
  return map.get(max).length === n - 1 ? max : -1
};
// @lc code=end
```


## 999.可以被一步捕获的棋子数
```js
/*
 * @lc app=leetcode.cn id=999 lang=javascript
 *
 * [999] 可以被一步捕获的棋子数
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let map = new Map([["R", []], ["B", []], ["p", []]])
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] !== ".") map.get(board[i][j]).push([j, i])
    }
  }
  const params = [
    map.get("R")[0][0],
    map.get("R")[0][1],
    map.get("B"),
    map.get("p")
  ]
  return checkEast(...params) + checkNorth(...params) + checkSouth(...params) + checkWest(...params)
};

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} BList
 * @param {number[][]} pList
 * @return {number}
 */
var checkEast = function (x, y, BList, pList) {
  let step = 1
  while (x + step < 8) {
    const flagB = BList.some(item => {
      return (item[1] === y && item[0] === x + step)
    })
    if (flagB) return 0
    const flagp = pList.some(item => {
      return (item[1] === y && item[0] === x + step)
    })
    if (flagp) return 1
    step++
  }
  return 0
}

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} BList
 * @param {number[][]} pList
 * @return {number}
 */
var checkSouth = function (x, y, BList, pList) {
  let step = 1
  while (y + step < 8) {
    const flagB = BList.some(item => {
      return (item[1] === y + step && item[0] === x)
    })
    if (flagB) return 0
    const flagp = pList.some(item => {
      return (item[1] === y + step && item[0] === x)
    })
    if (flagp) return 1
    step++
  }
  return 0
}

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} BList
 * @param {number[][]} pList
 * @return {number}
 */
var checkWest = function (x, y, BList, pList) {
  let step = 1
  while (x - step >= 0) {
    const flagB = BList.some(item => {
      return (item[1] === y && item[0] === x - step)
    })
    if (flagB) return 0
    const flagp = pList.some(item => {
      return (item[1] === y && item[0] === x - step)
    })
    if (flagp) return 1
    step++
  }
  return 0
}

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} BList
 * @param {number[][]} pList
 * @return {number}
 */
var checkNorth = function (x, y, BList, pList) {
  let step = 1
  while (y - step >= 0) {
    const flagB = BList.some(item => {
      return (item[1] === y - step && item[0] === x)
    })
    if (flagB) return 0
    const flagp = pList.some(item => {
      return (item[1] === y - step && item[0] === x)
    })
    if (flagp) return 1
    step++
  }
  return 0
}
// @lc code=end

```


## 1002.查找共用字符
```js
/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找共用字符
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  words = words.map(item => item.split(""))
  if (words.length === 1) return words[0]
  const res = []
  for (let i = 0; i < words[0].length; i++) {
    res.push(words[0][i])
    for (let j = 1; j < words.length; j++) {
      const index = words[j].indexOf(words[0][i])
      if (index === -1) {
        res.pop()
        break
      } else {
        words[j].splice(index, 1)
      }
    }
  }
  return res
};
// @lc code=end
```


## 1005.k-次取反后最大化的数组和
```js

/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  while (k > 0) {
    const min = Math.min(...nums)
    const i = nums.indexOf(min)
    nums[i] = -nums[i]
    k--
  }
  return nums.reduce((a, b) => a + b, 0)
};
// @lc code=end


```


## 1013.将数组分成和相等的三个部分
```js
/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  const count = arr.reduce((a, b) => a + b, 0)
  const area = count / 3
  let res = 0, time = 0
  for (let i = 0; i < arr.length; i++) {
    res += arr[i]
    if (res === area) {
      res = 0
      time++
    }
  }
  return time >= 3
};
// @lc code=end
```


## 1021.删除最外层的括号
```js
/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let res = "", count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (count) res += s[i]
      count++
    } else {
      count--
      if (count) res += s[i]
    }
  }
  return res
};
// @lc code=end


```


## 1025.除数博弈
```js
/*
 * @lc app=leetcode.cn id=1025 lang=javascript
 *
 * [1025] 除数博弈
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n) {
  return n % 2 === 0
};
// @lc code=end


```


## 1030.距离顺序排列矩阵单元格
```js
/*
 * @lc app=leetcode.cn id=1030 lang=javascript
 *
 * [1030] 距离顺序排列矩阵单元格
 */

// @lc code=start
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  let res = []
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      res.push([i, j])
    }
  }
  return res.sort((a, b) => Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter) - Math.abs(b[0] - rCenter) - Math.abs(b[1] - cCenter))
};
// @lc code=end


```


## 1046.最后一块石头的重量
```js
/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones = stones.sort((a, b) => b - a)
    const y = stones.shift()
    const x = stones.shift()
    if (x !== y) stones.push(y - x)
  }
  return stones.length > 0 ? stones[0] : 0
};
// @lc code=end


```


## 1047.删除字符串中的所有相邻重复项
```js
/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const res = []
  for (let i = 0; i < s.length; i++) {
    if (res[res.length - 1] !== s[i]) {
      res.push(s[i])
    } else {
      res.pop()
    }
  }
  return res.join("")
};
// @lc code=end


```


## 1051.高度检查器
```js
/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let res = 0
  const arr = heights.slice(0).sort((a, b) => a - b)
  for (let i = 0; i < heights.length; i++) {
    if (arr[i] !== heights[i]) res++
  }
  return res
};
// @lc code=end


```


## 1071.字符串的最大公因子
```js
/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  for (let i = 0; i < str2.length; i++) {
    const str = str2.slice(0, str2.length - i)
    if (str1.split(str).findIndex(j => j !== "") === -1 && str2.split(str).findIndex(j => j !== "") === -1) return str
  }
  return ""
};
// @lc code=end


```


## 1078.bigram-分词
```js
/*
 * @lc app=leetcode.cn id=1078 lang=javascript
 *
 * [1078] Bigram 分词
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  const res = []
  text = text.split(" ")
  for (let i = 0; i < text.length; i++) {
    if (!text[i + 2]) break
    if (text[i] === first && text[i + 1] === second) res.push(text[i + 2])
  }
  return res
};
// @lc code=end


```


## 1089.复写零
```js
/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0)
      arr.pop()
      i++
    }
  }
};
// @lc code=end


```


## 1103.分糖果-ii
```js
/*
 * @lc app=leetcode.cn id=1103 lang=javascript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  let n = 1, i = 0
  const res = []
  res.length = num_people
  res.fill(0, 0, num_people)
  while (candies > 0) {
    if (candies <= n) {
      res[i] += candies
      break
    }
    res[i] += n
    candies -= n
    n++
    if (i === num_people - 1) {
      i = 0
    } else {
      i++
    }
  }
  return res
};
// @lc code=end


```


## 1108.ip-地址无效化
```js
/*
 * @lc app=leetcode.cn id=1108 lang=javascript
 *
 * [1108] IP 地址无效化
 */

// @lc code=start
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  return address.replace(/\./g,"[.]")
};
// @lc code=end


```


## 1122.数组的相对排序
```js
/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const res = []
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length;) {
      if (arr1[j] === arr2[i]) {
        res.push(arr1[j])
        arr1.splice(j, 1)
      } else {
        j++
      }
    }
  }
  arr1.sort((a, b) => a - b)
  return [...res, ...arr1]
};
// @lc code=end


```


## 1128.等价多米诺骨牌对的数量
```js

/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  let res = 0, map = new Map()
  for (let i = 0; i < dominoes.length; i++) {
    const s = dominoes[i][0] < dominoes[i][1] ? `${dominoes[i][0]}${dominoes[i][1]}` : `${dominoes[i][1]}${dominoes[i][0]}`
    if (!map.has(s)) {
      map.set(s, 0)
      continue
    }
    const c = map.get(s) + 1
    map.set(s, c)
    res += c
  }
  return res
};

// @lc code=end


```


## 1137.第-n-个泰波那契数
```js
/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const map = new Map([[0, 0], [1, 1], [2, 1]])
  for (let i = 3; i <= n; i++) {
    map.set(i, map.get(i - 3) + map.get(i - 2) + map.get(i - 1))
  }
  return map.get(n)
};
// @lc code=end


```


## 1154.一年中的第几天
```js
/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  date = date.split("-")
  return ((((((new Date(date).getTime() - new Date(`${date[0]}-01-01`).getTime()) / 1000) / 60) / 60) / 24) + 1)
};
// @lc code=end


```


## 1160.拼写单词
```js
/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let res = 0
  for (let i = 0; i < words.length; i++) {
    const c = chars.split("")
    for (let j = 0; j < words[i].length; j++) {
      const index = c.indexOf(words[i][j])
      if (index === -1) break
      if (j === words[i].length - 1) {
        res += words[i].length
        break
      }
      c.splice(index, 1)
    }
  }
  return res
};
// @lc code=end


```


## 1175.质数排列
```js
/*
 * @lc app=leetcode.cn id=1175 lang=javascript
 *
 * [1175] 质数排列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {

};
// @lc code=end


```


## 1184.公交站间的距离
```js
/*
 * @lc app=leetcode.cn id=1184 lang=javascript
 *
 * [1184] 公交站间的距离
 */

// @lc code=start
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  if (start === destination) return 0
  if (start > destination) [start, destination] = [destination, start];
  const total = distance.reduce((acc, cur) => acc + cur),route = distance.slice(start, destination).reduce((acc, cur) => acc + cur);
  return Math.min(route, total - route);
};
// @lc code=end


```


## 1185.一周中的第几天
```js
/*
 * @lc app=leetcode.cn id=1185 lang=javascript
 *
 * [1185] 一周中的第几天
 */

// @lc code=start
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
  const a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return a[new Date(`${year}-${month}-${day}`).getDay()]
};
// @lc code=end


```


## 1189.气球-的最大数量
```js
/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const map = new Map([['b', 0], ['a', 0], ['l', 0], ['o', 0], ['n', 0]])
  for (let i = 0; i < text.length; i++) {
    if (map.has(text[i])) map.set(text[i], map.get(text[i]) + 1)
  }
  let res = 0
  while (true) {
    if (map.get('b') >= 1 && map.get('a') >= 1 && map.get('l') >= 2 && map.get('o') >= 2 && map.get('n') >= 1) {
      res++
      map.set('b', map.get('b') - 1)
      map.set('a', map.get('a') - 1)
      map.set('l', map.get('l') - 2)
      map.set('o', map.get('o') - 2)
      map.set('n', map.get('n') - 1)
    } else {
      return res
    }
  }
};
// @lc code=end


```


## 1200.最小绝对差
```js
/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr = arr.sort((a, b) => a - b)
  let c = Number.MAX_VALUE, res = []
  for (let i = 1; i < arr.length; i++) {
    const v = arr[i] - arr[i - 1]
    if (v > c) continue
    else if (v < c) {
      res = []
      c = v
    }
    res.push([arr[i - 1], arr[i]])
  }
  return res
};
// @lc code=end


```


## 1207.独一无二的出现次数
```js
/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  arr = arr.sort((a, b) => a - b)
  const map = new Map()
  let curr = 0
  for (let i = 0; i < arr.length; i++) {
    curr++
    if (arr[i] === arr[i + 1]) continue
    if (map.has(curr)) return false
    map.set(curr, arr[i])
    curr = 0
  }
  return true
};
// @lc code=end


```


## 1217.玩筹码
```js
/*
 * @lc app=leetcode.cn id=1217 lang=javascript
 *
 * [1217] 玩筹码
 */

// @lc code=start
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {

};
// @lc code=end


```


## 1221.分割平衡字符串
```js
/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let res = 0, r = 0, l = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') r++
    else l++
    if (r === l) {
      res++
      r = 0
      l = 0
    }
  }
  return res
};
// @lc code=end


```


## 1232.缀点成线
```js
/*
 * @lc app=leetcode.cn id=1232 lang=javascript
 *
 * [1232] 缀点成线
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  for (let i = 2; i < coordinates.length; i++) {
    const x = (coordinates[i][0] - coordinates[0][0]) / (coordinates[i][1] - coordinates[0][1]), y = (coordinates[i][0] - coordinates[1][0]) / (coordinates[i][1] - coordinates[1][1])
    if (x !== y && !((x === Infinity || x === -Infinity) && (y === Infinity || y === -Infinity))) {
      return false
    }
  }
  return true
};
// @lc code=end


```


## 1252.奇数值单元格的数目
```js
/*
 * @lc app=leetcode.cn id=1252 lang=javascript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  const arr = [];
  let res = 0;
  for (let i = 0; i < indices.length; i++) {
    const [x, y] = indices[i]
    for (let j = 0; j < m; j++) {
      if (i === 0) arr.push([])
      for (let z = 0; z < n; z++) {
        if (i === 0) arr[j].push(0)
        if (x === j || y === z) {
          arr[j][z] += 1
        }
        if (x === j && y === z) {
          arr[j][z] += 1
        }
        if (i === indices.length - 1) {
          if (arr[j][z] % 2 !== 0) res++
        }
      }
    }
  }
  return res
};
// @lc code=end


```


## 1281.整数的各位积和之差
```js
/*
 * @lc app=leetcode.cn id=1281 lang=javascript
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  n = n.toString();
  let a = 1, b = 0;
  for (let i = 0; i < n.length; i++) {
    a *= Number(n[i])
    b += Number(n[i])
  }
  return a - b
};
// @lc code=end


```


## 1287.有序数组中出现次数超过-25-的元素
```js
/*
 * @lc app=leetcode.cn id=1287 lang=javascript
 *
 * [1287] 有序数组中出现次数超过25%的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  let res = 0, count = 1
  if (arr.length < 3) return arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++
      res = arr[i]
      if (count > arr.length / 4) return res
    } else {
      res = 0
      count = 1
    }
  }
  return res
};
// @lc code=end


```


## 1290.二进制链表转整数
```js
/*
 * @lc app=leetcode.cn id=1290 lang=javascript
 *
 * [1290] 二进制链表转整数
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let num = ''
  while (head) {
    num += head.val
    head = head.next
  }
  return parseInt(num, 2)
};
// @lc code=end


```


## 1295.统计位数为偶数的数字
```js
/*
 * @lc app=leetcode.cn id=1295 lang=javascript
 *
 * [1295] 统计位数为偶数的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) res++
  }
  return res
};
// @lc code=end


```


## 1299.将每个元素替换为右侧最大元素
```js
/*
 * @lc app=leetcode.cn id=1299 lang=javascript
 *
 * [1299] 将每个元素替换为右侧最大元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const res = []
  for (let i = 0; i < arr.length - 1; i++) {
    res.push(Math.max(...arr.slice(i + 1, arr.length)))
  }
  res.push(-1)
  return res
};
// @lc code=end


```


## 1304.和为零的n个唯一整数
```js
/*
 * @lc app=leetcode.cn id=1304 lang=javascript
 *
 * [1304] 和为零的N个唯一整数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  const res = []
  let count = 0
  for (let i = 1; i < n; i++) {
    res.push(i)
    count += i
  }
  res.push(-count)
  return res
};
// @lc code=end


```


## 1309.解码字母到整数映射
```js
/*
 * @lc app=leetcode.cn id=1309 lang=javascript
 *
 * [1309] 解码字母到整数映射
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === "#") {
      res += String.fromCharCode(Number(s[i] + s[i + 1]) + 96)
      i += 2
    } else {
      res += String.fromCharCode(Number(s[i]) + 96)
    }
  }
  return res
};
// @lc code=end


```


## 1313.解压缩编码列表
```js
/*
 * @lc app=leetcode.cn id=1313 lang=javascript
 *
 * [1313] 解压缩编码列表
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const res = []
  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 0; j < nums[i]; j++) {
      res.push(nums[i + 1])
    }
  }
  return res
};
// @lc code=end


```


## 1317.将整数转换为两个无零整数的和
```js
/*
 * @lc app=leetcode.cn id=1317 lang=javascript
 *
 * [1317] 将整数转换为两个无零整数的和
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  for (let i = 1; i < (n / 2) + 1; i++) {
    if (!i.toString().includes('0') && !(n - i).toString().includes('0')) return [i, n - i]
  }
};
// @lc code=end


```


## 1323.6-和-9-组成的最大数字
```js
/*
 * @lc app=leetcode.cn id=1323 lang=javascript
 *
 * [1323] 6 和 9 组成的最大数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  return Number(num.toString().replace('6','9'))
};
// @lc code=end


```


## 1331.数组序号转换
```js
/*
 * @lc app=leetcode.cn id=1331 lang=javascript
 *
 * [1331] 数组序号转换
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const a = [...new Set([...arr].sort((a, b) => a - b))], res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(a.indexOf(arr[i]) + 1)
  }
  return res
};
// @lc code=end


```


## 1332.删除回文子序列
```js
/*
 * @lc app=leetcode.cn id=1332 lang=javascript
 *
 * [1332] 删除回文子序列
 */

// @lc code=start
/**
//  * @param {string} s
//  * @return {number}
//  */
// const removePalindromeSub = (s) => {
//   let res = 0, i = 0
//   while (s.length > 0) {
//     const a = s.substring(0, s.length - i)
//     if (a.split('').reverse().join('')) {
//       res++
//       s = s.substring(s.length - i, s.length)
//       i = 0
//     } else {
//       i++
//     }
//   }
//   return res
// };

/**
 * @param {string} s
 * @return {number}
 */
const removePalindromeSub = s => s === s.split('').reverse().join('') ? 1 : 2

// @lc code=end


```


## 1337.矩阵中战斗力最弱的-k-行
```js
/*
 * @lc app=leetcode.cn id=1337 lang=javascript
 *
 * [1337] 矩阵中战斗力最弱的 K 行
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const arr = []
  for (let i = 0; i < mat.length; i++) {
    let c = 0
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        arr.push({ i, c })
        c = 0
        break
      } else {
        c++
        if (c === mat[i].length) {
          arr.push({ i, c })
          c = 0
        }
      }
    }
  }
  return arr.sort((a, b) => a.c - b.c).slice(0, k).map((item) => item.i)

};
// @lc code=end


```


## 1342.将数字变成-0-的操作次数
```js
/*
 * @lc app=leetcode.cn id=1342 lang=javascript
 *
 * [1342] 将数字变成 0 的操作次数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let res = 0
  while (num > 0) {
    if (num % 2 === 0) num = num / 2
    else num--
    res++
  }
  return res
};
// @lc code=end


```


## 1346.检查整数及其两倍数是否存在
```js
/*
 * @lc app=leetcode.cn id=1346 lang=javascript
 *
 * [1346] 检查整数及其两倍数是否存在
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
// var checkIfExist = function (arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] * 2 === arr[j] || arr[i] === arr[j] * 2) return true
//     }
//   }
//   return false
// };

var checkIfExist = function (arr) {
  const set = new Set()
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) return true
    else {
      set.add(arr[i] * 2)
      set.add(arr[i] / 2)
    }
  }
  return false
};
// @lc code=end


```


## 1351.统计有序矩阵中的负数
```js
/*
 * @lc app=leetcode.cn id=1351 lang=javascript
 *
 * [1351] 统计有序矩阵中的负数
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let res = 0
  for (let i = grid.length - 1; i >= 0; i--) {
    if (grid[i][grid[i].length - 1] > -1) break
    for (let j = grid[i].length - 1; j >= 0; j--) {
      if (grid[i][j] < 0) res++
      else continue
    }
  }
  return res
};
// @lc code=end


```


## 1356.根据数字二进制下-1-的数目排序
```js
/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = (arr) => arr.sort((a, b) => count(a) - count(b) || a - b);

const count = (num) => num.toString(2).split("").reduce((p, c) => {
  if (c === "1") p++
  return p
}, 0)

// @lc code=end


```


## 1360.日期之间隔几天
```js
/*
 * @lc app=leetcode.cn id=1360 lang=javascript
 *
 * [1360] 日期之间隔几天
 */

// @lc code=start
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = (date1, date2) => Math.abs((new Date(date1).getTime() - new Date(date2).getTime()) / 86400000)
// @lc code=end


```


## 1365.有多少小于当前数字的数字
```js
/*
 * @lc app=leetcode.cn id=1365 lang=javascript
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const res = []
  for (let i = 0; i < nums.length; i++) {
    let c = 0
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] > nums[j]) c++
      if (j === nums.length - 1) {
        res.push(c)
        c = 0
      }
    }
  }
  return res
};
// @lc code=end


```


## 1370.上升下降字符串
```js
/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  let res = '', flag = true
  const arr = []
  for (let i = 0; i < s.length; i++) {
    const j = s[i].charCodeAt() - 97
    arr[j] = arr[j] ? arr[j] + 1 : 1
  }
  while (res.length < s.length) {
    if (flag) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] && arr[i] > 0) {
          res += String.fromCharCode(i + 97)
          arr[i] -= 1
        }
      }
      flag = false
    } else {
      for (let i = arr.length - 1; i > -1; i--) {
        if (arr[i] && arr[i] > 0) {
          res += String.fromCharCode(i + 97)
          arr[i] -= 1
        }
      }
      flag = true
    }
  }
  return res
};
// @lc code=end


```


## 1374.生成每种字符都是奇数个的字符串
```js
/*
 * @lc app=leetcode.cn id=1374 lang=javascript
 *
 * [1374] 生成每种字符都是奇数个的字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  return n % 2 === 0 ? 'a'.repeat(n - 1) + 'b' : 'a'.repeat(n)
};
// @lc code=end


```


## 1380.矩阵中的幸运数
```js
/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const res = []
  for (let i = 0; i < matrix.length; i++) {
    const item = Math.min.apply(this, matrix[i]), index = matrix[i].indexOf(item);
    let max = item
    for (let j = 0; j < matrix.length; j++) {
      max = Math.max(max, matrix[j][index])
    }
    if (max === item) res.push(max)
  }
  return res
};
// @lc code=end


```


## 1385.两个数组间的距离值
```js
/*
 * @lc app=leetcode.cn id=1385 lang=javascript
 *
 * [1385] 两个数组间的距离值
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let res = 0
  for (let i = 0; i < arr1.length; i++) {
    res++
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        res--
        break
      }
    }
  }
  return res
};
// @lc code=end


```


## 1389.按既定顺序创建目标数组
```js
/*
 * @lc app=leetcode.cn id=1389 lang=javascript
 *
 * [1389] 按既定顺序创建目标数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  const res = []
  for (let i = 0; i < nums.length; i++) {
    res.splice(index[i], 0, nums[i])
  }
  return res
};
// @lc code=end


```


## 1394.找出数组中的幸运数
```js
/*
 * @lc app=leetcode.cn id=1394 lang=javascript
 *
 * [1394] 找出数组中的幸运数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const map = new Map()
  let res = -1
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], map.has(arr[i]) ? map.get(arr[i]) + 1 : 1)
  }
  for (const [k, v] of map) {
    if (k === v) res = Math.max(res, k)
  }
  return res
};
// @lc code=end


```


## 1399.统计最大组的数目
```js
/*
 * @lc app=leetcode.cn id=1399 lang=javascript
 *
 * [1399] 统计最大组的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  const map = new Map()
  let res = 0, max = 0
  for (let i = 1; i <= n; i++) {
    const a = i.toString().split("").reduce((p, v) => p + Number(v), 0)
    map.set(a, map.has(a) ? map.get(a) + 1 : 1)
    max = Math.max(max, map.get(a))
  }
  for (const v of map.values()) {
    if (v === max) res++
  }
  return res
};
// @lc code=end


```


## 1403.非递增顺序的最小子序列
```js
/*
 * @lc app=leetcode.cn id=1403 lang=javascript
 *
 * [1403] 非递增顺序的最小子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a)
  let count = nums.reduce((p, v) => p + v), s = 0
  const res = []
  for (let i = 0; i < nums.length; i++) {
    s += nums[i]
    count -= nums[i]
    res.push(nums[i])
    if (s > count) return res
  }
};
// @lc code=end


```

