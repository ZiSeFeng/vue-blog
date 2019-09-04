---
title: 和为sum的个数
date: 2019-09-03
---

## 题目
给定无序、不重复的数组data，取出 n 个数，使其相加和为sum

## 思路
基于上面字符串排列题目的变形，我们从array中取出n个数的全排列，在取的同时判断是否符合条件。

## 代码
```js
function getAllCombin(array, n, sum, temp) {
  if (temp.length === n) {
    if (temp.reduce((t, c) => t + c) === sum) {
      return temp;
    }
    return;
  }
  for (let i = 0; i < array.length; i++) {
    const current = array.shift();
    temp.push(current);
    const result = getAllCombin(array, n, sum, temp);
    if (result) {
      return result;
    }
    temp.pop();
    array.push(current);
  }
}
const arr = [1, 2, 3, 4, 5, 6];

console.log(getAllCombin(arr, 3, 10, []));
```
