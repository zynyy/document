---
title: <kbd>
category: element
type: textlevel-semantics
anchor: the-kbd-element
order: 13
---

# `kbd` 元素标签

键盘输入组合

## 用法

```html
// 注意: 如果存在子元素 <samp> 则表示系统输出。如果父元素是 <samp> 则表示输入，子元素 <kbd> 则代表键盘组合键
<kbd>
  子元素 or 文本内容
</kbd>
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

## CSS 默认样式

```css
kbd {
  font-family: monospace;
}
```

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: 任何角色 <br> aria-*: 全局属性以及角色所对应的私有属性 |
