---
title: <section>
category: element
type: sections
anchor: the-section-element
order: 6
---

# `section` 元素标签

文档中的一个区域(或节),用于强调某一个模块，强调模块本身是作为一个整体的;

## 用法

```html
// 注意: 使用该元素内通常含有一个或多个 <h2> ~ <h6> 之间的标签
<section>
  子元素 or 文本内容
</section>
```

## 子元素标签

>带有括号的元素必须满足括号内的条件才可以使用

1. metadata: `<style>`、 `<link rel=''>`(属性`rel`必须存在)
1. sections: `<aside>`、`<article>`、`<footer>`、`<header>`、`<nav>`、`<section>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>`
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

## CSS 默认样式

```css
section {
  display: block;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | `role='region'` | Roles: `role='alert'`、`role='alertdialog'`、`role='application'`、`role='contentinfo'`、`role='dialog'`、`role='document'`、`role='feed'`、`role='log'`、`role='main'`、`role='marquee'`、`role='presentaion'`、`role='search'`、`role='status'`、or `role='tabpanel'` <br> aria-*: 全局属性以及角色所对应的私有属性 |
