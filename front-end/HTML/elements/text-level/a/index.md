---
title: <a> 元素标签
category: element
type: textlevel-semantics
anchor: the-a-element
order: 1
---

# `a` 元素标签

a 即 anchor 简写。如果具有属性 `href` 那么它就表示一个超链接(超文本瞄)。
如果不具有 `href` 属性,那么该元素表示一个占位符仅包含元素内容。

## 用法

```html
// 注意：子元素的子元素不许存在 <a> 元素标签即 <a> 元素后代不许在有任何 <a> 元素存在
// 如果父元素除了 <body> 、<ins>、<del> 之外其他元素则 <a> 元素标签不可存在 grouping 类型的元素
<a>
  子元素 or 文本内容
</a>
```

## 子元素标签

HTML4中只可以嵌套非`<a>`元素标签的行内标签。在 HTML5 中发生了变化(带有括号的元素必须满足括号内的条件才可以使用)

1. metadata: `<style>`、`<link>`
1. sections: `<article>`(子元素必须存在h2-6中的一个元素标签)、`<section>`(子元素必须存在h2-6中的一个元素标签)、`<nav>`、`<header>`、`<footer>`、`<aside>`、`<h1>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>`
1. grouping: `<address>`、`<blockquote>`、`<dl>`、`<div>`、`<figure>`、`<ol>`、`<ul>`、`<p>`、`<pre>`、`<hr>`
1. textLevel: `<abbr>`、`<b>`、`<bdi>`、`<bdo>`、`<br>`、`<cite>`、`<code>`、`<data>`、`<dfn>`、`<em>`、`<i>`、`<kdb>`、`<mark>`、`<q>`、`<ruby>`、`<s>`、`<samp>`、`<small>`、`<span>`、`<strong>`、`<sub>`、`<sup>`、`<time>`、`<u>`、`<var>`、`<wbr>`
1. edits: `<del>`、`<ins>`
1. embedded: `<picture>`、`<img>`(属性`usemap`不存在)、`<object>`、`<video>`(属性`controls`不存在)、`<audio>`(属性`controls`不存在)、`<map>`
1. tabular: `<table>`
1. forms: `<datalist>`、`<fieldset>`、`<form>`、`<meter>`、`<progress>`、`<output>`、`<input>`(属性`type`值是`hidden`)
1. interactive: `<dialog>`
1. scripting: `<script>`、`<canvas>`、`<template>`、`<noscript>`
1. SVGelement: `<svg>`
1. MathMLElement: `<math>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述|
| --- | --- | --- |
| `href` | URL | 规定链接的目标 URL |
| `target`| `_blank`, `_self`, `_parent`, `_top`, frameName | 规定在何处打开目标 URL。仅在 href 属性存在时使用,除了 `_blank`是在新窗口打开，其余的都是当前页面打开，设 frameName 则在 `iframe` 内打开  |
| `download` | filename | 指定下载文件名称 |
| `rel`| `alternate`, `author`, `bookmark`, `help`, `license`, `nofollow`, `noopener`, `noreferrerr`, `search`, `tag`, `next`, `prev`, | 规定当前文档与目标 URL之间关。仅在`href` 属性存在时使用, 各个值代表的含义[详见]|
| `rev` | | 规定目标 URL 与当前文档之间的关系 与 `rel`属性相反 |
| `hreflang` | language_code | 链接资源的语言, 仅在 `href` 属性存在时使用|
| `type` | MIME | 提示引用资源的 MIME 类型, 仅在 href 属性存在时使用|
| `referrerpolicy` | | 引用者策略 |

## CSS 默认样式

```css
// 注意: 如果不存在属性 href 则不存在默认样式
a:any-link {
  color: rgb(0, 0, 238);
  cursor: pointer;
  text-decoration: underline;
}

a:any-link:active {
  color: rgb(255, 0, 0);
}
```

### 伪类

1. a:link // 未访问过
1. a:visited // 已访问过
1. a:hover // 鼠标悬浮上方
1. a:active // 鼠标点击
1. a:any-link // 超链接

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| 存在`href` | `role='link'` | Roles: `role='button'`、`role='checkbox'`、`role='menuitem'`、<wbr> `role='menuitemcheckbox'`、`role='menuitemradio'`、`role='option'`、`role='radio'`、`role='switch'`、`role='tab'` or `orle=treeitem`。<br> aria-*: 全局属性以及角色所对应的私有属性 |
| 不存在`href` | | Roles: 任何角色 <br> aria-*: 全局属性以及角色所对应的私有属性 |

## Demo

[详见]: https://www.w3.org/TR/2017/REC-html52-20171214/links.html#sec-link-types
