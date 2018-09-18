---
title: <table>
category: element
type: tabular-data
anchor: the-table-element
order: 1
---

# `table` 元素标签

表示表格数据

## 用法

```html
<table>
  子元素
</table>
```

## 子元素标签

1. tabular: `<caption>`、`<colgroup>`、`<thead>`、`<tbody>`、`<tfoot>`、`<tr>`
1. scripting: `<script>`、`<template>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `border` | | |

## CSS 默认样式

```css
table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: grey;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | `role='table'` | Roles: 任何角色 <br> aria-*: 全局属性以及角色所对应的私有属性 |
