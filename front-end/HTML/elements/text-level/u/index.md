---
title: <u>
category: element
type: textlevel-semantics
anchor: the-u-element
order: 29
---

# `u` 元素标签

将文本标记为应用了某种形式的非文本注释

## 用法

```html
<u>
  子元素 or 文本内容
</u>
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
u {
  text-decoration: underline;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: 任何角色 <br> aria-*: 全局属性以及角色所对应的私有属性 |
