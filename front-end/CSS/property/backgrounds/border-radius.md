---
title: border-radius
category: property
type: backgrounds
order: 7
---

# border-radius 圆角边框

该属性为复合属性(4个属性),给元素设置4角边框圆角。4个属性分别为: `border-top-left-radius`(左上角)、`border-top-right-radius`(右上角)、`border-bottom-right-radius`(右下角)、`border-bottom-left-radius`(左下角);

## 语法

> 注 ? 表示该参数可选, / 则表示如果需要此参数则必须带上

```css
border-radius: [<length> | <percentage> | [/ <length> | <percentage>]? ]{1, 4}

eg: /* 如果只写 1~ 2 参数，则剩下的2~1个参数的默认值是: initial */
border-radius: 1px; /* 元素4角边框圆角半径为 1px */
border-radius: 1px 2px; /* 元素左上角、右下角边框的圆角的水平、垂直半径为 1px, 右上角、左下角边框的圆角水平、垂直半径为 2px */
border-radius: 1px 2px 3px; /* 元素左上角边框的圆角的水平、垂直半径为 1px, 右上角、左下角边框的圆角水平、垂直半径为 2px, 右下角边框的圆角水平、垂直半径为 3px */
border-radius: 1px 2px 3px 4px; /* 元素左上角、右上角、右下角、左下角边框的圆角的水平、垂直半径分别为 1px 2px 3pxpx */

/* 符号(/)之前的值表示 水平半径，之后的表示垂直半径  */
border-radius: 1px / 2px; /* 元素4角边框的圆角的水平、垂直半径分别为 1px 2px */
border-radius: 1px 2px / 3px; /* 元素 左上角、右下角边框的圆角的水平半径为 1px, 右上角、左下角边框的圆角水平半径为 2px, 4角边框的圆角的垂直半径为 3px*/
border-radius: 1px 2px / 2px 3px; /* 元素 左上角、右下角边框的圆角的水平、垂直半径分别为 1px 2px, 右上角、左下角边框的圆角水平半径为 2px, 4角边框的圆角的水平、垂直半径为 2px 3px*/
border-radius: 1px / 1px 2px; /* 元素 4 角边框线的圆角水平半径都为 1px, 左上角、右下角边框的圆角垂直半径为 1px, 右上角、左下角边框的圆角垂直半径为 2px*/

...

border-radius: 1px 2px 3px 4px / 4px 3px 2px 1px; /* 元素左上角水平、垂直半径分别为 1px 4px, 右上角水平、垂直半径分别为 2px 3px,右下角水平、垂直半径分别为 3px 2px,左下角角水平、垂直半径分别为 4px 1px,*/
```

## 属性值

接受1~4个可选参数，每个参数取值如下：

1. [全局属性值](/front-end/CSS/values#anchor-值类型)
1. [length](/front-end/CSS/values#anchor-值类型)
1. [percentage](/front-end/CSS/values#anchor-值类型): 水平相对于元素宽度百分比,垂直相对于元素高度百分比
