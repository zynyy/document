---
title: <optgroup>
category: element
type: sec-forms
anchor: the-optgroup-element
order: 7
---

# `optgroup` 元素标签

创建包含在一个`<select>`元素中的一组选项

## 用法

```html
<select>
  <optgroup label=''>
    子元素
  </optgroup>
</select>
```

## 子元素标签

1. forms: `<option>`
1. scripting: `<script>`、`<template>`

## 属性

> 拥有全局属性

| 属性 | 类型 | 值 | 描述 |
| --- | --- | --- | --- |
| `disabled` |
| `label` |

## CSS 默认样式

```css
optgroup {
  font-weight: bolder;
  display: block;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: 无。 <br> aria-*: 全局属性 |
