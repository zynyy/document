---
title: <bdi>
category: element
type: textlevel-semantics
anchor: the-bdi-element
order: 4
---

# `bdi` 元素标签

双向隔离元素。改变文本的文本方向，使其脱离其周围文本的方向设置。不继承父级元素的 `dir` 属性值。默认`auto`。可通过 CSS 的 writing-modes 模块中的 `unicode-bidi` 来设置。主要涉及到写作的习惯。如: 从上到下。从左往右，从右往左

## 用法

```html
<bdi>
  子元素 or 文本内容
</bdi>
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

* [全局属性](/front-end/HTML/attribute#anchor-全局属性), 其中属性 `dir` 属性相对于其他标签比较特殊

## CSS 默认样式

```css
bdi {
  unicode-bidi: isolate;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: 任何角色 <br> aria-*: 全局属性以及角色所对应的私有属性 |
