---
title: box-sizing
category: property
type: sizing
anchor: box-sizing
order: 1
---

# box-sizing

给元素设置盒模型。盒模型宽高计算:

* 宽度: padding + border + content。即 水平方向内边距 + 水平方向宽度 + 文本宽度
* 高度: padding + border + content。即 垂直方向内边距 + 垂直方向宽度 + 文本宽度

## 语法

```css
box-sizing: [
  content-box
  || border-box
]

eg:
box-sizing: border-box; /* 设置 4 个方向边框线颜色为 red */
```

## 属性值

* [全局属性值](/front-end/CSS/values#anchor-值类型)
* `content-box`: `width`属性值不包含内边距 边框线宽度。
* `border-box`: `width`属性值包含内边距 边框线宽度。
