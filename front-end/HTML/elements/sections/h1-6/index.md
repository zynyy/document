---
title: h1-6 元素 标签
category: element
type: sections
anchor: the-h1-h2-h3-h4-h5-and-h6-elements
order: 7
---

# h1-6 元素标签

## 用法

```html
<h1>
  子元素 or 文本内容
</h1>

<h2>
  子元素 or 文本内容
</h2>

<h3>
  子元素 or 文本内容
</h3>

<h4>
  子元素 or 文本内容
</h4>datelist

<h5>
  子元素 or 文本内容
</h5>

<h6>
  子元素 or 文本内容
</h6>
```

## 子元素标签

>带有括号的元素必须满足括号内的条件才可以使用

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

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | `role='heading'` <br> `aria-level=1-6`来表示`<h1 - 6>`标签 | Roles: `role='tab'`、`role='presentation'` or `role='none'` <br> aria-*: 全局属性以及角色所对应的私有属性 |

