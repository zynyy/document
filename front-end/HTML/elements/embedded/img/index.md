---
title: <img>
category: element
type: semantics-embedded-content
anchor: the-img-element
order: 3
---

# `img` 元素标签

## 基本结构

```html
<img src='' alt='' />
```

## 子元素标签

>该标签不存在任何子元素和文本内容

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `alt` | | |
| `src` | | |
| `srcset` | | |
| `sizes` | | |
| `crossorigin` | | |
| `usemap` | | |
| `ismap` | | |
| `width` | | |
| `height` | | |

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| `alt=''` | 无 | Roles: `role='presentation'` or `role='none'` <br> aria-*: `aria-hidden` |
| `alt='TEXT'` | `role='img'` | Roles: 除了`role='presentation'` or `role='none'`这两个角色之外的任何角色 <br> aria-*: 全局属性以及角色所对应的私有属性 |
