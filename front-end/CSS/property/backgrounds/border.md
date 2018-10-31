---
title: border
category: property
type: backgrounds
order: 2
---

# border 边框线

该属性为简写属性(3种),给元素设置边框。3种属性分别: `border-width`、`border-style`、`border-color`。

## 语法

注: []表示一组可选的属性值，|| 表示 [] 内的属性值任选其一, {} 表示 [] 内的属性值任选其中几个属性值并且用空格隔开。

```css
border: [
  <border-width>
  || <border-style>
  || <border-color>
]{1, 3}

eg: /* 如果只写 1~ 2 参数，则剩下的2~1个参数的默认值是: initial */
border: 1px; /* 设置边框线宽度 1px */
border: solid; /* 设置边框线样式 solid */
border: red; /* 设置边框线颜色 red */
border: 1px solid; /* 设置边框线宽度、样式 1px solid */
border: 1px red; /* 设置边框线宽度、颜色 1px red */
border: solid red; /* 设置边框线样式、颜色 solid red */
border: 1px solid red; /* 设置边框线宽度、样式、颜色分别为 1px solid red */
```

## 属性值

接受1~3个可选参数，每个参数取值如下：

1. [全局属性值](/front-end/CSS/values#anchor-值类型)
1. [border-width](/front-end/CSS/property/backgrounds/border-width)
1. [border-style](/front-end/CSS/property/backgrounds/border-style)
1. [border-color](/front-end/CSS/property/backgrounds/border-color)
