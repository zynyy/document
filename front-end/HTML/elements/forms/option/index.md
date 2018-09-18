---
title: <option>
category: element
type: sec-forms
anchor: the-option-element
order: 8
---

# `option` 元素标签

`<select>` 元素中的选项,亦或者是 `<detalist>` 元素中的列表

## 用法

```html
<select>
  <option value=''>
    文本内容
  </option>
  or
  <optgroup>
    <option value=''>
      文本内容
    </option>
  </optgroup>
</select>
or
<datalist>
  <option value=''>
    文本内容
  </option>
</datalist>
```

## 子元素标签

不存在任何子元素标签

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `disabled` | | |
| `label` | | |
| `selected` | | |
| `value` | | |

## CSS 默认样式

```css
option {
  font-weight: normal;
  display: block;
  white-space: pre;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | `role='option'` | Roles: `role='separator'`。 <br> aria-*: 全局属性以及角色所对应的私有属性 |
