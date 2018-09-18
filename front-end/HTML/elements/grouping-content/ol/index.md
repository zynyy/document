---
title: <ol>
category: element
type: grouping-content
anchor: the-ol-element
order: 5
---

# `ol` 元素标签

表示多个有序列表项，通常渲染为有带编号的列表。可以通过 设置 属性 `type` 更改编号,亦可通过 CSS 的 lists 模块 中的 `list-style-type` 进行更改。更可以通过 CSS 的 `@counter-styles` 规则定制编号

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

## CSS 默认样式

```css
ol {
  display: block;
  list-style-type: decimal;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | `role='list'` | Roles: `role='directory'`、`role='group'`、`role='listbox'`、`role='menubar'`、`role='predentation'`、`role='radiogroup'`、`role='tablist'`、`role='toolbar'` or `role='tree'`。 <br> aria-*: 全局属性以及角色所对应的私有属性 |
