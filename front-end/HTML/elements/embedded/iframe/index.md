---
title: <iframe>
category: element
type: semantics-embedded-content
anchor: the-iframe-element
order: 6
---

# `iframe` 元素标签

嵌套的浏览上下文，有效地将另一个HTML页面嵌入到当前页面中。

## 用法

```html
<iframe src=''></iframe>
```

## 子元素标签

该标签不存在任何子元素和文本内容

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

## CSS 默认样式

```css
iframe {
  border-width: 2px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: `role='application'`、`role='document'` or `role='img'` <br> aria-*: 全局属性以及角色所对应的私有属性 |
