---
title: <picture>
category: element
type: semantics-embedded-content
anchor: the-picture-element
order: 1
---

# `picture` 元素标签

是一个容器,用来为`<img>`元素提供多样的 `<source>` 元素。浏览器会根据当前页面（即图片所在的盒子的容器）的布局以及当前浏览的设备（比如普通的屏幕和高清屏幕）去从中选择最合适的资源。

## 用法

```html
// 注意: 子元素必须有且只有一个 <img>
<picture>
  <img src='' alt=''/>
  <source src=''/>
</picture>
```

## 子元素标签

1. embedded: `<img>`、`<source>`
1. scripting: `<script>`、`<template>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)

## CSS 默认样式

不存在任何默认样式

## ARIA 无障碍阅读

没有任何 ARIA 角色、属性
