---
title: <progress>
category: element
type: sec-forms
anchor: the-progress-element
order: 11
---

# `progress` 元素标签

用来显示一项任务的完成进度

## 用法

```html
<progress>
  子元素 or 文本内容
</progress>
```

## 子元素标签

>带有括号的元素必须满足括号内的条件才可以使用

1. metadata: `<link rel=''>`(属性`rel`必须存在)
1. scripting: `<script>`、`<noscript>`、`<canvas>`、`<template>`
1. emabedded: `<audio controls=''>`、`<video>`、`<img>`、`<map>`、`<iframe>`、`<embed>`、`<object>`、`<picture>`
1. edit: `<ins>`、`<del>`
1. textLevel: `<a>`、`<abbr>`、`<address>`、`<b>`、`<bdi>`、`<bdo>`、`<br>`、`<cite>`、`<code>`、`<data>`、`<dfn>`、`<em>`、`<i>`、`<kbd>`、`<mark>`、`<q>`、`<ruby>`、`<s>`、`<samp>`、`<small>`、`<span>`、`<strong>`、`<sub>`、`<sup>`、`<time>`、`<u>`、`<var>`、`<wbr>`
1. forms: `<button>`、`<input>`、`<meter>`、`<output>`、`<select>`、`<textarea>`、`<label>`
1. SVGElement: `<svg>`
1. MathMLElement: `<math>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `value` | | |
| `max` | | |

## CSS 默认样式

```css
progress {
  display: table-cell;
  box-sizing: border-box;
  height: 1em;
  width: 10em;
  vertical-align: -0.2em;
  writing-mode: horizontal-tb !important;
  appearance: progress-bar;
}

```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | `role='progressbar'` | Roles: 无。 <br> aria-*: 全局属性以及角色所对应的私有属性 |
