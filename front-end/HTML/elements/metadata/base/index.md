---
title: <base>
category: element
type: document-metadata
anchor: the-base-element
order: 6
---

# `base` 元素标签

为标签有`href`、`target`的属性设置默认的地址和目标

## 用法

```html
// 注意: 通常位于 <title> 标签之下
<base href=''/>
```

## 子元素标签

> 不存在任何子元素和文本内容，如果定义多个(href、target)重复属性那么属性的只有第一次定义的属性生效,其他无效

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| --- | --- | --- |
| `herf` | URL | 为元素标签属性`href`的值是相对地址提供的基础URL |
| `target` | `_self`、`_blank`、`_parent` or `_top` | `_parent` 和 `_top` 如果不是 `<iframe>`、`<object>` 元素标签引入的那么和 `_sele` 表现的一样 |

## CSS 默认样式

> 无 CSS 样式

## DOM 接口(IDL)

1. 基础 [HTMLElement]
1. 私有 [HTMLBaseElement]
1. `document.baseURI` 查询 `href` 属性值，如果没有设置 `href` 属性 那么该值与 `document.URL` 一样即浏览器中地址栏的值

## ARIA 无障碍阅读

>没有任何角色和属性
