---
title: <iframe>
category: element
type: semantics-embedded-content
acnhor: the-iframe-element
order: 6
---

# `iframe` 元素标签

## 基本结构

```html
<iframe src=''></iframe>
```

## 子元素标签

> 该标签不存在任何子元素和文本内容

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `src` | | |
| `srcdoc` | | |
| `name` | | |
| `sandbox` | | |
| `allowfullscreen` | | |
| `width` | | |
| `height` | | |

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: `role='application'`、`role='document'` or `role='img'` <br> aria-*: 全局属性以及角色所对应的私有属性 |
