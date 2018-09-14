---
title: <title>
category: element
type: document-metadata
anchor: the-title-element
order: 3
---

# `title` 元素标签

是代表文档的标题或名称,显示在浏览器的标题栏或标签页上。

## 用法

```html
<title>
  TEXT 文本内容
</title>
```

## 子元素标签

> 不存在任何子元素, 只有文本内容

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)

## 嵌套规范

位于 `<head>` 标签之中, `<meta>` 之下。只能是文本内容。该标签如果不存在是 `<iframe>` 标签内嵌的网页那么有且只有一个且不存在嵌套的标签

## DOM 接口(IDL)

1. 基础 [HTMLElement]
1. 私有 [HTMLTitleElement]
1. `document.title` 查看当前文档标题

## ARIA 无障碍阅读

>没有任何角色和属性
