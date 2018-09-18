---
title: <colgroup>
category: element
type: tabular-data
anchor: the-colgroup-element
order: 3
---

# `colgroup` 元素标签

对`<table>`元素中的列进行组合，以便对其进行格式化。

## 用法

```html
// 注意：如果在一个 <table> 元素存在 <caption>  元素则需要排在它之后且该标签有且只有一个存在
<table>
  <colgroup>
    子元素
  </colgroup>
</table>
```

## 子元素标签

带有括号的元素必须满足括号内的条件才可以使用

1. tabular: `<col>`(如果 `colgroup` 元素标签不存在属性`span`)
1. scripting: `<template>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `span` | | |

## CSS 默认样式

```css
colgroup {
  display: table-column-group;
}
```

## ARIA 无障碍阅读

没有任何角色和属性
