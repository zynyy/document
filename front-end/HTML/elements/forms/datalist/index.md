---
title: <datalist>
category: element
type: sec-forms
anchor: the-datalist-element
order: 6
---

# `datalist` 元素标签

定义选项列表, 可与 `<input>` 必须具有 `list` 属性的元素一起使用

## 用法

```html
// 要么
<datalist>
  <option></option>
  or
  <script></script>
  or
  <template></template>
</datalist>

// 就
<datalist>
  子元素 or 文本内容
</datalist>
```

## 子元素标签

1. 带有括号的元素需要满足括号内的条件才可以使用

1. metadata: `<link rel=''>`(属性`rel`必须存在)
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
datalist {
  display: none;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | `role='listbox'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
