---
title: <dfn>
category: element
type: textlevel-semantics
anchor: the-dfn-element
order: 10
---

# dfn 元素标签

特殊术语或短语的定义

>注意:
>如果dfn元素具有title属性，则该属性的确切值是要定义的术语。否则，如果它包>含一个元素子节点和没有子Text节点，该子元件是abbr具有元素title属性，那么
>的精确值即属性是被定义的术语。否则，它是确定术语textContent的dfn元素的确>切位置。

## 用法

```html
<dfn>
  子元素 or 文本内容
</dfn>
```

## 子元素标签

1. metadata: `<link rel=''>`(属性`rel`必须存在)
1. scripting: `<script>`、`<noscript>`、`<canvas>`、`<template>`
1. emabedded: `<audio>`、`<video>`、`<img>`、`<map>`、`<iframe>`、`<embed>`、`<object>`、`<picture>`
1. edit: `<ins>`、`<del>`
1. textLevel: `<a>`、`<abbr>`、`<b>`、`<bdi>`、`<bdo>`、`<br>`、`<cite>`、`<code>`、`<data>`、`<em>`、`<i>`、`<kbd>`、`<mark>`、`<q>`、`<ruby>`、`<s>`、`<samp>`、`<small>`、`<span>`、`<strong>`、`<sub>`、`<sup>`、`<time>`、`<u>`、`<var>`、`<wbr>`
1. forms: `<button>`、`<input>`、`<meter>`、`<output>`、`<progress>`、`<select>`、`<textarea>`、`<label>`、`<datalist>`
1. SVGElement: `<svg>`
1. MathMLElement: `<math>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性), 其中属于`title`比较特殊存在。

## 默认样式

1. 斜体

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: 任何角色 <br> aria-*: 全局属性以及角色所对应的私有属性 |
