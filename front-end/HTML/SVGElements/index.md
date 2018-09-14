---
title: SVG矢量图形
order: 9
---

# SVG 介绍

SVG 是一种基于 XML 语法的图像格式，全称是可缩放矢量图（Scalable Vector Graphics）。其他图像格式都是基于像素处理的，SVG 则是属于对图像的形状描述。

## 使用方式

1. 直接浏览器打开
1. 在HTML中使用 `<img scr='svg存储路径'>`、`<object data='svg存储路径'>`、`<iframe src='svg存储路径'>`、`<embed src='svg存储路径'>` 等元素标签引入
1. 直接在HTML中使用`<svg>`元素标签
1. 作为 CSS 中 `backgroup-image` 的值

## 优点

1. 矢量的图形,可任意伸缩且不失真
1. 与jpg、gif图像比起就尺寸更小,且压缩性更强
1. 在任何分辨率下都可以被高质量打印

## 丰富的标签

1. 绘制圆形的`<circle>`元素标签
1. 绘制直线的`<line>`元素标签
1. 绘制折线的`<polyline>`元素标签
1. 绘制矩形的`<rect>`元素标签
1. 绘制椭圆的`<ellipse>`元素标签
1. 绘制多边形的`<polygon>`元素标签
1. 制作路径的`<path>`元素标签
1. 语言描述的`<text>`元素标签
1. 复制形状的`<use>`元素标签
1. 还可以自定义形状的`<defs>`元素标签

更多标签请查看左侧的 SVGElement

## SVG图标来源

1. 可以用任何文本编辑器创建。
1. 使用绘图程序，如Inkscape、Adobe Illustrator，更方便地创建SVG图像。
1. 国内阿里系的 <http://iconfont.cn/> 进行下载
1. 国外的 <https://icomoon.io/> 进行下载
