---
title: background
category: property
type: backgrounds
order: 8
---

# background 背景

该属性为复合属性(8个属性),给元素设置背景。8个属性分别为: `background-color`、`background-image`、`background-position`、`background-size`、`background-repeat`、`background-attachment`、`background-clip`、`background-origin`;

## 语法

注: | 则表示几个参数任选其一 ? 表示该参数可选, / 则表示如果需要此参数则必须带上。

```css
background: [ <bg-color> | <bg-image> | <bg-position> </ bg-size>? | <bg-repeat> | <bg-attachment> | <bg-clip> | <bg-origin>]{1, 8}

eg:
background: red; /* 设置 元素背景颜色 */
background: url(URI); /* 设置 元素背景图片 */
background: center
```

## 属性值

接受1~8个可选参数，每个参数取值如下：

1. [全局属性值](/front-end/CSS/values#anchor-值类型)
1. [bg-color](/front-end/CSS/property/backgrounds/background-color)
1. [bg-image](/front-end/CSS/property/backgrounds/background-image)
1. [bg-position](/front-end/CSS/property/backgrounds/background-position)
1. [bg-size](/front-end/CSS/property/backgrounds/background-size)
1. [bg-repeat](/front-end/CSS/property/backgrounds/background-repeat)
1. [bg-attachment](/front-end/CSS/property/backgrounds/background-attachment)
1. [bg-clip](/front-end/CSS/property/backgrounds/background-clip)
1. [bg-origin](/front-end/CSS/property/backgrounds/background-origin)
