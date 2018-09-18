---
title: <dl>
category: element
type: grouping-content
anchor: the-dl-element
order: 8
---

# `dl` 元素标签

零或多个术语描述组的描述列表。每个术语描述组由一个或多个术语(`<dt>`)以及一个或多个描述(`<dd>`),亦可使用`<div>`但二者不可共存

## 用法

```html
// 要么
<dl>
  <dt></dt>
  <dd></dd>
</dl>

// 就

<dl>
  <div></div>
</dl>

// 以上两者不可同时存在
```

## 子元素标签

1. grouping: `<div>`、`<dt>`、`<dd>`
1. scripting: `<script>`、`<template>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)

## CSS 默认样式

```css
dl {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: `role='group'`、`role='list'`、`role='presentation'` or `role='none'` <br> aria-*: 全局属性以及角色所对应的私有属性 |
