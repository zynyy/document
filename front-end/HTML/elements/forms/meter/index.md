---
title: <meter>
category: element
type: sec-forms
anchor: the-meter-element
order: 12
---

# `meter` 元素标签

用来显示已知范围的标量值或者分数值。

## 用法

```html
<meter value='' max=''>
  子元素 or 文本内容
</meter>
```

## 子元素标签

>带有括号的元素必须满足括号内的条件才可以使用

1. metadata:  `<link rel=''>`(属性`rel`必须存在)
1. scripting: `<script>`、`<noscript>`、`<canvas>`、`<template>`
1. emabedded: `<audio>`、`<video>`、`<img>`、`<map>`、`<iframe>`、`<embed>`、`<object>`、`<picture>`
1. edit: `<ins>`、`<del>`
1. textLevel: `<a>`、`<abbr>`、`<address>`、`<b>`、`<bdi>`、`<bdo>`、`<br>`、`<cite>`、`<code>`、`<data>`、`<dfn>`、`<em>`、`<i>`、`<kbd>`、`<mark>`、`<q>`、`<ruby>`、`<s>`、`<samp>`、`<small>`、`<span>`、`<strong>`、`<sub>`、`<sup>`、`<time>`、`<u>`、`<var>`、`<wbr>`
1. forms: `<button>`、`<input>`、`<output>`、`<progress>`、`<select>`、`<textarea>`、`<label>`
1. SVGElement: `<svg>`
1. MathMLElement: `<math>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `value` | | |
| `min` | | |
| `max` | | |
| `low` | | |
| `high` | | |
| `optimum` | | |

## CSS 默认样式

```css
meter {
  display: table-cell;
  height: 1em;
  width: 5em;
  box-sizing: border-box;
  vertical-align: -0.2em;
  -webkit-user-modify: read-only !important;
  writing-mode: horizontal-tb !important;
  appearance: meter;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: 无。 <br> aria-*: 全局属性 |
