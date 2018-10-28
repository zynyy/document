---
title: border-top
category: property
type: backgrounds
order: 3
---

# border-top 上边框线

该属性为复合属性(3个属性),给元素设置上边框。3个属性分别: `border-top-width`、`border-top-style`、`border-top-color`。

## 语法

```css
border-top: [<border-top-width> | <border-top-style> | <border-top-color>]{1, 3}

eg: /* 如果只写 1~ 2 参数，则剩下的2~1个参数的默认值是: initial */
border-top: 1px; /* 设置上边框线宽度 1px */
border-top: solid; /* 设置上边框线样式 solid */
border-top: red; /* 设置上边框线颜色 red */
border-top: 1px solid; /* 设置上边框线宽度、样式 1px solid */
border-top: 1px red; /* 设置上边框线宽度、颜色 1px red */
border-top: solid red; /* 设置上边框线样式、颜色 solid red */
border-top: 1px solid red; /* 设置上边框线宽度、样式、颜色分别为 1px solid red */
```

## 属性值

接受1~3个可选参数，每个参数取值如下：

1. [全局属性值](/front-end/CSS/values#anchor-值类型)
1. [border-top-width](/front-end/CSS/property/backgrounds/border-top-width)
1. [border-top-style](/front-end/CSS/property/backgrounds/border-top-style)
1. [border-top-color](/front-end/CSS/property/backgrounds/border-top-color)
