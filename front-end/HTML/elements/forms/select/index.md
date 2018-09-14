---
title: <select>
category: element
type: sec-forms
anchor: the-select-element
order: 5
---

# `select` 元素标签

## 用法

```html
<select>
  子元素
</select>
```

## 子元素

1. forms: `<optgroup>`、`<option>`
1. scrpting: `<script>`、`<template>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `autofocus` | | |
| `disabled` | | |
| `form` | | |
| `multiple` | | |
| `name` | | |
| `required` | | |
| `size` | | |

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| 没有`multiple`属性且 属性`size`的值大于1 | `role='combobox'` | Roles: 任何角色。 <br> aria-*: 全局属性以及角色所对应的私有属性 |
| 具有`multiple`属性且 属性`size`的值大于1 | `role='listbox'` | Roles: 任何角色。 <br> aria-*: 全局属性以及角色所对应的私有属性 |
