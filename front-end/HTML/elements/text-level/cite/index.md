---
title: <cite>
category: element
type: textlevel-semantics
anchor: the-cite-element
order: 7
---

# cite 元素标签

代表了一种创造性的工作提供参考。它必须包括作品的标题或作者的名称（人，人或组织）或URL引用，或者根据用于添加引文元数据的约定的缩写形式的引用。

>注意:
>创作包括书籍，论文，散文，诗歌，得分，歌曲，剧本，电影，电视节目，游戏，雕塑，绘画，戏剧制作，戏剧，歌剧，音乐剧，展览，法律案例报告，计算机
>程序，网站，网页，博客文章或评论，论坛帖子或评论，推文，书面或口头陈述等。

## 用法

```html
<cite>
  子元素 or 文本内容
</cite>
```

## 子元素标签

1. metadata: `<link rel=''>`(属性`rel`必须存在)
1. scripting: `<script>`、`<noscript>`、`<canvas>`、`<template>`
1. emabedded: `<audio>`、`<video>`、`<img>`、`<map>`、`<iframe>`、`<embed>`、`<object>`、`<picture>`
1. edit: `<ins>`、`<del>`
1. textLevel: `<a>`、`<abbr>`、`<b>`、`<bdi>`、`<bdo>`、`<br>`、`<cite>`、`<code>`、`<data>`、`<dfn>`、`<em>`、`<i>`、`<kbd>`、`<mark>`、`<q>`、`<ruby>`、`<s>`、`<samp>`、`<small>`、`<span>`、`<strong>`、`<sub>`、`<sup>`、`<time>`、`<u>`、`<var>`、`<wbr>`
1. forms: `<button>`、`<input>`、`<meter>`、`<output>`、`<progress>`、`<select>`、`<textarea>`、`<label>`、`<datalist>`
1. SVGElement: `<svg>`
1. MathMLElement: `<math>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)

## CSS 默认样式

```css
cite {
  font-style: italic;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: 任何角色 <br> aria-*: 全局属性以及角色所对应的私有属性 |
