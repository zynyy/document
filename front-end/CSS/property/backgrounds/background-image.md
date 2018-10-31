---
title: background-image
category: property
type: backgrounds
order: 8.2
---

# background-image 背景图像

给元素设置背景图像。

## 语法

注: []表示一组可选的属性值，|| 表示 [] 内的属性值任选其一。{} 表示 [] 内的属性值任选其中几个属性值并且用空格隔开。

```css
background-image: [
  <image>
  || none
]

eg:
background-image: url(https://www.example.com/test.png); /* 元素背景图象宽度、高度为 10px */
background-image: linear-gradient(red, green, blue); /* 元素背景图象宽度、高度为 10px */
/* 可以设置多个背景图像用英文逗号(,)隔开*/
background-image: url(), linear-gradient();
```

## 属性值

1. `none`:
1. [image](/front-end/CSS/values#anchor-值类型)
