---
title: <dialog>
category: element
type: interactive-elements
anchor: the-dialog-element
version:
  start: 5.2
  end: ''
order: 1
---

# `dialog` 元素标签

一个对话框或其他交互式组件,如一些警告框之类的

> 该标签在 HTML5.2 标准新加入的。如需兼容请下载[dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill)

## 用法

```html
<dialog>
  子元素 or 文本内容
</dialog>
```

## 子元素标签

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

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `open` | URL | 引用路径 |

## CSS 默认样式

```css
// 没有属性 open 是隐藏的
dialog:not([open]) {
  display: none;
}

dialog {
  display: block;
  position: absolute;
  left: 0px;
  right: 0px;
  width: fit-content;
  height: fit-content;
  color: black;
  margin: auto;
  border-width: initial;
  border-style: solid;
  border-color: initial;
  border-image: initial;
  padding: 1em;
  background: white;
}
// ::backdrop 是伪元素
dialog::backdrop {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.1);
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | `role='dialog'` | Roles: `alertdialog` <br> aria-*: 全局属性以及角色所对应的私有属性 |
