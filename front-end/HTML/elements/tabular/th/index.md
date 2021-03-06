---
title: <th>
category: element
type: tabular-data
anchor: the-th-element
order: 9
---

# `th` 元素标签

`<table>` 元素的单元格标题。

## 用法

```html
// 注意在一个 <table> 元素中第一个 <tr> 元素才可以设置该标签
<table>
  <tr>
    <th>
      子元素
    </th>
  </tr>
</table>
```

## 子元素标签

带有括号的元素必须满足括号内的条件才可以使用

1. metadata: `<style>`、`<link rel=''>`(属性`rel`必须存在)
1. scripting: `<script>`、`<noscript>`、`<canvas>`、`<template>`
1. tabular: `<table>`
1. grouping: `<blockquote>`、`<div>`、`<dl>`、`<fieldset>`、`<figure>`、`<hr>`、`<main>`、`<ol>`、`<p>`、`<pre>`、`<ul>`
1. embedded: `<audio>`、`<video>`、`<img>`、`<map>`、`<iframe>`、`<embed>`、`<object>`、`<picture>`
1. edit: `<ins>`、`<del>`
1. interactive: `<details>`、`<dialog>`
1. textLevel: `<a>`、`<abbr>`、`<address>`、`<b>`、`<bdi>`、`<bdo>`、`<br>`、`<cite>`、`<code>`、`<data>`、`<dfn>`、`<em>`、`<i>`、`<kbd>`、`<mark>`、`<q>`、`<ruby>`、`<s>`、`<samp>`、`<small>`、`<span>`、`<strong>`、`<sub>`、`<sup>`、`<time>`、`<u>`、`<var>`、`<wbr>`
1. forms: `<button>`、`<datelist>`、`<form>`、`<input>`、`<meter>`、`<output>`、`<progress>`、`<select>`、`<textarea>`、`<label>`
1. SVGElement: `<svg>`
1. MathMLElement: `<math>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `colspan` | | |
| `rowspan` | | |
| `headers` | | |
| `scope` | | |
| `abbr` | | |

## CSS 默认样式

```css
th {
  display: table-cell;
  vertical-align: inherit;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | `role='columnheader'` or `role='rowheader'` | Roles: 任何角色 <br> aria-*: 全局属性以及角色所对应的私有属性 |
