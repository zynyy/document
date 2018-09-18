---
title: <noscript>
category: element
type: semantics-scripting
anchor: the-noscript-element
order: 3
---

# `noscript` 元素标签

它用于通过影响文档的解析方式，向支持脚本的用户代理和不支持脚本的用户代理提供不同的标记。

## 用法

```html
// 注意：该标签只有被用户禁止使用javascript脚本内容时才生效,一个文档定义一个就够
// 浏览器可通过 设置禁止 javascrpt。
// google: 设置 -> 高级 -> 内容设置 -> javascript
// IE 工具 -> Internet选项 -> 安全 -> 自定义级别 -> java小程序脚本，选择禁用 -> 确定 -> 确定 （重启计算机后生效）
// FireFox 地址栏输入about:config进入高级设置菜单，找到javascEnabled项，右击切换即可。
<noscript>
  子元素 或者 文本内容
</noscript>
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

## CSS 默认样式

不存在任何默认样式

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: 无 <br> aria-*: 全局属性 |
