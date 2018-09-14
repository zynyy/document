---
title: <option>
category: element
type: sec-forms
anchor: the-option-element
order: 8
---

# `option` 元素标签

## 用法

```html
<select>
  <option>
    文本内容
  </option>
  or
  <optgroup>
    <option>
      文本内容
    </option>
  </optgroup>
</select>
or
<datalist>
  <option>
    文本内容
  </option>
</datalist>
```

## 子元素标签

>不存在任何子元素标签

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `disabled` | | |
| `label` | | |
| `selected` | | |
| `value` | | |

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | `role='option'` | Roles: `role='separator'`。 <br> aria-*: 全局属性以及角色所对应的私有属性 |
