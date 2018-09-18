---
title: <tfoot>
category: element
type: tabular-data
anchor: the-tfoot-element
order: 7
---

# `tfoot` 元素标签

`<table>`元素的页脚内容。

## 用法

```html
// 注意：如果 <table> 元素存在 <caption>、`<colgroup>`、`<thead>`、`<tbody>` 元素则需要排在它之后
<table>
  <tfoot>
    子元素
  </tfoot>
</table>
```

## 子元素标签

1. tabular: `<tr>`
1. scripting: `<script>`、`<template>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)

## CSS 默认样式

```css
tfoot {
  display: table-footer-group;
  vertical-align: middle;
  border-color: inherit;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | `role='rowgroup'` | Roles: 任何角色 <br> aria-*: 全局属性以及角色所对应的私有属性 |
