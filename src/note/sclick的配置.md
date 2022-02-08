---
title: slick的配置
date: 2019-5-29 9:35:17
tags: ["slick",'javascript']
category: 笔记
prev: ../箭头函数
next: ../swiper的配置
comments: true
---

# 前言

因为正在学习slick，但是其是外国网站并且api也比较繁多，所以在此总结。

<!-- more -->

# slick的settings属性

| 属性名           | 属性值     | 默认值                                                       | 说明                                                         |
| ---------------- | ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| accessibility    | boolean    | true                                                         | 启用Tab键和箭头键导航(键盘按键)                              |
| adaptiveHeight   | boolean    | false                                                        | 为单个滑动水平转盘启用自适应高度。                           |
| autopaly         | boolean    | false                                                        | 可以自动播放                                                 |
| autoplaySpeed    | number(ms) | 3000                                                         | 自动播放速度，以毫秒为单位                                   |
| arrows           | boolean    | true                                                         | 前进后退箭头                                                 |
| asNavFor         | string     | null                                                         | 将滑块设置为其他滑块的导航（类或ID名称）,适用于多个轮播图共用一个导航 |
| appendArrows     | string     | $(element)                                                   | 更改导航箭头所在的位置（Selector，htmlString，Array，Element，jQuery对象） |
| appendDots       | string     | $(element)                                                   | 更改导航点附加的位置（Selector，htmlString，Array，Element，jQuery对象） |
| prevArrow        | string     | <button type = "button" class="slick-prev">Previous</button> | 允许您选择节点或自定义“上一个”箭头的HTML。                   |
| nextArrow        | string     | <button type = "button" class="slick-next">Next</button>     | 允许您选择节点或自定义“下一个”箭头的HTML。                   |
| centerMode       | boolean    | false                                                        | 使用部分prev/next幻灯片启用居中视图。与奇数slidesToShow计数一起使用。 |
| centerPadding    | string     | '50px'                                                       | 中间模式下的边距(px或%)                                      |
| cssEase          | string     | 'ease'                                                       | CSS3动画速度效果                                             |
| customPaging     | function   | n/a                                                          | 自定义分页模板。有关使用示例，请参见源代码                   |
| dots             | boolean    | false                                                        | 显示点指标                                                   |
| dotsClass        | string     | 'slick-dots'                                                 | 用于幻灯片指示器dots容器的类                                 |
| draggable        | boolean    | true                                                         | 支持鼠标拖拽                                                 |
| fade             | booelan    | false                                                        | 使褪色                                                       |
| focusOnSelect    | boolean    | false                                                        | 启用选定元素的焦点(单击)                                     |
| easing           | string     | 'linear'                                                     | 为jQuery动画添加缓动。与缓动库或默认缓动方法一起使用         |
| edgeFriction     | integer    | 0.15                                                         | 非无限传送带边缘滑动时的阻力                                 |
| infinite         | boolean    | true                                                         | 无限循环滑动                                                 |
| initialSlide     | integer    | 0                                                            | 幻灯片开始                                                   |
| lazyLoad         | string     | ondemand                                                     | 设置延迟加载技术。接受“随需应变”或“渐进”（使用时只需把图片的src值换成data-lazy然后在slick配置中设置lazyLoad: 'ondemand',即可） |
| mobileFirst      | boolean    | false                                                        | 响应设置使用移动优先计算                                     |
| pauseOnFocus     | boolean    | true                                                         | 在对焦时暂停自动播放                                         |
| pauseOnHover     | boolean    | true                                                         | 在触摸时暂停自动播放                                         |
| pauseOnDotsHover | boolean    | false                                                        | 在一个导航点被触摸时暂停自动播放                             |
| respondTo        | string     | 'window'                                                     | 响应对象响应的宽度。可以是'window'， 'slider'或'min'(两者中较小的一个) |
| responsive       | object     | none                                                         | 包含断点和设置对象的对象(参见演示)。启用设置设置在给定的屏幕宽度。将设置设置为“unslick”，而不是在给定断点处禁用slick的对象。 |
| rows             | number     | 1                                                            | 将此值设置为1以上将初始化网格模式。使用slidesPerRow设置每行应该有多少张幻灯片。 |
| slide            | element    | ''                                                           | 要用作幻灯片的元素查询                                       |
| slidesPerRow     | number     | 1                                                            | 通过rows选项初始化网格模式，可以设置每个网格行中有多少幻灯片 |
| slidesToShow     | number     | 1                                                            | 每次显示几个                                                 |
| slidesToScroll   | number     | 1                                                            | 每次滚动几个                                                 |
| speed            | number(ms) | 300                                                          | 幻灯片/褪色动画速度                                          |
| swipe            | boolean    | true                                                         | 启动滑动                                                     |
| swipeToSlide     | boolean    | false                                                        | 允许用户直接拖动或滑动到幻灯片，而不管slidesToScroll         |
| touchMove        | boolean    | true                                                         | 通过触摸启用幻灯片移动                                       |
| touchThreshold   | number     | 5                                                            | 要推进幻灯片，用户必须滑动（1 / touchThreshold）*滑块宽度的长度 |
| useCSS           | boolean    | true                                                         | 启用/禁用CSS转换                                             |
| useTransform     | boolean    | true                                                         | 启用/禁用CSS变换                                             |
| variableWidth    | boolean    | false                                                        | 可变宽度幻灯片                                               |
| vertical         | boolean    | false                                                        | 垂直滑动模式                                                 |
| verticalSwiping  | boolean    | false                                                        | 垂直                                                         |
| rtl              | boolean    | false                                                        | 将滑块的方向更改为从右到左                                   |
| waitForAnimate   | boolean    | true                                                         | 在动画制作时忽略推进幻灯片的请求                             |
| zindex           | number     | 1000                                                         | 设置幻灯片的zIndex值，对IE9及更低版本有用                    |





