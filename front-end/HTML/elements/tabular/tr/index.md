---
title: <tr>
category: element
type: tabular-data
anchor: the-tr-element
order: 8
---

# `tr` 元素标签

`<table>` 元素的行

## 用法

```html
<table>
  <thead>
    <tr>
      子元素
    </tr>
  </thead>
  or
  <tbody>
    <tr>
      子元素
    </tr>
  </tbody>
  or
  <tfoot>
    <tr>
      子元素
    </tr>
  </tfoot>
</table>
```

## 子元素标签

1. tabular: `<td>`、`<th>`
1. scripting: `<script>`、`<template>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)

## CSS 默认样式

```css
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | `role='row'` | Roles: 任何角色 <br> aria-*: 全局属性以及角色所对应的私有属性 |
