---
title: <li>
category: element
type: grouping-content
anchor: the-li-element
order: 6
---

# `li` 元素标签

表示列表里的条目。必须被包含在一个父元素里：一个有顺序的列表`<ol>`，一个无顺序的列表`<ul>`，或者一个菜单`<menu>`。

## 用法

```html
<ol>
  <li>
    子元素 or 文本内容
  </li>
</ol>

or

<ul>
  <li>
    子元素 or 文本内容
  </li>
</ul>
```

## 子元素标签

>带有括号的元素必须满足括号内的条件才可以使用

1. metadata: `<style>`、`<link rel=''>`(属性`rel`必须存在)
1. sections: `<aside>`、`<article>`、`<footer>`、`<header>`、`<nav>`、`<section>`、`<h1>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>`
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

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `value` | number | 该属性只有在 嵌套在 `<ol>` 才有。嵌套在 `<ul>` 则没有 |

## CSS 默认样式

```css
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 如果父级元素是`ul` or `ol`则`role='listitem'` | Roles: `role='menuitem'`、`role='menuitemcheckbox'`、`role='menuitemradio'`、`role='option'`、`role='radio'`、`role='separator'`、`role='tab'`、`role='treeitem'`、`role='presentation'`、or `role='none'`、。 <br> aria-*: 全局属性以及角色所对应的私有属性 |