# slick的events属性



| 事件名          | 事件传递参数                  | 说明                               |
| --------------- | ----------------------------- | ---------------------------------- |
| afterChange     | slick,currentSlicde           | 更换幻灯片后触发                   |
| beforeChange    | slick,currentSlicde,nextSlide | 更换幻灯片前触发                   |
| breakpoint      | event,slick,breakpoint        | 断点后触发                         |
| destroy         | event,slick                   | 滑块被销毁或未滑动时               |
| edge            | slick,direction               | 边缘在非无限模式下过度滚动时触发。 |
| init            | slick                         | 首次初始化后触发                   |
| relnit          | slick                         | 每次重新初始化后触发               |
| setPosition     | slick                         | 位置/大小改变后触发                |
| swipe           | slick,direction               | 滑动/拖动后触发                    |
| lazyLoaded      | event,slick,image,imageSourse | 图片懒加载后触发                   |
| lazyLoadedError | event,slick,image,imageSourse | 图像无法加载后触发                 |





# slick的methods属性



| 方法名            | 方法传递参数                                                 | 说明                                                         |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| slickCurrentSlide | none                                                         | 返回当前幻灯片索引                                           |
| slickGoTo         | number(slide数)，boolean(是否动画)                           | 按索引导航到幻灯片                                           |
| slickNext         | none                                                         | 导航到下一张幻灯片                                           |
| slickPrev         | none                                                         | 导航到上一张幻灯片                                           |
| slickPause        | none                                                         | 停止自动播放时                                               |
| slickPlay         | none                                                         | 开始自动播放时                                               |
| slickAdd          | html or DOM object, index, addBefore                         | 添加幻灯片。 如果提供了索引，则将在该索引处添加，或者在设置addBefore之前添加。 如果未提供索引，则在设置addBefore时添加到结尾或开头。 接受HTML字符串\|\| 对象 |
| slickRemove       | index,removeBefore                                           | 按索引删除幻灯片。 如果removeBefore设置为true，则删除前面的索引，如果未指定索引，则删除第一张幻灯片。 如果removeBefore设置为false，则删除索引后的幻灯片，如果未设置索引，则删除最后一张幻灯片。 |
| slickFilter       | Selector or Function                                         | 使用jQuery .filter（）过滤幻灯片                             |
| slickUnfilter     | index                                                        | 删除应用的过滤                                               |
| slickGetOption    | option(string)                                               | 获取单个选项值。                                             |
| slickSetOption    | option : string, value : depends on option, refresh : boolean | 实时设置单个值。 如果是UI更新，请将refresh设置为true。       |
| unslick           | none                                                         | 解除slick                                                    |
| getSlick          | none                                                         | 获取slick对象                                                |



# slick的例子

```html
<html lang="en">

<head>

    <meta charset="UTF-8">

​    <title>Title</title>

​    <link rel="stylesheet" type="text/css" href="slick-1.8.1/slick/slick.css"/>

​    <link rel="stylesheet" type="text/css" href="slick-1.8.1/slick/slick-theme.css"/>

    <style>

​        *,body,html{

​            margin: 0;

​            padding: 0;

​        }

​        .one{

​            margin: 50px auto;

​            width: 200px;

​            height: 600px;

​        }

​        .one .slick-slide{

​            width: 200px;

​            height: 200px;

​            background: aqua;

​            margin: 0 auto;

​            text-align: center;

​        }

​        .slick-arrow::before{

​            color: black !important;

​        }

​    </style>

</head>

<body>

    <div class="one">

        <div>1</div>

        <div>2</div>

        <div>3</div>

        <div>4</div>

​    </div>

​    <button type="button" class="slick-prev">Previous</button>

    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>

    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

    <script type="text/javascript" src="./slick-1.8.1/slick/slick.min.js"></script>

    <script>

​        const di = $('.slick-slide')

​        $(function () {

​            $('.one')

​                .slick({

​                arrows:true,

​                dots:true,

​                // centerMode:true,

​                centerPadding:'80px',

​                cssEase:'linear',

​                easing:'ease',

​                edgeFriction:0.9,

​                // initialSlide:2,

​                autoplay:true,

​                // pauseOnHover:false,

​                slidesToShow: 3,

​                swipeToSlide:true,

​                vertical:true,

​                verticalSwiping:true

​            })

​                .on('swipe', (slick,direction) => {

​                    console.log('11111 = ' +slick,'22222 = ' +direction);

​                })

​            console.log($('.one').slick('slickCurrentSlide'))

​        })

​    </script>

</body>

</html>
```


