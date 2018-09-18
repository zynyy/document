---
title: <aside>
category: element
type: sections
anchor: the-aside-element
order: 4
---

# `aside` 元素标签

表示与内容页面关联度较低的内容,通常位于文章内容的两侧,

## 用法

```html
<aside>
  子元素 or 文本内容
</aside>
```

## 子元素标签

带有括号的元素必须满足括号内的条件才可以使用

1. metadata: `<style>`、 `<link rel=''>`(属性`rel`必须存在)
1. sections: `<aside>`、`<article>`、`<footer>`、`<header>`、`<nav>`、`<section>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>`
1. scripting: `<script>`、`<noscript>`、`<canvas>`、`<template>`
1. tabular: `<table>`
1. grouping: `<blockquote>`、`<div>`、`<dl>`、`<fieldset>`、`<figure>`、`<hr>`、`<ol>`、`<p>`、`<pre>`、`<ul>`
1. embedded: `<audio>`、`<video>`、`<img>`、`<map>`、`<iframe>`、`<embed>`、`<object>`、`<picture>`
1. edit: `<ins>`、`<del>`
1. interactive: `<details>`、`<dialog>`
1. textLevel: `<a>`、`<abbr>`、`<address>`、`<b>`、`<bdi>`、`<bdo>`、`<br>`、`<cite>`、`<code>`、`<data>`、`<dfn>`、`<em>`、`<i>`、`<kbd>`、`<mark>`、`<q>`、`<ruby>`、`<s>`、`<samp>`、`<small>`、`<span>`、`<strong>`、`<sub>`、`<sup>`、`<time>`、`<u>`、`<var>`、`<wbr>`
1. forms: `<button>`、`<datelist>`、`<form>`、`<input>`、`<meter>`、`<output>`、`<progress>`、`<select>`、`<textarea>`、`<label>`
1. SVGElement: `<svg>`
1. MathMLElement: `<math>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)

## CSS 默认样式

```css
aside {
  display: block;
}
```

## DOM 接口(IDL)

1. 基础 [HTMLElement]

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | `role='complementary'` | Roles: `role='feed'`、`role='note'`、`role='presentation'`、`role='none'`、`role='region'` or `role='search'` <br> aria-*: 全局属性以及角色所对应的私有属性 |
