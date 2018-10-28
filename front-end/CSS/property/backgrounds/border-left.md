---
title: border-left
category: property
type: backgrounds
order: 6
---

# border-left 左边框线

该属性为复合属性(3个属性),给元素设置左边框。3个属性分别: `border-left-width`、`border-left-style`、`border-left-color`。

## 语法

```css
border-left: [<border-left-width> | <border-left-style> | <border-left-color>]{1, 3}

eg: /* 如果只写 1~ 2 参数，则剩下的2~1个参数的默认值是: initial */
border-left: 1px; /* 设置左边框线宽度 1px */
border-left: solid; /* 设置左边框线样式 solid */
border-left: red; /* 设置左边框线颜色 red */
border-left: 1px solid; /* 设置左边框线宽度、样式 1px solid */
border-left: 1px red; /* 设置左边框线宽度、颜色 1px red */
border-left: solid red; /* 设置左边框线样式、颜色 solid red */
border-left: 1px solid red; /* 设置左边框线宽度、样式、颜色分别为 1px solid red */
```

## 属性值

接受1~3个可选参数，每个参数取值如下：

1. [全局属性值](/front-end/CSS/values#anchor-值类型)
1. [border-left-width](/front-end/CSS/property/backgrounds/border-left-width)
1. [border-left-style](/front-end/CSS/property/backgrounds/border-left-style)
1. [border-left-color](/front-end/CSS/property/backgrounds/border-left-color)
