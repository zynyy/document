---
title: <rp>
category: element
type: textlevel-semantics
anchor: the-rp-element
order: 17
---

# `rp` 元素标签

用于提供由不支持ruby注释的用户代理显示的后备文本。一种普遍的惯例是围绕ruby注释的ruby文本组件提供括号。

## 用法

```html
// 注意该标签如果浏览器支持 <ruby> 则不显示，反之就会显示。存在一个 <rt> 则须设置两个 <rp> 位于前后。
<ruby>
  <rp>
    子元素 or 文本内容
  </rp>
  <rt>拼音</rt>
  <rp>子元素 or 文本内容</rp>
</ruby>
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
rp {
  display: none;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: 任何角色 <br> aria-*: 全局属性以及角色所对应的私有属性 |
