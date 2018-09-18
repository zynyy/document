---
title: <ins>
category: element
type: edits
anchor: the-ins-element
---

# `ins` 元素标签

新插入到文档的内容,即在旧有的文档上进行更改添加

## 用法

```html
<ins>
  子元素 or 文本内容
</ins>
```

## 子元素标签

1. metadata: `<style>`、`<link>`
1. sections: `<article>`(子元素必须存在h2-6中的一个元素标签)、`<section>`(子元素必须存在h2-6中的一个元素标签)、`<nav>`、`<header>`、`<footer>`、`<aside>`、`<h1>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>`
1. grouping: `<address>`、`<blockquote>`、`<dl>`、`<div>`、`<figure>`、`<ol>`、`<ul>`、`<p>`、`<pre>`、`<hr>`
1. textLevel: `<a>`、`<abbr>`、`<b>`、`<bdi>`、`<bdo>`、`<br>`、`<cite>`、`<code>`、`<data>`、`<dfn>`、`<em>`、`<i>`、`<kdb>`、`<mark>`、`<q>`、`<ruby>`、`<s>`、`<samp>`、`<small>`、`<span>`、`<strong>`、`<sub>`、`<sup>`、`<time>`、`<u>`、`<var>`、`<wbr>`
1. edits: `<del>`、`<ins>`
1. embedded: `<picture>`、`<img>`、`<embed>`、`<object>`、`<video>`、`<audio>`、`<map>`
1. tabular: `<table>`
1. forms: `<datalist>`、`<fieldset>`、`<form>`、`<meter>`、`<textarea>`、`<select>`、`<progress>`、`<label>`、`<button>`、`<output>`、`<input>`
1. interactive: `<dialog>`、`<details>`
1. scripting: `<script>`、`<canvas>`、`<template>`、`<noscript>`
1. SVGelement: `<svg>`
1. MathMLElement: `<math>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | --- |
| `cite` | RUL | |
| `datetime` | 时间格式 | 标注更改时间 |

## CSS 默认样式

```css
ins {
  text-decoration: underline;
}
```

## javascript

1. DOM: [HTMLModElement]()

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: 任何角色 <br> aria-*: 全局属性以及角色所对应的私有属性 |
