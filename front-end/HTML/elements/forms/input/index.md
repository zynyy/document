---
title: <input>
category: element
type: sec-forms
anchor: the-input-element
order: 3
---

# `input` 元素标签

## 用法

```html
<input type='' name='' value='' plceholder=''/>
```

## 子元素标签

>该标签不存在任何子元素，文本内容请用属性`value`来设置

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 类型 | 值 | 描述 |
| --- | --- | --- | --- |
| `maxlength` | | | |
| `minlength` | | | |
| `size` | | | |
| `readonly` | | | |
| `required` | | | |
| `multiple` | | | |
| `pattern` | | | |
| `min` | | | |
| `max` | | | |
| `step` | | | |
| `list` | | | |
| `placeholder` | | | |

## DOM API

当 input 元素标签 `type=file`的时候可以通过 `new fileRender();` 来操作文件。

## ARIA 无障碍阅读

>全局属性、全部角色 请到 [ARIA] 页面查看

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| `type='hidden'` | 无 | Roles: 无 <br> aria-*: 无 |
| `type='text'` 且不存在属性`list` | `role='textbox'` | Roles: `role='combobox'`、`role='searchbox'` or `role='spinbutton'`。` <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='text'` 且存在属性`list` | `role='combobox'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='search'` 且不存在属性`list` | `role='searchbox'` | Roles: 无。` <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='search'` 且存在属性`list` | `role='combobox'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='tel'` 且不存在属性`list` | `role='textbox'` | Roles: 无。` <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='tel'` 且存在属性`list` | `role='combobox'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='url'` 且不存在属性`list` | `role='textbox'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='url'` 且存在属性`list` | `role='combobox'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='email'`且不存在属性`list` | `role='textbox'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='email'` 且存在属性`list` | `role='combobox'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='password'` | 无 | Roles: 无 <br> aria-*: 全局属性以及`aria-required` |
| `type='date'` | 无 | Roles: 无 <br> aria-*: 全局属性 |
| `type='month'` | 无 | Roles: 无 <br> aria-*: 全局属性 |
| `type='week'` | 无 | Roles: 无 <br> aria-*: 全局属性 |
| `type='time'` | 无 | Roles: 无 <br> aria-*: 全局属性 |
| `type='number'` | `role='spinbutton'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='range'` | `role='slider'` | Roles: 无。` <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='color'` | 无 | Roles: 无 <br> aria-*: 全局属性 |
| `type='checkbox'` | `role='checkbox'` | Roles: `role='button'`、`role='menuitemcheckbox'`、`role='option'`、or `role='switch'`。<br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='radio'` | `role='radio'` | Roles: `role='menuitemradio'` <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='file'` | 无 | Roles: 无 <br> aria-*: 全局属性 |
| `type='submit'` | `role='button'` | Roles: 无。` <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='image'` | `role='button'` | Roles: `role='link'`、`role='menuitem'`、`role='menuitemcheckbox'`、`role='menuitemradio'`、`role='radio'` or `role='switch'` <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='reset'` | `role='button'` | Roles: 无。` <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='button'` | `role='button'` | Roles: `role='link'`、`role='menuitem'`、`role='menuitemcheckbox'`、`role='menuitemradio'`、`role='option'`、`role='radio'`、`role='switch'`、 or `role='tab'` <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='datetime-local'` | 无 | Roles: 无 <br> aria-*: 全局属性 |













