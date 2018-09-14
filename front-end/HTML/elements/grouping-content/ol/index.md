---
title: <ol>
category: element
type: grouping-content
anchor: the-ol-element
order: 5
---

# `ol` 元素标签

## 用法

```html
<ol>
  子元素
</ol>
```

## 子元素标签

1. grouping: `<li>`
1. scripting: `<script>`、`<template>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `reversed` | URL | 引用路径 |
| `start` | URL | 引用路径 |
| `type` | URL | 引用路径 |

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | `role='list'` | Roles: `role='directory'`、`role='group'`、`role='listbox'`、`role='menubar'`、`role='predentation'`、`role='radiogroup'`、`role='tablist'`、`role='toolbar'` or `role='tree'`。 <br> aria-*: 全局属性以及角色所对应的私有属性 |
