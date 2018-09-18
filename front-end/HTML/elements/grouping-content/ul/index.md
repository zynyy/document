---
title: <ul>
category: element
type: grouping-content
anchor: the-ul-element
order: 4
---

# `ul` 元素标签

多项的无序列表，即无数值排序项的集合，且它们在列表中的顺序是没有意义的。通常情况下，无序列表项的头部可以是几种形式，如一个点，一个圆形或方形，亦可通过 CSS 的 lists 模块 中的 `list-style-type` 进行更改

## 用法

```html
<ul>
  子元素
</ul>
```

## 子元素

1. grouping: `<li>`
1. scripting: `<script>`、`<template>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)

## CSS 默认样式

```css
ul {
  display: block;
  list-style-type: disc;
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
