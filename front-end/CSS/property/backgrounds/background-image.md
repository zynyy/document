---
title: background-image
category: property
type: backgrounds
order: 8.2
---

# background-image 背景图像

给元素设置背景图像。

## 语法

```css
background-image: [ url() | linear-gradient() | none ]

eg:
background-image: url(https://www.example.com/test.png); /* 元素背景图象宽度、高度为 10px */
background-image: linear-gradient(red, green, blue); /* 元素背景图象宽度、高度为 10px */
/* 可以设置多个背景图像用英文逗号(,)隔开*/
background-image: url(), linear-gradient();
```

## 属性值

1. `none`:
1. `url()`: 该函数接收参数为 uri(资源标识符);
1. `linear-gradient()`: 该函数可以接收多个[color](/front-end/CSS/values#anchor-值类型)作为参数
