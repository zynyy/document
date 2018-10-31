---
title: background-repeat
category: property
type: backgrounds
order: 8.5
---

# background-repeat 背景图像重复方式

给元素设置背景图片重复方式

## 语法

注: []表示一组可选的属性值，|| 表示 [] 内的属性值任选其一，{} 表示 [] 内的属性值任选其中几个属性值并且用空格隔开。

```css
background-repeat: [
  repeat-x
  || repeat-y
  || [
    repeat
    || space
    || round
    || no-repeat
  ]{1, 2}
]

eg:
background-repeat: repeat-x; /* 元素背景图像沿着 x 轴方向重复直到*/
background-repeat: repeat space; /* */
```

## 属性值

> 可接受{1, 2}个参数, 第一个参数表示 水平重复行为、第二个参数表示 垂直重复行为。如果只有一个参数则表示水平和垂直相同。但是并不包括 `repeat-x`、`repeat-y`这两个值是因为它们本身就有两个值行为;

1. [全局属性值](/front-end/CSS/values#anchor-值类型)
1. `repeat-x`: 沿着 x 轴方向重复直到填满元素盒子大小, 相当于 `repeat no-repeat`
1. `repeat-y`: 沿着 y 轴方向重复, 相当于 `no-repeat repeat`
1. `repeat`: 沿着 x,y 轴方向重复直到填满元素盒子大小,如果最后一个图像大小不正好合适则会被裁剪
1. `no-repeat`: 不重复图像
1. `space`: 不重复
1. `round`: 不重复
