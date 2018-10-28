---
title: transform
category: property
type: transforms
order: 1
---

# transform

元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。

## 语法

注: list 代表可以存在多个，且用空格隔开

```css
transform: [ <2d-list> | <3d-list> | none ]

eg: /* 水平即左右，垂直即上下*/
transform: translate(10%, 20%); /* 给四个方向外边距设置 1px */
```

## 属性值

* 2d-list
  1. matrix()
  1. translate()
  1. translateX()
  1. translateY()
  1. scale()
  1. scaleX()
  1. scaleY()
  1. rotate()
  1. skew()
  1. skewX()
  1. skewY()
* 3d-list
  1. matrix3d()
  1. translate3d()
  1. translateZ()
  1. scale3d()
  1. scaleZ()
  1. rotate3d()
  1. rotateX()
  1. rotateY()
  1. rotateZ()
  1. perspective()
