---
title: <link>
category: element
type: document-metadata
anchor: the-link-element
order: 4
---

# `link` 元素标签

链接到其他资源，如样式表，网站图标和联合供稿

## 用法

```html
<link herf='' type=''/>
```

## 子元素标签

> 不存在任何子元素和文本内容

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| --- | --- |--- |
| `herf` | URl | |
| `crossorigin` | URl | |
| `rel` | URl | |
| `rev` | URl | |
| `media` | [CSS 媒体查询]() | |
| `hreflang` | URl | |
| `type` | MIME类型 | |
| `sizes` | URl | |
| `nonce` | URl | |
| `referrerpolicy` | URl | |

## 嵌套规范

通常位于 `<head>` 标签之中, `<title>` 标签之下,该标签可以存在多个

## DOM 接口(IDL)

1. 基础 [HTMLElement]
1. 私有 [HTMLLinkElement]

## ARIA 无障碍阅读

>没有任何aria-*属性。

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| `href` | `role='link'` | Roles: 无。 <br> aria-*: 无 |
