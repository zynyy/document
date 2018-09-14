---
title: <video>
category: element
type: semantics-embedded-content
anchor: the-video-element
order: 10
---

# `video` 元素标签

## 用法

```html
<video>
  子元素 and 文本内容(如果浏览器不支持该标签则会显示文本内容)
</video>
```

## 子元素标签

1. metadata: `<style>`、`<link>`
1. sections: `<article>`(子元素必须存在h2-6中的一个元素标签)、`<section>`(子元素必须存在h2-6中的一个元素标签)、`<nav>`、`<header>`、`<footer>`、`<aside>`、`<h1>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>`
1. grouping: `<address>`、`<blockquote>`、`<dl>`、`<div>`、`<figure>`、`<ol>`、`<ul>`、`<p>`、`<pre>`、`<hr>`
1. textLevel: `<a>`、`<abbr>`、`<b>`、`<bdi>`、`<bdo>`、`<br>`、`<cite>`、`<code>`、`<data>`、`<dfn>`、`<em>`、`<i>`、`<kdb>`、`<mark>`、`<q>`、`<ruby>`、`<s>`、`<samp>`、`<small>`、`<span>`、`<strong>`、`<sub>`、`<sup>`、`<time>`、`<u>`、`<var>`、`<wbr>`
1. edits: `<del>`、`<ins>`
1. embedded: `<picture>`、`<img>`、`<embed>`、`<object>`、`<map>`、`<track>`、`<source>`
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
| ---- | ---- | ---- |
| `src` | | |
| `crossorigin` | | |
| `poster` | | |
| `preload` | | |
| `autoplay` | | |
| `loop` | | |
| `multed` | | |
| `controls` | | |
| `width` | | |
| `height` | | |

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: `role='application'`。 <br> aria-*: 全局属性 |
