---
title: <select>
category: element
type: sec-forms
anchor: the-select-element
order: 5
---

# `select` 元素标签

是一种表单控件，可创建选项菜单,供用户选择

## 用法

```html
<select name=''>
  子元素
</select>
```

## 子元素标签

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

## CSS 默认样式

```css
select:not(:-internal-list-box) {
  overflow: visible !important;
}

select {
  display: inline-block;
  color: black;
  font: 400 13.3333px Arial;
  text-rendering: auto;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  align-items: center;
  margin: 0em;
  background-color: white;
  border-width: 1px;
  border-style: solid;
  border-radius: 0px;
  border-color: rgb(169, 169, 169);
  border-image: initial;
  white-space: pre;
  letter-spacing: normal;
  word-spacing: normal;
  cursor: default;
  writing-mode: horizontal-tb !important;
  box-sizing: border-box;
  -webkit-rtl-ordering: logical;
  appearance: menulist;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| 没有`multiple`属性且 属性`size`的值大于1 | `role='combobox'` | Roles: 任何角色。 <br> aria-*: 全局属性以及角色所对应的私有属性 |
| 具有`multiple`属性且 属性`size`的值大于1 | `role='listbox'` | Roles: 任何角色。 <br> aria-*: 全局属性以及角色所对应的私有属性 |
