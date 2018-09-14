---
title: <legend>
category: element
type: sec-forms
anchor: the-legend-element
order: 14
---

# `legend` 元素标签

## 用法

```html
// 注意 在 <fieldset> 元素标签中有且只有一个存在
<fieldset>
  <legend>
    子元素 or 文本内容
  </legend>
</fieldset>
```

## 子元素标签

>带有括号的元素必须满足括号内的条件才可以使用

1. metadata:  `<link rel=''>`(属性`rel`必须存在)
1. scripting: `<script>`、`<noscript>`、`<canvas>`、`<template>`
1. sections: `<h1>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>`
1. emabedded: `<audio>`、`<video>`、`<img>`、`<map>`、`<iframe>`、`<embed>`、`<object>`、`<picture>`
1. edit: `<ins>`、`<del>`
1. textLevel: `<a>`、`<abbr>`、`<address>`、`<b>`、`<bdi>`、`<bdo>`、`<br>`、`<cite>`、`<code>`、`<data>`、`<dfn>`、`<em>`、`<i>`、`<kbd>`、`<mark>`、`<q>`、`<ruby>`、`<s>`、`<samp>`、`<small>`、`<span>`、`<strong>`、`<sub>`、`<sup>`、`<time>`、`<u>`、`<var>`、`<wbr>`
1. forms: `<button>`、`<input>`、`<meter>`、`<output>`、`<progress>`、`<select>`、`<textarea>`、`<label>`
1. SVGElement: `<svg>`
1. MathMLElement: `<math>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: 任何角色。 <br> aria-*: 全局属性以及角色所拥有的私有属性 |
