---
title: <from>
category: element
type: sec-forms
anchor: the-form-element
order: 1
---

# `form` 元素标签

文档中的一个区域，这个区域包含有交互控制元素，用来向web后端提交信息。俗称 form 表单

## 用法

```html
<form>
  子元素 or 文本内容
</form>
```

## 子元素标签

带有括号的元素必须满足括号内的条件才可以使用

1. metadata: `<style>`、`<link rel=''>`(属性`rel`必须存在)
1. sections: `<aside>`、`<article>`、`<footer>`、`<header>`、`<nav>`、`<section>`、`<h1>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>`
1. scripting: `<script>`、`<noscript>`、`<canvas>`、`<template>`
1. tabular: `<table>`
1. grouping: `<blockquote>`、`<div>`、`<dl>`、`<fieldset>`、`<figure>`、`<hr>`、`<main>`、`<ol>`、`<p>`、`<pre>`、`<ul>`
1. embedded: `<audio>`、`<video>`、`<img>`、`<map>`、`<iframe>`、`<embed>`、`<object>`、`<picture>`
1. edit: `<ins>`、`<del>`
1. interactive: `<details>`、`<dialog>`
1. textLevel: `<a>`、`<abbr>`、`<address>`、`<b>`、`<bdi>`、`<bdo>`、`<br>`、`<cite>`、`<code>`、`<data>`、`<dfn>`、`<em>`、`<i>`、`<kbd>`、`<mark>`、`<q>`、`<ruby>`、`<s>`、`<samp>`、`<small>`、`<span>`、`<strong>`、`<sub>`、`<sup>`、`<time>`、`<u>`、`<var>`、`<wbr>`
1. forms: `<button>`、`<datelist>`、`<input>`、`<meter>`、`<output>`、`<progress>`、`<select>`、`<textarea>`、`<label>`
1. SVGElement: `<svg>`
1. MathMLElement: `<math>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 类型 | 值 | 描述 |
| --- | --- | --- | --- |
| `accept-charset` | | | |
| `action` | | | |
| `autocomplete` | | | |
| `enctype` | | | |
| `method` | | | |
| `name` | | | |
| `novalidate` | | | |
| `target` | | | |

## CSS 默认样式

```css
form {
  display: block;
  margin-top: 0em;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | `role='form'` | Roles: `role='form'`、`role='presentation'` or `role='none'` <br> aria-*: 全局属性以及角色所对应的私有属性 |
