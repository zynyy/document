---
title: <dl>
category: element
type: grouping-content
anchor: the-dl-element
order: 8
---

# `dl` 元素标签

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

## 子元素

1. grouping: `<div>`、`<dt>`、`<dd>`
1. scripting: `<script>`、`<template>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: `role='group'`、`role='list'`、`role='presentation'` or `role='none'` <br> aria-*: 全局属性以及角色所对应的私有属性 |
