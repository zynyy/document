---
title: <body>
category: element
type: sections
anchor: the-body-element
order: 1
---

# `body` 元素标签

是定义文档的主体, 包含文档的所有内容（比如文本、超链接、图像、表格和列表等等。）

## 用法

```html
// 注意一个文档有且只有一个`<body>`标签
<html>
  <head></head>
  <body>
    子元素 or 文本内容
  </body>
</html>
```

## 子元素标签

>带有括号的元素必须满足括号内的条件才可以使用

1. metadata: `<style>`、`<link>`
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

> 以 on 开头的属性都是 javascript 中 DOM 事件对象
>
> navigator 是 javascript 中 BOM 对象之一
>
> 方法即函数

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 以下事件在该元素中比较特殊:

| 属性 | 值 | 描述 |
| --- | ---- | --- |
| `onafterprint` | javascript方法名 | 页面打印后或者打印对话框已经关闭 执行 JavaScript 定义的方法 打印快捷键 Ctrl + p |
| `onbeforeprint` | javascript方法名 | 在页面即将打印时执行 JavaScript 定义的方法 |
| `onbeforeunload` | javascript方法名 | 即将离开当前页面(刷新或关闭)时执行 JavaScript 定义的方法  |
| `onhashchange` | javascript方法名 | 当前 URL 的锚部分(以 '#' 号为开始) 发生改变时触发 JavaScript 定义的方法 |
| `onlanguagechange` | javascript方法名 | 当首选语言设置发生变化时触发 JavaScript 定义的方法 |
| `onmessage` | javascript方法名 | 当对象接收到 message 事件时触发 JavaScript 定义的方法 |
| `onoffline` | javascript方法名 | 浏览器离线工作时触发 JavaScript 定义的方法, 可使用 `navigator.onLine` 查询是否离线  |
| `ononline` | javascript方法名 | 浏览器在线工作时触发 JavaScript 定义的方法 |
| `onpagehide` | javascript方法名 | 用户从网页离开时执行 JavaScript 定义的方法 |
| `onpageshow` | javascript方法名 | 用户浏览网页时触发 JavaScript 定义的方法 |
| `onpopstate` | javascript方法名 | 浏览器某些行为下触发, 比如点击后退、前进按钮(或者在JavaScript中调用history.back()、history.forward()、history.go()方法). 触发 JavaScript 定义的方法 |
| `onrejectionhandled` | javascript方法名 | 当 `Promises` 失败 触发 JavaScript 定义的方法 |
| `onstorage` | javascript方法名 | 更改 localStorage 存储的值发生变化时 触发 JavaScript 定义的方法 |
| `onunhandledrejection` | javascript方法名 | 针对未处理的 Promise 拒绝而引发 JavaScript 定义的方法  |
| `onunload` | javascript方法名 | 当页面关闭后 触发 JavaScript 定义的方法 |

## CSS 默认样式

```css
body {
  display: block;
  margin: 8px;
}
```

## DOM 接口(IDL)

1. 基础 [HTMLElement]
1. 私有 [HTMLBodyElement]
1. `document.body` 查看当前文档中的 `<body>` 元素

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | `role='document'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
