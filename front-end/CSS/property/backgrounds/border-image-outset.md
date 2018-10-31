---
title: border-image-outset
category: property
type: backgrounds
order: 9.4
anchor: the-border-image-outset
---

# border-image-outset

给元素设置边框图象可以超出边框盒的大小。

## 语法

注: []表示一组可选的属性值，|| 表示 [] 内的属性值任选其一，{} 表示 [] 内的属性值任选其中几个属性值并且用空格隔开。

```css
border-image-outset: [
  <length>
  || <percentage>
]{1, 4}

eg:
border-image-outset: 20px; /* 设置 4 个方向边框线颜色为 red */
border-image-outset: 10 20px; /* 设置 4 个方向边框线颜色为 red */
border-image-outset: 10px 20px 15px; /* 设置 4 个方向边框线颜色为 red */
border-image-outset: 10px 20px 15px 25px; /* 设置 4 个方向边框线颜色为 red */
```

## 属性值

接受1~4个可选参数，每个参数取值如下：

1. [全局属性值](/front-end/CSS/values#anchor-值类型)
1. [length](/front-end/CSS/values#anchor-值类型)
1. [percentage](/front-end/CSS/values#anchor-值类型)
