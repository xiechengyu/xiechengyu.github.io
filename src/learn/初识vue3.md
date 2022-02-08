---
title: 初识vue3.0
date: 2021-03-19 00:12:52
tags: ["vue","vue3.0"]
prev: ../初识typescript
next: false
category: 学习
---

# 前言

最近看了兴起的vue3.0框架，有几点知识记录一二。

<!-- more -->

## 1、setup 函数的用法。

可以代替 Vue2 中的 date 和 methods 属性，直接把逻辑卸载 setup 里就可以

ref 函数的使用，它是一个神奇的函数，我们这节只是初次相遇，要在template中使用的变量，必须用ref包装一下。

return出去的数据和方法，在模板中才可以使用，这样可以精准的控制暴漏的变量和方法。



## 2、reactive。

它也是一个函数(方法)，只不过里边接受的参数是一个 Object(对象)



## 3、interface

用来作类型注解



## 4、toRefs

把 data 变成refData,这样就可以使用扩展运算符的方式了



## 5.vue3.0的生命周期包括：

setup() :开始创建组件之前，在beforeCreate和created之前执行。创建的是data和method

onBeforeMount() : 组件挂载到节点上之前执行的函数。

onMounted() : 组件挂载完成后执行的函数。

onBeforeUpdate(): 组件更新之前执行的函数。

onUpdated(): 组件更新完成之后执行的函数。

onBeforeUnmount(): 组件卸载之前执行的函数。

onUnmounted(): 组件卸载完成后执行的函数

onActivated(): 被包含在 keep-alive 中的组件，会多出两个生命周期钩子函数。被激活时执行。

onDeactivated(): 比如从 A 组件，切换到 B 组件，A 组件消失时执行。

onErrorCaptured(): 当捕获一个来自子孙组件的异常时激活钩子函数）。



## 6.vue3与vue2的生命周期对比

Vue2--------------vue3

beforeCreate  -> setup()

created       -> setup()

beforeMount   -> onBeforeMount

mounted       -> onMounted

beforeUpdate  -> onBeforeUpdate

updated       -> onUpdated

beforeDestroy -> onBeforeUnmount

destroyed     -> onUnmounted

activated     -> onActivated

deactivated   -> onDeactivated

errorCaptured -> onErrorCaptured



## 7.onRenderTracked和onRenderTriggered

用来调试



## 8.watch

按需引入



## 9.直接引用模块代替mixins引入



## 10.封装axios



## 11.teleport

把组件渲染到你任意想渲染的外部Dom上



## 12.，Suspense

提供两个template的位置，一个是没有请求回来时显示的内容，一个是全部请求完毕的内容。这样进行异步内容的渲染就会非常简单。返回一个promise对象



## 13.onErrorCaptured

捕获异常