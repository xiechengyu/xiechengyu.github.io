---
title: sass语法总结
date: 2018-11-17 15:04:17
tags: ["sass","css"]
category: 转载
prev: false
next: ../搭建起我的博客
comments: true
---

# 前言

文章相关内容转载自：[sass语法总结](https://www.jianshu.com/p/e139d449f5bb)

作者：xoyoz

來源：简书

<!-- more -->
## scss 和 sass语法的相互转换

```css
# Convert Sass to SCSS
$ sass-convert style.sass style.scss

# Convert SCSS to Sass
$ sass-convert style.scss style.sass
```

# 编译

## 命令行编译

```css
#单文件
sass --watch input.scss:output.css
#多文件
sass --watch app/sass:public/stylesheets

# --wacth 自动编译
```

## GUI 界面工具编译

[Koala](https://github.com/xiechengyu)

[Compass.app](https://link.jianshu.com/?t=http://compass.kkbox.com/)

[Scout](https://link.jianshu.com/?t=http://mhs.github.io/scout-app/)

[CodeKit](https://link.jianshu.com/?t=https://incident57.com/codekit/index.html)

[Prepros](https://link.jianshu.com/?t=https://prepros.io/)

## 自动化编译

Grunt 配置 Sass 编译的示例代码

```js
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'style/style.css' : 'sass/style.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
}
```

Gulp 配置 Sass 编译的示例代码

```js
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', ['sass','watch']);
```

## 编译错误

1.要用UTF-8
 2.文件路径及文件名不要用中文

## 输出方式

1.嵌套输出方式 nested

```css
$ sass --watch test.scss:test.css --style nested
```

编译出来的CSS风格

```css
 nav ul {
  margin: 0;
  padding: 0;
  list-style: none; }
nav li {
  display: inline-block; }
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none; }
```

2.展开输出方式 expanded（默认样式）

```css
$ sass --watch test.scss:test.css --style expanded
```

编译出来的CSS风格

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

3.紧凑输出方式 compact

```css
sass --watch test.scss:test.css --style compact
```

编译出来的CSS风格

```css
nav ul { margin: 0; padding: 0; list-style: none; }
nav li { display: inline-block; }
nav a { display: block; padding: 6px 12px; text-decoration: none; }
```

4.压缩输出方式 compressed

```css
sass --watch test.scss:test.css --style compressed
```

编译出来的CSS风格

```css
nav ul{margin:0;padding:0;list-style:none}nav li{display:inline-block}nav a{display:block;padding:6px 12px;text-decoration:none}
```

# 基础

## 变量

### 声明变量

sass离不开$

```css
$width : 300px;
```

### 普通变量 & 默认变量

```css
$fontSize: 12px;
body{
    font-size:$fontSize;
}
$baseLineHeight:1.5 !default;
body{
    line-height: $baseLineHeight; 
}
```

### 局部变量 & 全局变量（3.4+）

```css
//SCSS
$color: orange !default;//定义全局变量
.block {
  color: $color;//调用全局变量
}
em {
  $color: red;//定义局部变量（全局变量 $color 的影子）
  a {
    color: $color;//调用局部变量
  }
}
```

## 嵌套

### 选择器嵌套

```css
nav {
  a {
    color: red;

    header & {
      color:green;
    }
  }  
}
nav a {
  color:red;
}

header nav a {
  color:green;
}
```

其中`&`代表其所在位置的所有长辈元素

### 属性嵌套

主要用于padding ，margin，font等属性

```css
.box {
  border: {
   top: 1px solid red;
   bottom: 1px solid green;
  }
}
.box {
    border-top: 1px solid red;
    border-bottom: 1px solid green;
}
```

### 伪类嵌套

```css
.clearfix{
&:before,
&:after {
    content:"";
    display: table;
  }
}
clearfix:before, .clearfix:after {
  content: "";
  display: table;
}
```

## 混合宏

### 声明混合宏@mixin

1.不带参数的混合宏

```css
@mixin border-radius{
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
```

2.带参数的混合宏

```css
//一个参数时，可以指定默认值
@mixin border-radius($radius:5px){//此时的5px为默认参数，传入其他值时覆盖该值
    -webkit-border-radius: $radius;
    border-radius: $radius;
}
//传2个参数
@mixin center($width, $height){
...
}
//参数过多 ，一个特别的参数 （...）
@mixin box-shadow($shadows...){
  @if length($shadows) >= 1 {
    -webkit-box-shadow: $shadows;
    box-shadow: $shadows;
  } @else {
    $shadows: 0 0 2px rgba(#000,.25);
    -webkit-box-shadow: $shadow;
    box-shadow: $shadow;
  }
}
```

3.复杂的混合宏

```css
@maxin box-shadow($shadow..){
    @if length($shadow) >= 1{
        @include prefixer(box-shadow, $shadow);
    } @else {
        $shadow:0 0 4px rgba(0,0,0,.3);
        @include prefixer(box-shadow, $shadow);
    }
}
```

### 调用混合宏@include

```css
button{
    @include border-radius;
}
```

### 不足之处

会产生冗余的代码块，如：

```css
@mixin border-radius{
  -webkit-border-radius: 3px;
  border-radius: 3px;
}

.box {
  @include border-radius;
  margin-bottom: 5px;
}

.btn {
  @include border-radius;
}
```

编译生成的CSS为

```css
.box {
  -webkit-border-radius: 3px;
  border-radius: 3px;
  margin-bottom: 5px;
}

.btn {
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
```

而理想的CSS为

```css
.box, .btn{
    -webkit-border-radius: 3px;
    border-radius: 3px;
}
.box{
    margin-bottom: 5px;
}
```

## 占位符%placeholder

通过%placeholder声明的代码，如果不被@extend调用的话，不会产生任何代码

```css
%mt5 {
  margin-top: 5px;
}
%pt5{
  padding-top: 5px;
}

.btn {
  @extend %mt5;
  @extend %pt5;
}

.block {
  @extend %mt5;

  span {
    @extend %pt5;
  }
}
```

编译出来的CSS

```css
.btn, .block {
  margin-top: 5px;
}

.btn, .block span {
  padding-top: 5px;
}
```

## <a name="extend">拓展/继承@extend</a>

通过关键词 `@extend`来继承已经存在的样式块

```css
.btn {
  border: 1px solid #ccc;
  padding: 6px 10px;
  font-size: 14px;
}

.btn-primary {
  background-color: #f36;
  color: #fff;
  @extend .btn;
}

.btn-second {
  background-color: orange;
  color: #fff;
  @extend .btn;
}
```

生成的CSS

```css
.btn, .btn-primary, .btn-second {
  border: 1px solid #ccc;
  padding: 6px 10px;
  font-size: 14px;
}
//代码进行了合并

.btn-primary {
  background-color: #f36;
  color: #fff;
}

.btn-second {
  background-clor: orange;
  color: #fff;
}
```

## 中途小结

| -        | 混合宏   | 占位符       | 继承               |
| -------- | -------- | ------------ | ------------------ |
| 声明方式 | @mixin   | %placeholder | .class             |
| 调用方式 | @include | @extend      | @extend            |
| 特色     | 可以传参 | 合并代码     | 不调用，不产生代码 |

## 插值#{}

少废话，先看例子

```css
$properties: (margin, padding);
@mixin set-value($side, $value) {
    @each $prop in $properties {
        #{$prop}-#{$side}: $value;
    }
}
.login-box {
    @include set-value(top, 14px);
}
```

编译出的CSS

```css
.login-box {
    margin-top: 14px;
    padding-top: 14px;
}
```

不对的例子

```css
$margin-big: 40px;
$margin-medium: 20px;
$margin-small: 12px;
@mixin set-value($size) {
    margin-top: $margin-#{$size};
}
.login-box {
    @include set-value(big);
}
@mixin updated-status {
    margin-top: 20px;
    background: #F00;
}
$flag: "status";
.navigation {
    @include updated-#{$flag};
}
```

## 注释

| 注释类型  | 说明                              |
| --------- | --------------------------------- |
| `/*...*/` | 这样的注释可以在CSS文件中显示出来 |
| `//...`   | 这样的注释只在sass文件中可见      |

## 数据类型

### 数字

```css
1，10px
```

### 字符串

- 有引号字符串 (quoted strings)，如 "Lucida Grande" 、'[http://sass-lang.com'](https://link.jianshu.com?t=http://sass-lang.com')；
- 无引号字符串 (unquoted strings)，如 sans-serifbold。

> 在编译 CSS 文件时不会改变其类型。只有一种情况例外，使用 #{ }插值语句 (interpolation) 时，有引号字符串将被编译为无引号字符串，这样方便了在混合指令 (mixin) 中引用选择器名。

```css
@mixin firefox-message($selector) {
    body.firefox #{$selector}:before {
        content: "Hi, Firefox users!";
    }
}
@include firefox-message(".header");
```

编译出来的CSS为

```css
body.firefox .header:before {
    content: "Hi, Firefox users!";
}
```

**另外** 当 deprecated = property syntax 时 （暂时不理解是怎样的情况），所有的字符串都将被编译为无引号字符串，不论是否使用了引号。

### 颜色

blue、 #04a3f9、 rgba(255,0,0,0.5)；

### 布尔

true,false

### 空值

null；

### 值列表

用空格或者逗号分开，如，1.5em 1em 0 2em 、 Helvetica, Arial, sans-serif
 更多用法：

```
nth函数（nth function） 可以直接访问值列表中的某一项；
join函数（join function） 可以将多个值列表连结在一起；
append函数（append function） 可以在值列表中添加值；
@each规则（@each rule） 则能够给值列表中的每个项目添加样式。
```

## 运算

### 加、减、乘、除

- 加减注意单位一致，
- 乘除注意单位不能同时存在，
- 运算符和变量，数值中间用空格分开

### 变量计算

### 数字运算

### 颜色计算

每两位进行运算

### 字符运算

用 + 串联

> 如果有引号的字符串被添加了一个没有引号的字符串 （也就是，带引号的字符串在 + 符号左侧）， 结果会是一个有引号的字符串。 同样的，如果一个没有引号的字符串被添加了一个有引号的字符串 （没有引号的字符串在 + 符号左侧）， 结果将是一个没有引号的字符串。**以等号左边的为准**

```css
p:before {
  content: "Foo " + Bar;
  font-family: sans- + "serif";
}
```

编译结果

```css
p:before {
  content: "Foo Bar";
  font-family: sans-serif; 
}
```

# 进阶

## 控制命令

### @if @else @else if

```css
@mixin blockOrHidden($boolean:true) {
  @if $boolean {
      @debug "$boolean is #{$boolean}";
      display: block;
    }
  @else {
      @debug "$boolean is #{$boolean}";
      display: none;
    }
}

.block {
  @include blockOrHidden;
}

.hidden{
  @include blockOrHidden(false);
}
```

编译出来的CSS

```css
.block {
  display: block;
}

.hidden {
  display: none;
}
```

### @for

```css
//2种方式
@for $i from <start> through <end> //包括 end 这个值
@for $i from <start> to <end> //不包括 end 这个数

//$i 表示变量
//start 表示起始值
//end 表示结束值
```

看个例子

```css
$grid-prefix: span !default;
$grid-width: 60px !default;
$grid-gutter: 20px !default;

%grid {
  float: left;
  margin-left: $grid-gutter / 2;
  margin-right: $grid-gutter / 2;
}
@for $i from 1 through 12 {
  .#{$grid-prefix}#{$i}{
    width: $grid-width * $i + $grid-gutter * ($i - 1);
    @extend %grid;
  }
}
```

编译出来的CSS

```css
.span1, .span2, .span3, .span4, .span5, .span6, .span7, .span8, .span9, .span10, .span11, .span12 {
  float: left;
  margin-left: 10px;
  margin-right: 10px;
}

.span1 {
  width: 60px;
}
.
.
.
```

### @while

```css
$types: 4;
$type-width: 20px;

@while $types > 0 {
    .while-#{$types} {
        width: $type-width + $types;
    }
    $types: $types - 1;
}
```

编译出来的CSS

```css
.while-4 {
  width: 24px;
}

.while-3 {
  width: 23px;
}

.while-2 {
  width: 22px;
}

.while-1 {
  width: 21px;
}
```

### @each

```css
@each $var in <list>

//$var 就是一个变量名，
//<list> 是一个 SassScript 表达式，他将返回一个列表值。
```

举个例子

```css
$list: adam john wynn mason kuroir;//$list 就是一个列表

@mixin author-images {
    @each $author in $list {
        .photo-#{$author} {
            background: url("/images/avatars/#{$author}.png") no-repeat;
        }
    }
}

.author-bio {
    @include author-images;
}
```

编译出来的CSS

```css
.author-bio .photo-adam {
  background: url("/images/avatars/adam.png") no-repeat; }
.author-bio .photo-john {
  background: url("/images/avatars/john.png") no-repeat; }
.author-bio .photo-wynn {
  background: url("/images/avatars/wynn.png") no-repeat; }
.author-bio .photo-mason {
  background: url("/images/avatars/mason.png") no-repeat; }
.author-bio .photo-kuroir {
  background: url("/images/avatars/kuroir.png") no-repeat; }
```

## 字符串函数

###  **unquote($string)**：删除字符串中的引号

unquote() 函数主要是用来删除一个字符串中的引号，如果这个字符串没有带有引号，将返回原始的字符串。
 只能删除字符串最前和最后的引号（双引号或单引号），而无法删除字符串中间的引号

###  **quote($string)**：给字符串添加引号

使用 quote() 函数只能给字符串增加双引号，而且字符串中间有单引号或者空格时，需要用单引号或双引号括起，否则编译的时候将会报错。
 同时 quote() 碰到特殊符号，比如： !、?、> 等，除中折号 - 和 下划线_ 都需要使用双引号括起，否则编译器在进行编译的时候同样会报错

### **To-upper-case()**

### **To-lower-case()**

## 数字函数

| 函数名             | 描述                                   |
| ------------------ | -------------------------------------- |
| percentage($value) | 将一个不带单位的数转换成百分比值       |
| round($value)      | 将数值四舍五入，转换成一个最接近的整数 |
| ceil($value)       | 将大于自己的小数转换成下一位整数       |
| floor($value)      | 将一个数去除他的小数部分               |
| abs($value)        | 返回一个数的绝对值                     |
| min($numbers…)     | 找出几个数值之间的最小值               |
| max($numbers…)     | 找出几个数值之间的最大值               |
| random()           | 获取随机                               |

## 列表函数

| 函数名                             | 描述                               | 注意                                                         |
| ---------------------------------- | ---------------------------------- | ------------------------------------------------------------ |
| length($list)                      | 返回一个列表的长度值               | length() 函数中的列表参数之间使用空格隔开，不能使用逗号      |
| nth($list, $n)                     | 返回一个列表中指定的某个标签值     | $n 必须是大于 0 的整数                                       |
| join($list1, $list2, [$separator]) | 将两个列给连接在一起，变成一个列表 | 只能将两个列表连接成一个列表，合并多个时嵌套join()，join() 函数中 $separator 除了默认值 auto 之外，还有 comma 和 space 两个值 |
| append($list1, $val, [$separator]) | 将某个值放在列表的最后             | 可选参数同上                                                 |
| zip($lists…)                       | 将几个列表结合成一个多维的列表     | -                                                            |
| index($list, $value)               | 返回一个值在列表中的位置值         | 在 Sass 中，值是从1开始，没有则返回false                     |

## Introspection函数

| 函数名                           | 描述                             | 返回值                      |
| -------------------------------- | -------------------------------- | --------------------------- |
| type-of($value)                  | 返回一个值的类型                 | number，string，color，bool |
| unit($number)                    | 返回一个值的单位                 | 单位                        |
| unitless($number)                | 判断一个值是否带有带位           | true/false                  |
| comparable($number-1, $number-2) | 判断两个值是否可以做加、减和合并 | true/false                  |

## Miscellaneous函数

在这里把 Miscellaneous 函数称为三元条件函数，主要因为他和 JavaScript 中的三元判断非常的相似。他有两个值，当条件成立返回一种值，当条件不成立时返回另一种值：

```css
if($condition,$if-true,$if-false)
>> if(true,1px,2px)
1px
>> if(false,1px,2px)
2px
```

## Map函数

| 函数名                 | 描述                                                    | 返回值                                        |
| ---------------------- | ------------------------------------------------------- | --------------------------------------------- |
| map-get($map,$key)     | 根据给定的 key 值，返回 map 中相关的值                  | 如果不存在，返回null                          |
| map-merge($map1,$map2) | 将两个 map 合并成一个新的 map                           | 合并后的map，如果有相同的值，以**后面**的为主 |
| map-remove($map,$key)  | 从 map 中删除一个 key                                   | 返回一个新 map                                |
| map-keys($map)         | 返回 map 中所有的 key                                   | 返回 map 中所有的 key                         |
| map-values($map)       | 返回 map 中所有的 value                                 | 返回 map 中所有的 value                       |
| map-has-key($map,$key) | 根据给定的 key 值判断 map 是否有对应的 value 值         | 如果有返回 true，否则返回 false               |
| keywords($args)        | 返回一个函数的参数，这个参数可以动态的设置 key 和 value | -                                             |

## 颜色函数

### RGB颜色函数

| 函数                             | 描述                                 | 备注                                                |
| -------------------------------- | ------------------------------------ | --------------------------------------------------- |
| rgb($red,$green,$blue)           | 根据红、绿、蓝三个值创建一个颜色     | -                                                   |
| rgba($red,$green,$blue,$alpha)   | 根据红、绿、蓝和透明度值创建一个颜色 | -                                                   |
| red($color)                      | 从一个颜色中获取其中红色值           | -                                                   |
| green($color)                    | 从一个颜色中获取其中绿色值           | -                                                   |
| blue($color)                     | 从一个颜色中获取其中蓝色值           | -                                                   |
| mix($color-1,$color-2,[$weight]) | 把两种颜色混合在一起                 | $weight 为合并权重，默认50%，值为第一个颜色所占权重 |

### HSL函数

| 函数                                     | 描述                                                         |
| ---------------------------------------- | ------------------------------------------------------------ |
| hsl($hue,$saturation,$lightness)         | 通过色相（hue）、饱和度(saturation)和亮度（lightness）的值创建一个颜色 |
| hsla($hue,$saturation,$lightness,$alpha) | 通过色相（hue）、饱和度(saturation)、亮度（lightness）和透明（alpha）的值创建一个颜色 |
| hue($color)                              | 从一个颜色中获取色相（hue）值                                |
| saturation($color)                       | 从一个颜色中获取饱和度（saturation）值                       |
| lightness($color)                        | 从一个颜色中获取亮度（lightness）值                          |
| adjust-hue($color,$degrees)              | 通过改变一个颜色的色相值，创建一个新的颜色                   |
| lighten($color,$amount)                  | 通过改变颜色的亮度值，让颜色变亮，创建一个新的颜色           |
| darken($color,$amount)                   | 通过改变颜色的亮度值，让颜色变暗，创建一个新的颜色           |
| saturate($color,$amount)                 | 通过改变颜色的饱和度值，让颜色更饱和，从而创建一个新的颜色   |
| desaturate($color,$amount)               | 通过改变颜色的饱和度值，让颜色更少的饱和，从而创建出一个新的颜色 |
| grayscale($color)                        | 将一个颜色变成灰色，相当于desaturate($color,100%)            |
| complement($color)                       | 返回一个补充色，相当于adjust-hue($color,180deg)              |
| invert($color)                           | 反回一个反相色，红、绿、蓝色值倒过来，而透明度不变           |

### Opacity函数

| 函数                                                        | 描述               |
| ----------------------------------------------------------- | ------------------ |
| alpha($color) /opacity($color)                              | 获取颜色透明度值   |
| rgba($color, $alpha)                                        | 改变颜色的透明度值 |
| pacify($color, $amount) / fade-in($color, $amount)          | 使颜色更不透明     |
| transparentize($color, $amount) / fade-out($color, $amount) | 使颜色更加透明     |

## @规则/指令(directive)

### @import

> 默认情况是sass的@import，以下情况会用CSS的@import

- 如果文件的扩展名是 .css。
- 如果文件名以 http:// 开头。
- 如果文件名是 url()。
- 如果 @import 包含了任何媒体查询（media queries）

```css
@import "foo.scss";
@import "foo"
//都会引入foo.scss文件
@import "rounded-corners", "text-shadow";
//引入多个文件
//如果你有一个 SCSS 或 Sass 文件需要引入， 但是你又不希望它被编译为一个 CSS 文件， 这时，你就可以在文件名前面加一个下划线，就能避免被编译。你就可以像往常一样引入这个文件了，而且还可以省略掉文件名前面的下划线
在同一个目录不能同时存在带下划线和不带下划线的同名文件。 例如， _colors.scss 不能与 colors.scss 并存
```

**嵌套 @import**
 虽然大部分时间只需在顶层文件使用 @import 就行了， 但是，你还可以把他们包含在 CSS 规则 和 @media 规则中。

### @media

Sass 中的 @media 指令和 CSS 的使用规则一样的简单，但它有另外一个功能，可以嵌套在 CSS 规则中。有点类似 JS 的冒泡功能一样，如果在样式中使用 @media 指令，它将冒泡到外面。

```css
.sidebar {
  width: 300px;
  @media screen and (orientation: landscape) {
    width: 500px;
  }
}
```

编译出来的CSS

```css
.sidebar {
    width: 300px;
}
@media screen and (orientation: landscape) {
    .sidebar {
        width: 500px;
    }
}
```

**支持嵌套**

### [@extend](#extend)

### @at-root

@at-root 从字面上解释就是跳出根元素。当你选择器嵌套多层之后，想让某个选择器跳出，此时就可以使用 @at-root。

```css
.a {
  color: red;

  .b {
    color: orange;

    .c {
      color: yellow;

      @at-root .d {
        color: green;
      }
    }
  }
}
```

编译出来的CSS

```css
.a {
  color: red;
}

.a .b {
  color: orange;
}

.a .b .c {
  color: yellow;
}

.d {
  color: green;
}
```

### @debug

@debug 在 Sass 中是用来调试的，当你的在 Sass 的源码中使用了 @debug 指令之后，Sass 代码在编译出错时，在命令终端会输出你设置的提示 Bug:

```css
@debug 10em + 12em;
```

输出

```css
Line 1 DEBUG: 22em
```

### @warn

@warn 和 @debug 功能类似，用来帮助我们更好的调试 Sass。如：

```css
@mixin adjust-location($x, $y) {
  @if unitless($x) {
    @warn "Assuming #{$x} to be in pixels";
    $x: 1px * $x;
  }
  @if unitless($y) {
    @warn "Assuming #{$y} to be in pixels";
    $y: 1px * $y;
  }
  position: relative; left: $x; top: $y;
}
```

### @error

@error 和 @warn、@debug 功能是如出一辙。

```css
@mixin error($x){
  @if $x < 10 {
    width: $x * 10px;
  } @else if $x == 10 {
    width: $x;
  } @else {
    @error "你需要将#{$x}值设置在10以内的数";
  }

}

.test {
  @include error(15);
}
```

编译时

```javascript
你需要将15值设置在10以内的数 on line 7 at column 5
```

