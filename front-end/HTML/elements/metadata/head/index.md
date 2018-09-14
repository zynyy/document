---
title: <head>
category: element
type: document-metadata
anchor: the-head-element
order: 1
---

# `head` 元素标签

是文档元数据的容器。容器内可以定义文档的标题、脚本和样式表等。

## 用法

```html
// 注意一个文档有且只有一个 <head> 标签。
<html>
  <head>
    子元素
  </head>
</html>
```

## 子元素标签

1. metadata: `<meta>`、`<title>`、`<link>`、`<style>`、`<base>`
1. scripting: `<script>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)

## DOM 接口(IDL)

1. 基础 [HTMLElement]
1. 私有 [HTMLHeadElement]
1. `document.head` 查看当前文档中的 `<head>` 元素

## ARIA 无障碍阅读

>没有任何属性和角色
