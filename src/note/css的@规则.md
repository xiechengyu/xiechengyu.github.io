---
title: css的@规则
date: 2019-6-24 8:44:17
tags: ["css"]
category: 笔记
prev: ../小tip
next: ../lazysizes的用法
comments: true
---

## 前言

最近看了些关于css的进阶知识，发现有一些@规则很有作用，在此借助一些资料进行总结。

<!-- more -->

## @ 规则



### @charset

@charset 用于提示 CSS 文件使用的字符编码方式，它如果被使用，必须出现在最前面。这个规则只在给出语法解析阶段前使用，并不影响页面上的展示效果。

```CSS
@charset "utf-8";

```

### @import

@import 用于引入一个 CSS 文件，除了 @charset 规则不会被引入，@import 可以引入另一个文件的全部内容。

```CSS
@import "mystyle.css";
@import url("mystyle.css");
@import [ <url> | <string> ]
[ supports( [ <supports-condition> | <declaration> ] ) ]?
<media-query-list>? ;
```

通过代码，我们可以看出，import 还支持 supports 和 media query 形式。

### @media

media 能够对设备的类型进行一些判断，进行媒体查询。在 media 的区块内，是普通规则列表。

```CSS
@media print {
body { font-size: 10pt }
}
```

### @page

page 用于分页媒体访问网页时的表现设置，页面是一种特殊的盒模型结构，除了页面本身，还可以设置它周围的盒。

```CSS
@page {
size: 8.5in 11in;
margin: 10%;

@top-left {
content: "Hamlet";
}
@top-right {
content: "Page " counter(page);
}
}
```

### @ counter-style

counter-style 产生一种数据，用于定义列表项的表现。

```CSS
@counter-style triangle {
system: cyclic;
symbols: ‣;
suffix: " ";
}
```

### @ key-frames

keyframes 产生一种数据，用于定义动画关键帧。

```CSS
@keyframes diagonal-slide {

from {
left: 0;
top: 0;
}

to {
left: 100px;
top: 100px;
}

}
```

### @ fontface

fontface 用于定义一种字体，icon font 技术就是利用这个特性来实现的。

```
@font-face {
font-family: Gentium;
src: url(http://example.com/fonts/Gentium.woff);
}

p { font-family: Gentium, serif; }
```

### @ support

support 检查环境的特性，它与 media 比较类似。

### @ namespace

用于跟 XML 命名空间配合的一个规则，表示内部的 CSS 选择器全都带上特定命名空间。

### @ viewport

用于设置视口的一些特性，不过兼容性目前不是很好，多数时候被 html 的 meta 代替。