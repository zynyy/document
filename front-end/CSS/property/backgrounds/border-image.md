---
title: border-image
category: property
type: backgrounds
order: 9
anchor: the-border-image
---

# border-image 边框线绘制图像

该属性为简写属性(5种),给元素设置边框图形。5种属性分别为: `border-image-source`、`border-image-slice`、`border-image-width`、`border-image-outset`、`border-image-repeat`；

## 语法

注: ? 表示该属性值可选， / 表示如果需要此属性值则必须带上，[] 表示一组可选的属性值，|| 表示 [] 内的属性值任选其一，{} 表示 [] 内的属性值任选其中几个属性值并且用空格隔开。

```css
border-image: [
  <source>
  || [ <slice>
  || [ / <width> / <width>? ]
  || / <outset> ]?
  || <repeat>
]{1, 6}

eg:
border-image: url(https:www.example.com/xxx/demo.png); /* 设置 4 个方向边框线颜色为 red */
```

## 属性值

接受1~6个可选参数，每个参数取值如下：

1. [全局属性值](/front-end/CSS/values#anchor-值类型)
1. [source](/front-end/CSS/property/backgrounds/border-image-source)
1. [slice](/front-end/CSS/property/backgrounds/border-image-slice)
1. [width](/front-end/CSS/property/backgrounds/border-image-width)
1. [outset](/front-end/CSS/property/backgrounds/border-image-outset)
1. [repeat](/front-end/CSS/property/backgrounds/border-image-repeat)
