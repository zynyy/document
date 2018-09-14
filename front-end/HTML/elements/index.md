---
title: HTML标签分类
categort: element
order: 8
---

# HTML 标签划分

HTML4 和 HTML5 标签划分不一样, HTML4 按照 Inline(内联元素)和 Block(块级元素)划分。HTML5 按照语义化划分: Flow(流式元素)、Heading(标题元素)、Sectioning(章节元素)、Phrasing(段落元素)、Embedded(嵌入元素)、Interactive(交互元素)、Metadata(元数据元素)、Transparent(透明元素)

HTML5 标签按照归类:

<object data='https://www.w3.org/TR/html52/images/content-venn.svg' height='288'>
  <img  src='https://www.w3.org/TR/html52/images/content-venn.svg' width="512" height="288" alt="HTML 标签分布图" />
</object>

> 图片来源<https://www.w3.org/TR/html52/images/content-venn.svg>

## 类型

1. metadata: 元数据
1. sections: 章节
1. grouping: 内容分组
1. textLevel: 文本级 即包含文本的
1. froms: 表单(给后端提供数据的)
1. embedded: 嵌入资源(即多媒体)
1. scripting: 脚本即需要借助 javascript 实现
1. tabular: 表格展示数据的
1. interactive: 可交互元素
1. SVGElement: 可缩放矢量图形,如图标、图形、皆可使用
1. MathMLElement: 用来描述数学记号的布局结构,不过浏览器支持度很不好

> 标签具体信息请到左侧的 element 菜单下面查看

## 流式元素

> 总计 82 种标签:
> 1. 4.0 版本含以前共: 54
> 1. 5.0 版本: 27

