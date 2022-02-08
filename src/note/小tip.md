---
title: 小tip
date: 2021-6-24 12:21:42
tags: ["js"]
category: 笔记
prev: false
next: ../css的@规则
comments: true
---

## 前言

一些小tip

<!-- more -->

```js
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;
```

输出是["", " is ", " years old"]` `"Lydia"` `21

如果使用带标签的模板文字，则第一个参数的值始终是字符串值的数组。 其余参数获取传递的表达式的值！



```js
const sum = eval('10*10+5');
```

输出105

eval评估以字符串形式传递的代码。 如果是表达式（如本例所示），它将对表达式求值。 表达式是10 * 10 +5。这将返回数字105。



continue是跳出本次循环，break是跳出整个循环，return是停止函数



```js
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

a[b]和a[c]都将变成a["[object Object]"]，所以是给同一属性[object Object]赋值



```js
const person = { name: 'Lydia' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));
```

输出Lydia is 21` `function

call改变了上下文环境，bind不改变相当于复制了这个方法



```js
function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());
```

输出number

调用sayHi()返回立即执行函数的值0，所以是number类型



以下值为假

- `undefined`
- `null`
- `NaN`
- `false`
- `''` (empty string)
- `0`
- `-0`
- `0n` (BigInt(0))



```js
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
```

1 undefined 2

赋值的x是catch块级作用域里的x，y是立即执行函数里的y



```js
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
```

```js
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

| 参数                                      | 描述                                                         |
| :---------------------------------------- | :----------------------------------------------------------- |
| *function(total,currentValue, index,arr)* | 必需。用于执行每个数组元素的函数。 函数参数:参数描述*total*必需。*初始值*, 或者计算结束后的返回值。*currentValue*必需。当前元素*currentIndex*可选。当前元素的索引*arr*可选。当前元素所属的数组对象。 |
| *initialValue*                            | 可选。传递给函数的初始值                                     |

输出[1, 2, 0, 1, 2, 3]

初始值为[1, 2]，第一个cur是[0,1]，concat之后是[1,2,0,1]，第二个cur是[2,3]，concat之后是[1,2,0,1,2,3]





Map对象

一组键值对的结构，具有极快的查找速度。

初始化`Map`需要一个二维数组，或者直接初始化一个空`Map`  new Map()或new Map([[],[]])

内置方法：set("a","b")设置对应的键值对，has("a")检查是否存在对应key，get("a")获取对应key的value值，delete("a")删除对应的key的键值对。

每一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值重新赋值。



Set对象

`Set`和`Map`类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在`Set`中，没有重复的key。

创建一个`Set`，需要提供一个`Array`作为输入，或者直接创建一个空`Set` new Set() 或 new Set([])

重复元素在`Set`中自动被过滤

内置方法有：add("a")增加对应key，可重复添加但只存在一个，delete("a")删除对应的key值，has("a")检查是否存在该key值，clear()清除所有项。



flat()扁平化数组

```js
//方法的传参是要扁平化几层
//使用 Infinity，可展开任意深度的嵌套数组
arr4.flat(Infinity);
```



稀疏数组 对于没有内容的数组项, array 上的操作会跳过这些未初始化的'坑'.如：["1", empty × 2]





子函数被外部使用父级环境将被保留



promise的链式操作：

每一个then都返回一个promise状态是fulfulied；当return一个promise时需等待改promise执行状态变为fulfulied或rejected

如果是 `thenable` 对象，会将对象包装成promise处理，这与其他promise处理方式一样的
