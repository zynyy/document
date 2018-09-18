---
title: <summary>
category: element
type: interactive-elements
anchor: the-summary-element
version:
  start: 5.1
  end: ''
order: 2
---

# `summary` 元素标签

作为`<details>`元素的第一个子元素,代表为一个内容的摘要，标题或图例。

```html
<details>
  // 要么
  <summary>
    heading 元素标签 or 文本内容
  </summary>
  // 就
  <summary>
    子元素(除了 heading) or 文本内容
  </summary>
</details>
```

## 子元素标签

带有括号的元素必须满足括号内的条件才可以使用

1. heading: `<h1>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>`
1. metadata:  `<link rel=''>`(属性`rel`必须存在)
1. scripting: `<script>`、`<noscript>`、`<canvas>`、`<template>`
1. emabedded: `<audio>`、`<video>`、`<img>`、`<map>`、`<iframe>`、`<embed>`、`<object>`、`<picture>`
1. edit: `<ins>`、`<del>`
1. textLevel: `<a>`、`<abbr>`、`<address>`、`<b>`、`<bdi>`、`<bdo>`、`<br>`、`<cite>`、`<code>`、`<data>`、`<dfn>`、`<em>`、`<i>`、`<kbd>`、`<mark>`、`<q>`、`<ruby>`、`<s>`、`<samp>`、`<small>`、`<span>`、`<strong>`、`<sub>`、`<sup>`、`<time>`、`<u>`、`<var>`、`<wbr>`
1. forms: `<button>`、`<input>`、`<meter>`、`<output>`、`<progress>`、`<select>`、`<textarea>`、`<label>`
1. SVGElement: `<svg>`
1. MathMLElement: `<math>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)

## CSS 默认样式

```css
summary {
  display: block;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| |  | Roles: `button` <br> aria-*: 全局属性以及角色所对应的私有属性 |
