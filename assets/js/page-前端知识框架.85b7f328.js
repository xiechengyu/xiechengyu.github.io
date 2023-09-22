(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{520:function(a,t,v){"use strict";v.r(t);var _=v(1),r=Object(_.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),v("p",[a._v("我最近在看一个叫做重学前端的专栏，有一些心得体会如下。")]),a._v(" "),v("p",[a._v("在这个专栏中第一个让我印象深刻的点就是要建立稳增的起那段知识的框架。")]),a._v(" "),v("p",[a._v("前端的知识在总体上分成基础部分和实践部分，基础部分包含了 JavaScript 语言（模块一）、CSS 和 HTML（模块二）以及浏览器的实现原理和 API（模块三），这三个模块涵盖了一个前端工程师所需要掌握的全部知识。实践部分（模块四）是工作过程中遇到的问题和解决方案。")]),a._v(" "),v("h2",{attrs:{id:"javascript"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[a._v("#")]),a._v(" JavaScript")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://static001.geekbang.org/resource/image/6a/9b/6aec0a09381a2f74014ec604ef99c19b.png",alt:"img",loading:"lazy"}})]),a._v(" "),v("p",[a._v("在 JavaScript 的模块中，首先我们可以把语言按照文法、语义和运行时来拆分，这符合编程语言的一般规律："),v("strong",[a._v("用一定的词法和语法，表达一定语义，从而操作运行时。")])]),a._v(" "),v("p",[a._v("接下来，我们又按照程序的一般规律，把运行时分为数据结构和算法部分：数据结构包含类型和实例（JavaScript 的类型系统就是它的 7 种基本类型和 7 种语言类型，实例就是它的内置对象部分）。所谓的算法，就是 JavaScript 的执行过程。")]),a._v(" "),v("p",[a._v("类型部分中，对象比其它所有类型加起来都要更为复杂，所以我们会用较长的篇幅来讲解对象，包括它的一些历史和设计思路。")]),a._v(" "),v("p",[a._v("执行过程我们则需要按照从大结构到小结构的角度讲解，从最顶层的程序与模块、事件循环和微任务，到函数、再到语句级的执行。我们从粗到细地了解执行过程。")]),a._v(" "),v("p",[a._v("实例部分，对 JavaScript 来说类似基础库，JavaScipt 的内置对象多达 150 以上，考虑到我们即使逐次讲解也必定不如 MDN 更加细致全面，所以我们会从应用和机制的角度，挑选其中几个体系来讲解。")]),a._v(" "),v("p",[a._v("文法中的语法和语义基本是一一对应关系，在 JavaScript 标准中有一份语法定义表，它同样不适合一一讲解，我们会从 JavaScript 语法中特别的地方，以及与日常开发比较相关的地方来重点讲解，剩下的内容和词法部分，我们会带领大家做一些数据挖掘工作，从这份表格中找到一些和我们日常开发息息相关的内容。")]),a._v(" "),v("p",[a._v("语义的大部分内容我们会在运行时的讲解中透出，同时它又跟语法有对应的关系，所以我们不再单独拿出来讲解。")]),a._v(" "),v("h2",{attrs:{id:"html-和-css"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#html-和-css"}},[a._v("#")]),a._v(" HTML 和 CSS")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://static001.geekbang.org/resource/image/41/62/4153891927afac7f4c21ccf6a141f062.png",alt:"img",loading:"lazy"}})]),a._v(" "),v("p",[v("strong",[a._v("在 HTML 的部分")]),a._v("，我们会按照功能和语言来划分它的知识，HTML 的功能主要由标签来承担，所以我们首先会把标签做一些分类，并对它们分别进行讲解。")]),a._v(" "),v("p",[a._v("我们都知道 HTML 的标签可以分为很多种，head 里面的我们称为元信息类标签，诸如 title、meta、style、link、base 这些，它们用来描述文档的一些基本信息。还有一类是一些诸如 section、nav 的标签，它们在视觉表现上跟 div 并没有区别，但是各有各的适用场景，我们把它们称作语义类标签。另外一类是 img、video、audio 之类的替换型媒体类标签，用来引入外部内容，平常开发中你也会经常用到。再有就是表单类的，比如 input、button。")]),a._v(" "),v("p",[a._v("所以，基于这样的分类，我把标签分成下面几种。")]),a._v(" "),v("ol",[v("li",[a._v("文档元信息：通常是出现在 head 标签中的元素，包含了描述文档自身的一些信息；")]),a._v(" "),v("li",[a._v("语义相关：扩展了纯文本，表达文章结构、不同语言要素的标签；")]),a._v(" "),v("li",[a._v("链接：提供到文档内和文档外的链接；")]),a._v(" "),v("li",[a._v("替换型标签：引入声音、图片、视频等外部元素替换自身的一类标签；")]),a._v(" "),v("li",[a._v("表单：用于填写和提交信息的一类标签；")]),a._v(" "),v("li",[a._v("表格：表头、表尾、单元格等表格的结构。")])]),a._v(" "),v("p",[a._v("我们的重点会放在前四种标签上，表单和表格较少用到，而且基本以查阅型知识为主，这里就不拿出来讲解了。")]),a._v(" "),v("p",[a._v("除了标签之外，我们还应该把 HTML 当作一门语言来了解下，当然，标记语言跟编程语言不太一样，没有编程语言那么严谨，所以，我们会简要介绍 HTML 的语法和几个重要的语言机制：实体、命名空间。")]),a._v(" "),v("p",[a._v("最后我们会介绍下 HTML 的补充标准：ARIA，它是 HTML 的扩展，在可访问性领域，它有至关重要的作用。")]),a._v(" "),v("p",[v("strong",[a._v("CSS 部分")]),a._v("，按照惯例，我们也会从语言和功能两个角度去介绍。在语言部分，我们会从大到小介绍 CSS 的各种语法结构，比如 @rule、选择器、单位等等。功能部分，我们大致可以分为布局、绘制和交互类。")]),a._v(" "),v("p",[a._v("在布局类我们介绍两个最常用的布局：正常流和弹性布局。绘制类我们则会分成图形相关的和文字相关的绘制。最后我们会介绍动画和其它交互。")]),a._v(" "),v("h2",{attrs:{id:"浏览器的实现原理和-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的实现原理和-api"}},[a._v("#")]),a._v(" 浏览器的实现原理和 API")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://static001.geekbang.org/resource/image/cb/cb/cbb6d198ccfb95af4906eeb0581333cb.png",alt:"img",loading:"lazy"}})]),a._v(" "),v("p",[a._v("浏览器部分我们会先介绍下浏览器的实现原理，这是我们深入理解 API 的基础。")]),a._v(" "),v("p",[a._v("我们会从一般的浏览器设计出发，按照解析、构建 DOM 树、计算 CSS、渲染、合成和绘制的流程来讲解浏览器的工作原理。")]),a._v(" "),v("p",[a._v("在 API 部分，我们会从 W3C 零散的标准中挑选几个大块的 API 来详细讲解，主要有：事件、DOM、CSSOM 几个部分，它们分别覆盖了交互、语义和可见效果，这是我们工作中用到的主要内容。")]),a._v(" "),v("h2",{attrs:{id:"前端工程实践"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前端工程实践"}},[a._v("#")]),a._v(" 前端工程实践")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://static001.geekbang.org/resource/image/45/ce/4568011037a5591402c4ba1547ba0dce.jpg",alt:"img",loading:"lazy"}})]),a._v(" "),v("h3",{attrs:{id:"性能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[a._v("#")]),a._v(" 性能")]),a._v(" "),v("p",[a._v("对任何一个前端团队而言，性能是它价值的核心指标，从早年“重构”的实践开始，前端有通过性能证明自己价值的传统。")]),a._v(" "),v("p",[a._v("但是性能并非细节的堆砌，也不是默默做优化，所以，我会从团队的角度来跟你一起探讨性能的方法论和技术体系。")]),a._v(" "),v("h3",{attrs:{id:"工具链"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#工具链"}},[a._v("#")]),a._v(" 工具链")]),a._v(" "),v("p",[a._v("对一个高效又合作良好的前端团队来说，一致性的工具链是不可或缺的保障，作为开发阶段的入口，工具链又可以和性能、发布、持续集成等系统链接到一起，成为团队技术管理的基础。")]),a._v(" "),v("h3",{attrs:{id:"持续集成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#持续集成"}},[a._v("#")]),a._v(" 持续集成")]),a._v(" "),v("p",[a._v("持续集成并非一个新概念，但是过去持续集成概念和理论都主要针对软件开发，而对前端来说，持续集成是一个新的课题（当然对持续集成来说，前端也是一个新课题），比如 daily build 就完全不适用前端，前端代码必须是线上实时可用的。这一部分内容将会针对前端的持续集成提出一些建设的思路。")]),a._v(" "),v("h3",{attrs:{id:"搭建系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#搭建系统"}},[a._v("#")]),a._v(" 搭建系统")]),a._v(" "),v("p",[a._v("前端工作往往多而繁杂，针对高重复性、可模块化的业务需求，传统的人工开发不再适用，搭建系统是大部分大型前端团队的选择。这一部分内容我将会介绍什么是搭建系统，以及一些常见的搭建系统类型。")]),a._v(" "),v("h3",{attrs:{id:"架构与基础库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构与基础库"}},[a._v("#")]),a._v(" 架构与基础库")]),a._v(" "),v("p",[a._v("软件架构师主要解决功能复杂性的问题，服务端架构师主要解决高流量问题，而前端是页面间天然解耦，分散在用户端运行的系统，但是前端架构也有自己要解决的问题。")]),a._v(" "),v("p",[a._v("前端需求量大、专业人才稀缺，更因为前端本身运行在浏览器中，有大量兼容工作要做。所以前端架构的主要职责是兼容性、复用和能力扩展。")]),a._v(" "),v("h2",{attrs:{id:"结语"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[a._v("#")]),a._v(" 结语")]),a._v(" "),v("p",[a._v("以上有部分是我个人的理解，还有一大部分来自于我对原文的摘抄，原文来自极客时间的重学前端专栏。")])])}),[],!1,null,null,null);t.default=r.exports}}]);