---
title: swiper的配置
date: 2019-5-26 20:48:17
tags: ["swiper","javascript"]
category: 笔记
prev: ../sclick的配置
next: false
sticky: 9
comments: true
---

# swiper的配置选项（包括swiper4.x的全部配置选项，方法，函数）

之前一直有用到swiper去制作轮播图，但是api总是有些难记，就把他们都总结出来。

<!-- more -->
## basic(swiper一般选项)

| 属性名              | 属性值  | 默认值        | 说明                                                         |
| ------------------- | ------- | ------------- | ------------------------------------------------------------ |
| initialSlide        | number  | 0             | 设定初始化时slide的索引。                                    |
| diretion            | string  | ' horizontal' | Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。   |
| speed               | number  | 300           | 切换速度，即slider自动滑动开始到结束的时间（单位ms），也是触摸滑动时释放至贴合的时间。 |
| grabCursor          | boolean | false         | 设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同） |
| parallax            | boolean | false         | 设置为true开启视差效果。效果可以应用于container或slide的子元素。当应用于container的子元素（常用于视差背景图），每次切换时视差效果仅有设定值的slide个数-1分之1 1.视差位移变化在所需要的元素上增加data-swiper-parallax属性（与Swiper切换方向相同）或data-swiper-parallax-x （x方向） data-swiper-parallax-y（y方向） data-swiper-parallax接受两种类型的参数。          number（单位：px），如-300，从右边300px进入左边出去。          percentage（百分比），移动距离=该元素宽度 * percentage。 2.视差透明度变化在所需要的元素上增加data-swiper-parallax-opacity属性。可选值0-1，如0.5，从半透明进入半透明出去 3.视差缩放变化在所需要的元素上增加data-swiper-parallax-scale属性。可选值如0.5，从一半大小进入一半大小出去 还可通过data-swiper-parallax-duration设定视差动画持续时间（ms）。默认值是Swiper的speed，与切换时间同步。 *设定透明度或缩放必须同时设定位移，否则无效(4.0.5) <div data-swiper-parallax="0" data-swiper-parallax-opacity="0.5" >透明度变化</div> |
| setWrapperSize      | boolean | false         | Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。 |
| vitualTranslate     | boolean | false         | 虚拟的位移。当你启用这个参数，Slide不会移动，但是Swiper还是在运行，例如progress，active-slide，各种回调等。当你想自定义一些slide切换效果时可以用。例如配合上progress。启用这个选项时slideChange和transition等事件有效（与Swiper3.x不同）。 还可以用来使Swiper的滑动停止（锁定）。*可能会使鼠标滚动失效。 |
| width               | number  | undefined     | 强制Swiper的宽度(px)，当你的Swiper在隐藏状态下初始化时用得上。这个参数会使自适应失效。可设置为undefined使这个参数无效。 |
| height              | number  | undefined     | 强制Swiper的高度(px)，当你的Swiper在隐藏状态下初始化时且切换方向为垂直才用得上。这个参数会使自适应失效。 |
| roundLengths        | boolean | false         | 如果设置为true，则将slide的宽和高取整(四舍五入)，以防止某些分辨率的屏幕上文字或边界(border)模糊。例如当你设定slidesPerView : 3时，则可能出现slide的宽度为341.33px，开启roundLengths后宽度取整数341px。 |
| breakpoints         | object  | undefined     | 断点设定：根据屏幕宽度设置某参数为不同的值，类似于响应式布局的media only screen and (max-width: 480px)只有部分不需要变换布局方式和逻辑结构的参数支持断点设定，如slidesPerView、slidesPerGroup、 spaceBetween，而像slidesPerColumn、loop、direction、effect等则无效。 |
| breakpointsInverse  | boolean | false         | 开启后，breakpoints将以反方向计算，类似于media only screen and (min-width: 480px) |
| autoHeight          | boolean | false         | 自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。 |
| uniqueNavElements   | boolean | true          | 独立分页元素，当启用（默认）并且分页元素的传入值为字符串时，swiper会优先查找子元素匹配这些元素。可应用于分页器，按钮和滚动条（pagination, prev/next buttons and scrollbar elements）。当你的控制组件放在container外面的时候，需要用到。 |
| nested              | boolean | false         | 用于嵌套相同方向的swiper时，当切换到子swiper时停止父swiper的切换。请将子swiper的nested设置为true。由于需要在slideChangeEnd时判断作用块，因此快速滑动时这个选项无效。 |
| runCallbacksOnInit  | boolean | true          | 如果你的初始化slide不是第一个(例initialSlide:2)或者设置了loop: true，那么初始化时会触发一次 [Transition/SlideChange] [Start/End] 回调函数，如果不想触发，设置为false。 |
| watchOverflow       | boolean | false         | 当没有足够的slide切换时，例如只有1个slide，swiper会失效且隐藏导航等。默认不开启这个功能。loop模式无效，因为会复制slide。 |
| on                  | object  | undefined     | 注册事件，Swiper4.0开始使用关键词this指代Swiper实例。        |
| init                | boolean | true          | 当你创建一个Swiper实例时是否立即初始化。如果禁止了，可以稍后使用mySwiper.init()来初始化。 |
| preloadImages       | boolean | true          | 默认为true，Swiper会强制加载所有图片。                       |
| updateOnImagesReady | boolean | true          | 当所有的内嵌图像（img标签）加载完成后Swiper会重新初始化。使用此选项需要先开启preloadImages: true |



## slides grid(网格分布)



| 属性名                   | 属性值          | 默认值    | 说明                                                         |
| ------------------------ | --------------- | --------- | ------------------------------------------------------------ |
| centeredSlides           | boolean         | false     | 设定为true时，active slide会居中，而不是默认状态下的居左。   |
| slidesPerView            | numober or auto | 1         | 设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数[loopedSlides](https://www.swiper.com.cn/api/loop/loopedSlides.html)。slidesPerView: 'auto'目前还不支持多行模式（当slidesPerColumn > 1） |
| slidesPerGroup           | number          | 1         | 在carousel mode下定义slides的数量多少为一组                  |
| spaceBetween             | number          | 0         | 在slide之间设置距离（单位px）。                              |
| slidesPerColumn          | number          | 1         | 多行布局里面每列的slide数量。slidesPerColumn目前还不兼容loop模式（loop: true）。 |
| slidesPerColumnFill      | string          | ' column' | 多行布局中以什么形式填充                                     |
| sldiesOffetBefore        | number          | 0         | 设定slide与左边框的预设偏移量（单位px）。                    |
| sldiesOffetAfter         | number          | 0         | 设定slide与右边框的预设偏移量（单位px）。                    |
| nomalizeSlideIndex       | boolean         | true      | 使你的活动块指示为最左边的那个slide（没开启[centeredSlides](https://www.swiper.com.cn/api/Slides_grid/2014/1217/50.html)时） |
| centerInsufficientSlides | boolean         | false     | 开启这个参数，当slides的总数小于slidesPerView时，slides居中。不适用于loop模式和slidesPerColumn |

## free mode(free模式/抵抗反弹)



| 属性名                        | 属性值  | 默认值 | 说明                                                         |
| ----------------------------- | ------- | ------ | ------------------------------------------------------------ |
| freeMode                      | boolean | false  | 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合 |
| freeModeMomentum              | boolean | true   | free模式动量。free模式下，若设置为false则关闭动量，释放slide之后立即停止不会滑动。 |
| freeModeMomentumRatio         | number  | 1      | free模式动量值（移动惯量）。设置的值越大，当释放slide时的滑动时间越长。默认1s。 |
| freeModeMomentumVelocityRatio | number  | 1      | free模式惯性速度，设置越大，释放后滑得越快。                 |
| freeModeMomentumBounce        | boolean | true   | 动量反弹。false时禁用free模式下的动量反弹，slides通过惯性滑动到边缘时，无法反弹。注意与[resistance](https://www.swiper.com.cn/api/touch/resistance.html)（手动抵抗）区分。 |
| freeModeMomentumBounceRatio   | number  | 1      | 值越大产生的边界反弹效果越明显，反弹距离越大。               |
| freeModeSticky                | boolean | false  | 使得freeMode也能自动贴合。                                   |
| freeModeMinimumVelocity       | number  | 0.02   | 触发FreeMode惯性的最小触摸速度（px/ms），低于这个值不会惯性滑动 |

## loop(环路)



| 属性名                 | 属性值  | 默认值 | 说明                                                         |
| ---------------------- | ------- | ------ | ------------------------------------------------------------ |
| loop                   | boolean | false  | 设置为true 则开启loop模式。loop模式：会在原本slide前后复制若干个slide(默认一个)并在合适的时候切换，让Swiper看起来是循环的。 loop模式在与free模式同用时会产生抖动，因为free模式下没有复制slide的时间点。 |
| looAdditionalSlides    | number  | 0      | loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。默认为0，前后各复制1个。0,1,2 --> 2,0,1,2,0例：取值为1，0,1,2 --> 1,2,0,1,2,0,1例：取值为2或以上，0,1,2 --> 0,1,2,0,1,2,0,1,2 |
| loopSlides             | number  | 1      | 在loop模式下使用slidesPerview:'auto'，还需使用该参数设置所要用到的loop个数(一般设置大于可视slide个数2个即可)。 |
| loopFillGroupWithBlank | boolean | false  | 在loop模式下，为group填充空白slide                           |



preogress(进度)

| 属性名                | 属性值  | 默认值 | 说明                                                         |
| --------------------- | ------- | ------ | ------------------------------------------------------------ |
| watchSlidesProgress   | boolean | false  | 开启这个参数来计算每个slide的progress(进度、进程)，Swiper的progress无需设置即开启。 对于slide的progress属性，活动的那个为0，其他的依次减1。例：如果一共有6个slide，活动的是第三个，从第一个到第六个的progress属性分别是：2、1、0、-1、-2、-3。对于swiper的progress属性，活动的slide在最左（上）边时为0，活动的slide在最右（下）边时为1，其他情况平分。例：有6个slide，当活动的是第三个时swiper的progress属性是0.4，当活动的是第五个时swiper的progress属性是0.8。 swiper的progress其实就是wrapper的translate值的百分值，与activeIndex等属性不同，progress是随着swiper的切换而不停的变化，而不是在某个时间点突变。 |
| watchSlidesVisibility | boolean | false  | 开启watchSlidesVisibility选项前需要先开启watchSlidesProgress，如果开启了watchSlidesVisibility，则会在每个可见slide增加一个classname，默认为'swiper-slide-visible'。 |

## clicks(点击)

| 属性名                   | 属性值  | 默认值 | 说明                                                         |
| ------------------------ | ------- | ------ | ------------------------------------------------------------ |
| preventClicks            | boolean | true   | 当swiper在触摸时阻止默认事件（preventDefault），用于防止触摸时触发链接跳转。 |
| preventClicksPropagation | boolean | true   | 阻止click冒泡。拖动Swiper时阻止click事件                     |
| slideToClickedSlide      | boolean | false  | 设置为true则点击slide会过渡到这个slide                       |



## touches(触发条件)

| 属性名          | 属性值  | 默认值 | 说明                                                         |
| --------------- | ------- | ------ | ------------------------------------------------------------ |
| touchRatio      | number  | 1      | 触摸比例。触摸距离与slide滑动距离的比率。默认为1，按照1:1的触摸比例滑动。设置为0时，完全无法滑动 |
| simulateTouch   | boolean | true   | 鼠标模拟手机触摸。默认为true，Swiper接受鼠标点击、拖动。     |
| allowTouchMove  | boolean | true   | 允许触摸滑动。设为false时，slide无法滑动，只能使用扩展API函数例如[slideNext()](https://www.swiper.com.cn/api/methods/107.html)[ ](https://www.swiper.com.cn/api/methods/107.html)或[slidePrev()](https://www.swiper.com.cn/api/methods/108.html)或[slideTo()](https://www.swiper.com.cn/api/methods/109.html)等改变slides滑动。等同于Swiper3.x 的 onlyExternal。 有时在PC端制作图片切换会选择关闭。 |
| followFinger    | boolean | true   | 跟随手指。如设置为false，手指滑动时slide不会动，当你释放时slide才会切换。 |
| shortSwipes     | boolean | true   | 默认允许短切换。设置为false时，只能长切换，进行快速且短距离的滑动无法触发切换。 |
| longSwipes      | boolean | true   | 设置为false时，进行长时间长距离的拖动无法触发Swiper。*某些版本无效(4.0.7) |
| longSwipesMs    | number  | 300    | 定义longSwipes的时间（单位ms），超过则属于longSwipes         |
| longSwipesRatio | number  | 0.5    | 进行longSwipes时触发swiper所需要的最小拖动距离比例，即定义longSwipes距离比例。值越大触发Swiper所需距离越大。最大值0.5。 |



## swiper例子



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
​    <title>Title</title>
​    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/css/swiper.min.css">
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <style>
​        .swiper-container {
​            width: 400px;
​            height: 200px;
​        }
​        .swiper-slide{
​            background: aqua;
​        }
​    </style>
</head>
<body>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
​    </div>
​    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
​    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
​    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>

</div>

<!--导航等组件可以放在container之外-->

<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/js/swiper.min.js"></script>

<script>

​    $(function () {

​        var mySwiper = new Swiper ('.swiper-container', {
​            direction: 'vertical', // 垂直切换选项
​            loop: true, // 循环模式选项
​            // 如果需要分页器

​            pagination: {

​                el: '.swiper-pagination',

​            },
​            // 如果需要前进后退按钮
​            navigation: {

​                nextEl: '.swiper-button-next',

​                prevEl: '.swiper-button-prev',
​            },
​            // 如果需要滚动条
​            scrollbar: {
​                el: '.swiper-scrollbar',
​            },
​        })
​    })

</script>

</body>

</html>
```

