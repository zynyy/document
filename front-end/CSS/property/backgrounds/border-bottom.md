---
title: border-bottom
category: property
type: backgrounds
order: 5
---

# border-bottom 下边框线

该属性为复合属性(3个属性),给元素设置下边框。3个属性分别: `border-bottom-width`、`border-bottom-style`、`border-bottom-color`。

## 语法

```css
border-bottom: [<border-bottom-width> | <border-bottom-style> | <border-bottom-color>]{1, 3}

eg: /* 如果只写 1~ 2 参数，则剩下的2~1个参数的默认值是: initial */
border-bottom: 1px; /* 设置下边框线宽度 1px */
border-bottom: solid; /* 设置下边框线样式 solid */
border-bottom: red; /* 设置下边框线颜色 red */
border-bottom: 1px solid; /* 设置下边框线宽度、样式 1px solid */
border-bottom: 1px red; /* 设置下边框线宽度、颜色 1px red */
border-bottom: solid red; /* 设置下边框线样式、颜色 solid red */
border-bottom: 1px solid red; /* 设置下边框线宽度、样式、颜色分别为 1px solid red */
```

## 属性值

接受1~3个可选参数，每个参数取值如下：

1. [全局属性值](/front-end/CSS/values#anchor-值类型)
1. [border-bottom-width](/front-end/CSS/property/backgrounds/border-bottom-width)
1. [border-bottom-style](/front-end/CSS/property/backgrounds/border-bottom-style)
1. [border-bottom-color](/front-end/CSS/property/backgrounds/border-bottom-color)
