---
title: background-size
category: property
type: backgrounds
order: 8.4
---

# background-size 背景图像大小

给元素背景图像设置大小。

## 语法

注: []表示一组可选的属性值，|| 表示 [] 内的属性值任选其一，{} 表示 [] 内的属性值任选其中几个属性值并且用空格隔开。

```css
background-size: [
  [
    <length>
    || <percentage>
    || auto
  ]{1, 2}
  || cover
  || contain
]

eg:
background-size: 10px; /* 元素背景图象宽度、高度为 10px */
background-size: 10px 20px; /* 元素背景图象宽度、高度分别为 10px 20px */
```

## 属性值

1. [全局属性值](/front-end/CSS/values#anchor-值类型)
1. [length](/front-end/CSS/values#anchor-值类型)
1. [percentage](/front-end/CSS/values#anchor-值类型)
1. `auto`:
1. `cover`:
1. `contain`:
