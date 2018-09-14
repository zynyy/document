---
title: <button>
category: element
type: sec-forms
anchor: the-button-element
order: 4
---

# `button` 元素标签

## 用法

```html
<button>
  子元素 or 文本内容
</button>
```

## 子元素标签

>带有括号的子元素需要满足括号内的条件才可以使用

1. metadata: `<link rel=''>`(属性`rel`必须存在)
1. scripting: `<script>`、`<noscript>`、`<canvas>`、`<template>`
1. emabedded: `<audio>`(属性 `controls` 不存在)、`<video>`(属性 `controls` 不存在)、`<img>`(属性 `usemap` 不存在)、`<map>`、`<object>`、`<picture>`
1. edit: `<ins>`、`<del>`
1. textLevel: `<abbr>`、`<address>`、`<b>`、`<bdi>`、`<bdo>`、`<br>`、`<cite>`、`<code>`、`<data>`、`<dfn>`、`<em>`、`<i>`、`<kbd>`、`<mark>`、`<q>`、`<ruby>`、`<s>`、`<samp>`、`<small>`、`<span>`、`<strong>`、`<sub>`、`<sup>`、`<time>`、`<u>`、`<var>`、`<wbr>`
1. forms: `<input>`(属性`type`值是`hidden`)、`<meter>`、`<output>`、`<progress>`
1. SVGElement
1. MathMLElement

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `autofocus` | | |
| `disabled` | | |
| `form` | | |
| `formaction` | | |
| `formenctype` | | |
| `formmethod` | | |
| `formnovalidate` | | |
| `formtarget` | | |
| `menu` | | |
| `name` | | |
| `type` | | |
| `value` | | |

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | `role='button'` | Roles: `role='checkbox'`、`role='link'`、`role='menuitem'`、`role='menuitemcheckbox'`、`role='menuitemradio'`、`role='option'`、`role='radio'`、`role='switch'` or `role='tab'`  <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='menu'` | `role='button'` | Roles: `role='menuitem'`。 <br> aria-*: 全局属性以及角色所对应的私有属性 |
