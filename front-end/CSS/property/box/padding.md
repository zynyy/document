---
title: padding
category: property
type: box
anchor:
order: 6
---

# padding 内边距

该属性为复合属性(4个属性),给元素设置4个方向(上、右、下、左)的内边距即内容到边界的距离。4个属性分别: `padding-top`、`padding-right`、`padding-bottom`、`padding-left`。

## 语法

```css
padding: [<length> | <percentage>]{1, 4}

eg: /* 水平即左右，垂直即上下*/
padding: 1px; /* 给四个方向内边距设置 1px */
padding: 1px 2px; /* 分别给水平方向 垂直方向的内边距设置 1px 2px */
padding: 1px 2px 1px; /* 分别给 上方向 、水平方向、下方向的内边距设置 1px 2px 1px */
padding: 1px 2px 2px 3px; /* 分别给 上方向 、右方向、下方向、左方向的内边距设置 1px 2px 2px 3px*/
```

## 属性值

接受1~4个可选参数，每个参数取值如下：

1. [全局属性值](/front-end/CSS/values#anchor-值类型)
1. [length](/front-end/CSS/values#anchor-值类型)，注: 该值允许为负的
1. [percentage](/front-end/CSS/values#anchor-值类型)，注: 该值允许为负的
