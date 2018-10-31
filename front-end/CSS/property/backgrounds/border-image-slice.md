---
title: border-image-slice
category: property
type: backgrounds
order: 9.2
anchor: the-border-image-slice
---

# border-image-slice

给元素边框设置图像之后进行切割为 9 个区域: 4边、4角以及中心;

## 语法

注: []表示一组可选的属性值，|| 表示 [] 内的属性值任选其一，{} 表示 [] 内的属性值任选其中几个属性值并且用空格隔开，? 表示此属性值可选。

```css
border-image-slice: [
  [
    <number>
    || <percentage>
  ]{1, 4}
  && fill?
]

eg:
border-image-slice: 20px; /* 设置 4 个方向边框线颜色为 red */
border-image-slice: 10 20px; /* 设置 4 个方向边框线颜色为 red */
border-image-slice: 10px 20px 15px; /* 设置 4 个方向边框线颜色为 red */
border-image-slice: 10px 20px 15px 25px; /* 设置 4 个方向边框线颜色为 red */
```

## 属性值

接受1~4个可选参数，每个参数取值如下：

1. [全局属性值](/front-end/CSS/values#anchor-值类型)
1. [number](/front-end/CSS/values#anchor-数字类型定义)
1. [percentage](/front-end/CSS/values#anchor-值类型)
1. `fill`:
