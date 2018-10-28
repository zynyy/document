---
title: border-image-source
category: property
type: backgrounds
order: 9.1
---

# border-image-source

## 语法

```css
border-image-source: [ url() | linear-gradient() | none ]

eg:
border-image-source: url(https://www.example.com/test.png); /* 元素背景图象宽度、高度为 10px */
border-image-source: linear-gradient(red, green, blue); /* 元素背景图象宽度、高度为 10px */
```

## 属性值

1. `none`:
1. `url()`: 该函数接收参数为 uri(资源标识符);
1. `linear-gradient()`: 该函数可以接收多个[color](/front-end/CSS/values#anchor-值类型)作为参数
