---
title: <wbr>
category: element
type: textlevel-semantics
anchor: the-wbr-element
order: 31
---

# `wbr` 元素标签

表示浏览器会在适当的机会换行,不会导致上下行各一半的单词。在 UTF-8 中 代表 U+200B ZERO-WIDTH SPACE (零宽空格) 代码点。即想抹平兼容性只需`wbr::after {content: '\200b'}`

## 用法

```html
// 注意：通常紧跟在文章的符号后面。如果 父级元素 CSS 样式含有 work-break 属性则该标签无效
<wbr />
```

## 子元素标签

不存在任何子元素和文本内容

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)

## CSS 默认样式

不存在默认样式

## javascript

1. DOM: HTMLHtmlElement

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: 任何角色 <br> aria-*: 全局属性以及角色所对应的私有属性 |
