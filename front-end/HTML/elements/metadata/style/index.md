---
title: <style>
category: element
type: document-metadata
anchor: the-style-element
order: 5
---

# `style` 元素标签

文档中嵌入样式信息,每个文档可以多个该标签

## 用法

```html
<style>
  /* 定义 CSS 样式 */
  *, *::before, *::after {
    box-sizing: border-box;
  }
</style>
```

## 子元素标签

> 不存在任何子元素和文本内容，只能定义 CSS 样式

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | | 值 | 描述 |
| ---- | --- | --- |
| `media` | `all` | CSS媒体查询 | 规定媒体类型 |
| `type` | `text/css` | MIME类型 | 样式表的 MIME 类型 |

## 嵌套规范

通常位于 `<head>` 标签之中, `<title>`之下。该标签可存在多个

## DOM 接口(IDL)

1. 基础[HTMLElement]
1. 私有[HTMLStyleElement]

## ARIA 无障碍阅读

>没有任何角色和属性
