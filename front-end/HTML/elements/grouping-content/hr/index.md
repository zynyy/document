---
title: <hr>
category: element
type: grouping-content
anchor: the-hr-element
order: 15
---

# `hr` 元素标签

段落级元素之间的主题转换。在浏览器上展示一条水平线。可通过 CSS 伪元素(::before 的 content)来改变水平线样式

## 用法

```html
<hr />
```

## 子元素标签

> 不存在任何子元素和文本内容

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)

## CSS 默认样式

```css
hr {
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
  border-style: inset;
  border-width: 1px;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | `role='separator'` | Roles: `role='presentation'` or `role='none'` <br> aria-*: 全局属性以及角色所对应的私有属性 |
