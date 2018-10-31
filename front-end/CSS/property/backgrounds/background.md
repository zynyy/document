---
title: background
category: property
type: backgrounds
order: 8
---

# background 背景

该属性为简写属性(8种),给元素设置背景。8种属性分别为: `background-color`、`background-image`、`background-position`、`background-size`、`background-repeat`、`background-attachment`、`background-clip`、`background-origin`;

## 语法

注: ? 表示该属性值可选， / 表示如果需要此属性值则必须带上，[] 表示一组可选的属性值，|| 表示 [] 内的属性值任选其一，{} 表示 [] 内的属性值任选其中几个属性值并且用空格隔开。

```css
background: [
  <bg-color>
  || <bg-image>
  || <bg-position> / <bg-size>?
  || <bg-repeat>
  || <bg-attachment>
  || <bg-clip>
  || <bg-origin>
]{1, 7}

eg:
background: red; /* 设置 元素背景颜色 */
background: url(URI); /* 设置 元素背景图片 */
background: center
```

## 属性值

接受1~7个可选参数，每个参数取值如下：

1. [全局属性值](/front-end/CSS/values#anchor-值类型)
1. [bg-color](/front-end/CSS/property/backgrounds/background-color)
1. [bg-image](/front-end/CSS/property/backgrounds/background-image)
1. [bg-position](/front-end/CSS/property/backgrounds/background-position)
1. [bg-size](/front-end/CSS/property/backgrounds/background-size)
1. [bg-repeat](/front-end/CSS/property/backgrounds/background-repeat)
1. [bg-attachment](/front-end/CSS/property/backgrounds/background-attachment)
1. [bg-clip](/front-end/CSS/property/backgrounds/background-clip)
1. [bg-origin](/front-end/CSS/property/backgrounds/background-origin)
