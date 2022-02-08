---
title: lazysizes的用法
date: 2019-6-11 9:48:17
tags: ["懒加载",'lazysizes']
category: 笔记
prev: ../css的@规则
next: ../箭头函数
comments: true
---

# lazysizes的使用

## 前言

最近在学习图片懒加载的时候知道了这个名教lazysizes的懒加载库，在此总结一些用法。
<!-- more -->

## 安装

```html
<script src="lazysizes.min.js" async=""></script>
<!-- 放在body结尾标签处 -->
```

## 在页面中使用

### 不需要响应式时

```html
<img data-src="img/1.jpg" class="lazyload" />
```

### 需要响应式时

```html
<img data-srcset="img/1.jpg 1x, img/2.jpg 2x" class="lazyload" />
<!--或者-->
<img
	data-sizes="auto"
    data-src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
	  data-srcset="
      img/1.jpg 300w,
	    img/2.jpg 600w,
	    img/3.jpg 900w"
  class="lazyload" />
```

### 使用picture标签时 

在这里要使用picture标签时在兼容ie9的时候需要引入一个js在head标签内

```html
<script src="picturefill.js"></script>
```

接着可以使用了

```html
  <script>
    window.lazySizesConfig = window.lazySizesConfig || {};
    window.lazySizesConfig.customMedia = {
      '--small': '(max-width: 480px)',
      '--medium': '(max-width: 900px)',
      '--large': '(max-width: 1400px)',
    };
  </script>
  <picture>
    <!--[if IE 9]><video style="display: none;><![endif]-->
    <source data-srcset="img/1.jpg" media="--small" />
    <source data-srcset="img/2.jpg" media="--medium" />
    <source data-srcset="img/3.jpg" media="--large" />
    <source data-srcset="img/4.jpg" />
    <!--[if IE 9]></video><![endif]-->
    <img data-src="img/3.jpg" class="lazyload" alt="image with artdirection" />
  </picture>
```

### 在需要有懒加载的不同状态时

```html
  <style>
    .no-js img.lazyload {
      display: none;
    }
  </style>

  <!-- noscript pattern -->
  <noscript>
    <img src="img/2.jpg" />
  </noscript>
  <img src="img/3.jpg" data-src="img/2.jpg" class="lazyload" />
  <script src="lazysizes.min.js"></script>
</body>

<!-- 或者还可以 -->
 <!-- 在距离底部500px时懒加载并设置一个过渡动画效果 三个类分别是图片未加载，图片加载中和图片已加载 -->
  <style>
    .lazyload {
      opacity: 0;
    }

    .lazyloading {
      opacity: 0.5;
      transition: opacity 300ms;
      background: #f7f7f7 no-repeat center;
    }

    .lazyloaded {
      opacity: 1;
      transition: opacity 300ms;
    }
  </style>
  <div class="teaser lazyload" data-expand="-500">
    <img data-src="img/1.jpg" class="lazyload" />
    <h1>Teaser Title</h1>
    <p>...</p>
  </div>


```

