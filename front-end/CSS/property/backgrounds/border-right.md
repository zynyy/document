---
title: border-right
category: property
type: backgrounds
order: 4
---

# border-right 右边框线

该属性为复合属性(3个属性),给元素设置右边框。3个属性分别: `border-right-width`、`border-right-style`、`border-right-color`。

## 语法

```css
border-right: [<border-right-width> | <border-right-style> | <border-right-color>]{1, 3}

eg: /* 如果只写 1~ 2 参数，则剩下的2~1个参数的默认值是: initial */
border-right: 1px; /* 设置右边框线宽度 1px */
border-right: solid; /* 设置右边框线样式 solid */
border-right: red; /* 设置右边框线颜色 red */
border-right: 1px solid; /* 设置右边框线宽度、样式 1px solid */
border-right: 1px red; /* 设置右边框线宽度、颜色 1px red */
border-right: solid red; /* 设置右边框线样式、颜色 solid red */
border-right: 1px solid red; /* 设置右边框线宽度、样式、颜色分别为 1px solid red */
```

## 属性值

接受1~3个可选参数，每个参数取值如下：

1. [全局属性值](/front-end/CSS/values#anchor-值类型)
1. [border-right-width](/front-end/CSS/property/backgrounds/border-right-width)
1. [border-right-style](/front-end/CSS/property/backgrounds/border-right-style)
1. [border-right-color](/front-end/CSS/property/backgrounds/border-right-color)