| 标签名 | 类型 | 作用 | DOM | 英文全称 | 版本 |
| --- | --- | --- | --- | --- |
| `<a>` | textLevel |定义超链接 | `HTMLAnchorElement` | anchor | 4.0 |
| `<abbr>` | textLevel | 定义缩写 |  | abbreviation | 4.0 |
| `<address>` | textLevel | 定义地址元素 | |  address | 4.0 |
| `<article>` | sections | 定义文章 | | article | 5.0 |
| `<aside>` | sections | 定义页面内容旁边的内容 | | aside | 5.0 |
| `<audio>` | embedded | 定义声音内容 | | audio | 5.0 |
| `<b>` | textLevel | 定义加粗文字 | | bold |4.0 |
| `<bdi>` | textLevel | 定义给未知方向性文本确定方向, [unicode 双向算法渲染](https://www.unicode.org/reports/tr9/tr9-37.html) |  |Bi-Directional Isolation | 5.0 |
| `<bd0>` | textLevel | 定义文本显示的方向 | | Bi-Directional Override | 4.0 |
| `<blockquote>` | grouping | 定义一个长引用 | | blockquote | 4.0 |
| `<br>` | textLevel | 插入单个的换行 | HTMLBRElement | break | 4.0 |
| `<button>` | forms | 定义按钮 | HTMLButtonElement | button | 4.0 |
| `<canvas>` | scripting | 定义图形 | HTMLCanvasElement | canvas | 5.0 |
| `<cite>` | textLevel | 定义引用 | | cite | 4.0 |
| `<code>` | textLevel | 定义计算机代码文本 |  | code | 4.0 |
| `<data>` | textLevel | 定义微数据内容 | HTMLDataElement | data | 5.0 |
| `<datalist>` | forms | 定义选项列表 | HTMLDataListElement | data list | 5.0 |
| `<del>` | edits | 定义文档中已被删除的文本 | | delete | 4.0 |
| `<details>` | interactive | 对显示在页面的内容做进一步骤解释 | HTMLDatailsElement | | 5.0 |
| `<dfn>` | textLevel | 对文档中的文本进行格式化 | | definition | 5.0 |
| `<dialog>` | interactive | 定义会话或人的交谈 | HTMLDialogElement | | 5.0 |
| `<div>` | grouping | 定义文档章节 | HTMLDivElement | division |  4.0 |
| `<dl>` | grouping | 定义列表 | | definition list | 4.0 |
| `<em>` | textLevel | 呈现为被强调的文本 | HTMLEmbedElement | emphasize | 4.0 |
| `<embed>` | embedded | 定义额外的交互内容或插件 | | embed | 5.0 |
| `<fieldset>` | grouping | 对表单中的相关元素进行分组 | HTMLFieldSetElement | field set | 4.0 |
| `<figure>` | grouping | 定义一组媒体内容，以及他们的标题 | | figure | 4.0 |
| `<footer>` | sections | 为章节或页面定义一个底部 | | footer | 5.0 |
| `<form>` | forms | 定义表单 | HTMLFormElement | form | 4.0 |
| h1-6 | sections | HTMLHeadingElement | 定义1-6标签 | heading | 4.0 |
| `<header>` | sections | 为章节或页面定义一个头部 | | header | 5.0 |
| `<hr>` | grouping | 定义水平线  | HTMLHRElement | Horizontal Rule | 4.0 |
| `<i>` | textLevel | 定义倾斜文本 | | Italic | 4.0 |
| `<iframe>` | embedded | 定义内联替代窗口（框架） | HTMLIFrameElement | Inline frame | 4.0 |
| `<img>` | embedded | 定义个图片 | HTMLImageElement | image | 4.0 |
| `<input>` | forms | 定义输入域 | HTMLInputElement | input | 4.0 |
| `<ins>` | edits | 定义插入文本 | | inserted | 4.0 |
| `<kbd>` | textLevel | 定义键盘文本 | | keyboard | 4.0 |
| `<label>` | forms | 定义表单控件的标签 | HTMLLabelElement | label | 4.0 |
| `<link>` | metadata | 定义相关资源 | HTMLLinkElement | link | 4.0 |
| `<main>` | grouping | 定义文档的主要内容 | | main | 5.0 |
| `<map>` | embedded | 定义图片地图 | HTMLMapElement | map | 4.0 |
| `<mark>` | textLevel | 定义被标记的文本 | | mark | 5.0 |
| `<meter>` | forms | 定义预定义范围内的测量 | HTMLMeterElement | meter | 5.0 |
| `<nav>` | sections | 定义导航链接 | | navigator | 5.0 |
| `<noscript>` | scripting | 定义在脚本未被执行时的替代内容 | | noscript | 4.0 |
| `<object>` | embedded | 定义内嵌对象 | HTMLObjectElement | object | 5.0 |
| `<ol>` | grouping | 定义一个有序列表 | HTMLOListElement | Order List | 4.0 |
| `<output>` | forms | 定义某种类型的输出 | HTMLOutputElement | output | 5.0 |
| `<p>` | grouping | 定义段落 | HTMLParagraphElement | paragraph | 4.0 |
| `<picture>` | embedded | 响应式处理图片 | HTMLPictureElement | picture | 5.0 |
| `<pre>` | grouping | 定义预格式化文本 | HTMLPreElement | pre | 4.0 |
| `<progress>` | forms | 定义进度条 | HTMLProgressElement | progress | 4.0 |
| `<q>` | textLevel |  定义短引用 | | quotaion | 4.0 |
| `<ruby>` | textLevel | 定义 ruby 注释（中文注音或字符）。 | | ruby | 5.0 |
| `<s>` | textLevel | 定义不再正确的文本 | | strikethrough | 4.0 |
| `<samp>` | textLevel | 定义简单的计算机代码 | | sample | 4.0 |
| `<script>` | scripting | 定义脚本 | HTMLScriptElement | script | 4.0 |
| `<section>` | sections | 定义章节 | | section | 5.0 |
| `<select>` | forms | 定义可选择列表 | HTMLSelectElement | select | 4.0 |
| `<small>` | textLevel | 定义小点的文本 | | small | 4.0 |
| `<span>` | textLevel | 定义文档章节 | HTMLSpanElement | span | 4.0 |
| `<strong>` | textLevel | 定义强调的文字 | | stronger | 4.0 |
| `<style>` | metadata | 定义一个样式定义 | HTMLStyleElement | style | 4.0 |
| `<sub>` | textLevel | 定义下标文字 | | subscript | 4.0 |
| `<sup>` | textLevel | 定义上标文字 | | superscript | 4.0 |
| `<table>` | tabular | 定义表格 | HTMLTableElement | table | 4.0 |
| `<template>` | scripting | 用于保存客户端内容的机制 | HTMLTemplateElement | template | 5.0 |
| `<textarea>` | forms | 定义文本域 | HTMLTextAreaElement | text area | 4.0 |
| `<time>` | textLevel | 定义时间 | HTMLTimeElement | time | 5.0 |
| `<u>` | textLevel | 为文本添加下划线 | | Underlined | 4.0 |
| `<ul>` | grouping | 定义无序列表 | HTMLUListElement | Unordered List | 4.0 |
| `<var>` | textLevel | 定义变量 | | variable | 4.0 |
| `<video>` | embedded | 定义视频 | HTMLVideoElement | video | 5.0 |
| `<wbr>` | textLevel | 定义可能的换行 |  | Word Break Opportunity | 5.0 |
| SVG | SVGElement | 矢量图标 | | | 5.0 |
| MathML | MathMLElement | 数学标记,浏览器支持程度不好 | | | |

## 元数据元素

> 总计 8 种标签:
> 1. 4.0 版本含以前共: 7
> 1. 5.0 版本: 1

| 标签名 | 类型 | 作用 | DOM | 英文全称 | 版本 |
| --- |--- | --- |--- | --- | ---|
| `<base>` | metadata | 指定用于一个文档中包含的所有相对URL的基本URL | HTMLBaseElement | base | 4.0 |
| `<link>` | metadata | 定义相关资源 | HTMLLinkElement | link | 4.0 |
| `<meta>` | metadata | 提供文档的元数据 | HTMLMetaElement | meta | 4.0 |
| `<noscript>` | scripting | 定义在脚本未被执行时的替代内容 | | noscript | 4.0 |
| `<script>` | scripting | 定义脚本 | HTMLScriptElement | script | 4.0 |
| `<style>` | metadata | 定义一个样式定义 | HTMLStyleElement | style | 4.0 |
| `<template>` | scripting | 用于保存客户端内容的机制 | HTMLTemplateElement | template | 5.0 |
| `<title>` | metadata | 定义文档的标题 | HTMLTitleElement | title | 4.0 |

## 章节元素

> 总计 4 种标签:
> 1. 4.0 版本含以前共: 0
> 1. 5.0 版本: 4

| 标签名 | 类型 | 作用 | DOM | 英文全称 | 版本 |
| --- |--- | --- |--- | --- | ---|
| `<article>` | sections | 定义文章 | | article | 5.0 |
| `<aside>` | sections | 定义页面内容旁边的内容 | | aside | 5.0 |
| `<nav>` | sections | 定义导航链接 | | navigator | 5.0 |
| `<section>` | sections | 定义章节 | | section | 5.0 |

## 标题元素

> 总计 6 种标签:
> 1. 4.0 版本含以前共: 6
> 1. 5.0 版本: 0

| 标签名 | 类型 | 作用 | DOM | 英文全称 | 版本 |
| --- |--- | --- |--- | --- | ---|
| `<h1>` | sections | HTMLHeadingElement | 定义文档的主要标题 | heading | 4.0 |
| `<h2>` | sections | HTMLHeadingElement | 定义文档的次标题| heading | 4.0 |
| `<h3>` | sections | HTMLHeadingElement | 定义文档的子标题 | heading | 4.0 |
| `<h4>` | sections | HTMLHeadingElement | 定义文档的 4级标题 | heading | 4.0 |
| `<h5>` | sections | HTMLHeadingElement | 定义文档的 5级标题 | heading | 4.0 |
| `<h6>` | sections | HTMLHeadingElement | 定义文档的 6级标题 | heading | 4.0 |

## 段落元素

> 总计 52 种标签:
> 1. 4.0 版本含以前共: 35
> 1. 5.0 版本: 17

| 标签名 | 类型 | 作用 | DOM | 英文全称 | 版本 |
| --- |--- | --- |--- | --- | ---|
| `<a>` | textLevel |定义超链接 | `HTMLAnchorElement` | anchor | 4.0 |
| `<audio>` |embedded | 定义声音内容 | | audio | 5.0 |
| `<b>` | textLevel | 定义加粗文字 | | bold |4.0 |
| `<bdi>` |textLevel | 定义给未知方向性文本确定方向, [unicode 双向算法渲染](https://www.unicode.org/reports/tr9/tr9-37.html) |  |Bi-directional Isolation | 5.0 |
| `<bdo>` | textLevel | 定义文本显示的方向 | | Bi-Directional Override | 4.0 |
| `<br>` | textLevel | 插入单个的换行 | HTMLBRElement | break | 4.0 |
| `<button>` | forms | 定义按钮 | HTMLButtonElement | button | 4.0 |
| `<canvas>` | scripting | 定义图形 | HTMLCanvasElement | canvas | 5.0 |
| `<cite>` | textLevel | 定义引用 | | cite | 4.0 |
| `<code>` | textLevel | 定义计算机代码文本 |  | code | 4.0 |
| `<data>` | textLevel | 定义微数据内容 | HTMLDataElement | data | 5.0 |
| `<datalist>` | forms | 定义选项列表 | HTMLDataListElement | data list | 5.0 |
| `<del>` | edits | 定义文档中已被删除的文本 | | delete | 4.0 |
| `<dfn>` |textLevel | 对文档中的文本进行格式化 | | definition | 5.0 |
| `<em>` | textLevel | 呈现为被强调的文本 | HTMLEmbedElement | emphasize | 4.0 |
| `<embed>` | embedded | 定义额外的交互内容或插件 | | embed | 5.0 |
| `<i>` | textLevel | 定义倾斜文本 | | Italic | 4.0 |
| `<iframe>` | embedded | 定义内联替代窗口（框架） | HTMLIFrameElement | Inline frame | 4.0 |
| `<img>` | embedded | 定义个图片 | HTMLImageElement | image | 4.0 |
| `<input>` | forms | 定义输入域 | HTMLInputElement | input | 4.0 |
| `<ins>` | edits | 定义插入文本 | | inserted | 4.0 |
| `<kbd>` | textLevel | 定义键盘文本 | | keyboard | 4.0 |
| `<label>` | forms | 定义表单控件的标签 | HTMLLabelElement | label | 4.0 |
| `<link>` | metadata | 定义相关资源 | HTMLLinkElement | link | 4.0 |
| `<map>` | grouping | 定义图片地图 | HTMLMapElement | map | 4.0 |
| `<mark>` | textLevel | 定义被标记的文本 | | mark | 5.0 |
| `<meter>` | forms | 定义预定义范围内的测量 | HTMLMeterElement | meter | 5.0 |
| `<noscript>` | scripting | 定义在脚本未被执行时的替代内容 | | noscript | 4.0 |
| `<objec>` | embedded | 定义内嵌对象 | HTMLObjectElement | object | 5.0 |
| `<output>` | forms | 定义某种类型的输出 | HTMLOutputElement | output | 5.0 |
| `<picture>` | embedded | 响应式处理图片 | HTMLPictureElement | picture | 5.0 |
| `<progress>` | forms | 定义进度条 | HTMLProgressElement | progress | 4.0 |
| `<q>` | textLevel |  定义短引用 | | quotaion | 4.0 |
| `<ruby>` | textLevel | 定义 ruby 注释（中文注音或字符）。 | | ruby | 5.0 |
| `<s>` | textLevel | 定义不再正确的文本 | | strikethrough | 4.0 |
| `<samp>` | textLevel | 定义简单的计算机代码 | | sample | 4.0 |
| `<script>` | scripting | 定义脚本 | HTMLScriptElement | script | 4.0 |
| `<select>` | forms | 定义可选择列表 | HTMLSelectElement | select | 4.0 |
| `<small>` | textLevel | 定义小点的文本 | | small | 4.0 |
| `<span>` | textLevel | 定义文档章节 | HTMLSpanElement | span | 4.0 |
| `<strong>` | textLevel | 定义强调的文字 | | stronger | 4.0 |
| `<sub>` | textLevel | 定义下标文字 | | subscript | 4.0 |
| `<sup>` | textLevel | 定义上标文字 | | superscript | 4.0 |
| `<template>` | scripting | 用于保存客户端内容的机制 | HTMLTemplateElement | template | 5.0 |
| `<textarea>` | forms | 定义文本域 | HTMLTextAreaElement | text area | 4.0 |
| `<time>` | textLevel | 定义时间 | HTMLTimeElement | time | 5.0 |
| `<u>` | textLevel | 为文本添加下划线 | | Underlined | 4.0 |
| `<var>` | textLevel | 定义变量 | | variable | 4.0 |
| `<video>` | embedded | 定义视频 | HTMLVideoElement | video | 5.0 |
| `<wbr>` | textLevel | 定义可能的换行 |  | Word Break Opportunity | 5.0 |
| SVG | SVGElement | 矢量图标 | | | |
| MathML | MathMLElement | 数学标记,浏览器支持程度不好 | | | |

## 嵌入元素

> 总计 10 种标签:
> 1. 4.0 版本含以前共: 2
> 1. 5.0 版本: 7

| 标签名 | 类型 | 作用 | DOM | 英文全称 | 版本 |
| --- |--- | --- |--- | --- | ---|
| `<audio>` | embedded | 定义声音内容 | | audio | 5.0 |
| `<canvas>` | scripting | 定义图形 | HTMLCanvasElement | canvas | 5.0 |
| `<embed>` | embedded | 定义声音内容 | | audio | 5.0 |
| `<iframe>` | embedded | 定义内联替代窗口（框架） | HTMLIFrameElement | Inline frame | 4.0 |
| `<img>` | embedded | 定义个图片 | HTMLImageElement | image | 4.0 |
| `<object>` | embedded | 定义内嵌对象 | HTMLObjectElement | object | 5.0 |
| `<picture>` | embedded | 响应式处理图片 | HTMLPictureElement | picture | 5.0 |
| `<video>` | embedded | 定义视频 | HTMLVideoElement | video | 5.0 |
| SVG | SVGElement | 矢量图标 | | | 5.0 |
| MathML | MathMLElement | 数学标记,浏览器支持程度不好 | | | |

## 交互元素

> 总计 13 种标签:
> 1. 4.0 版本含以前共: 9
> 1. 5.0 版本: 4

| 标签名 | 类型 | 作用 | DOM | 英文全称 | 版本 |
| --- |--- | --- |--- | --- | --- |
| `<a>` | textLevel |定义超链接 | `HTMLAnchorElement` | anchor | 4.0 |
| `<audio>` |  embedded | 定义声音内容 | | audio | 5.0 |
| `<button>` | forms | 定义按钮 | HTMLButtonElement | button | 4.0 |
| `<details>` | interactive | 对显示在页面的内容做进一步骤解释 | HTMLDatailsElement | | 5.0 |
| `<embed>` | embedded | 定义额外的交互内容或插件 | | embed | 5.0 |
| `<fieldset>` | grouping | 对表单中的相关元素进行分组 |
| `<iframe>` | embedded | 定义内联替代窗口（框架） | HTMLIFrameElement | Inline frame | 4.0 |
| `<img>` | embedded | 定义个图片 | HTMLImageElement | image | 4.0 |
| `<input>` | forms | 定义输入域 | HTMLInputElement | input | 4.0 |
| `<label>` | forms | 定义表单控件的标签 | HTMLLabelElement | label | 4.0 |
| `<select>` | forms | 定义可选择列表 | HTMLSelectElement | select | 4.0 |
| `<textarea>` | forms | 定义文本域 | HTMLTextAreaElement | text area | 4.0 |
| `<video>` | embedded | 定义视频 | HTMLVideoElement | video | 5.0 |

## 废弃 或 不推荐使用的元素

| 标签名 | 类型 | 版本 |
| --- | --- | --- |
| `<acronym>` | 4.0 |
| `<applet>` | 4.0 |
| `<basefont>` | 4.0 |
| `<bgsound>` | 4.0 |
| `<big>` | 4.0 |
| `<blink>` | 4.0 |
| `<center>` | 4.0 |
| `<command>` | 4.0 |
| `<content>` | 4.0 |
| `<dir>` | 4.0 |
| `<element>` | 4.0 |
| `<font>` | 4.0 |
| `<frame>` | 4.0 |
| `<frameset>` | 4.0 |
| `<image>` | 4.0 |
| `<isindex>` | 4.0 |
| `<keygen>` | 5.0 |
| `<listing>` | 4.0 |
| `<marquee>` | 4.0 |
| `<menuitem>` | 5.0 |
| `<multicol>` | 4.0 |
| `<nextid>` | 4.0 |
| `<nobr>` | 4.0 |
| `<noembed>` | 4.0 |
| `<noframes>` | 4.0 |
| `<plaintext>` | 4.0 |
| `<shadow>` | 5.0 |
| `<spacer>` | 4.0 |
| `<strike>` | 4.0 |
| `<tt>` | 4.0 |
| `<xmp>` | 4.0 |

## 来源

1. <https://www.w3.org/TR/html52/fullindex.html#index-elements>
1. <https://www.w3.org/TR/html51/fullindex.html#index-elements>
1. <https://www.w3.org/TR/html50/index.html#elements-1>
