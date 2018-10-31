---
title: font
category: property
type: fonts
order: 1
anchor: font-prop
---

# font 字体

该属性为简写属性(7种),给元素文本内容设置字体属性。7种属性分别为: `font-style`、`font-variant`、`font-weight`、`font-stretch`、`font-size`、`line-height`、`font-family`。

## 语法

注: CSS2.1指的是该属性只能设置 2.1 版本的属性值， ? 表示该参数值可选， / 表示如果需要此参数则必须带上，[]表示一组可选的属性值，|| 表示 [] 内的属性值任选其一, {} 表示 [] 内的属性任选其中几个属性值

```css
font: [
  [
    [ <font-style> || <font-variant-CSS2.1> || <font-weight> || <font-stretch> ]?
    || <font-size>
    || [/ <line-height> ]?
    || <font-family>
  ]{1, 4}
  || caption
  || icon
  || menu
  || message-box
  || small-caption
  || status-bar
]

eg:
font: 100px / 1.5em; /* 设置 4 个方向边框线颜色为 red */
```

## 属性值

* [全局属性值](/front-end/CSS/values#anchor-值类型)
* [font-style](/front-end/CSS/property/fonts/font-style)
* [font-variant](/front-end/CSS/property/fonts/font-variant): 2.1 版本值是: `normal`、`small-caps`;
* [font-weight](/front-end/CSS/property/fonts/font-weight)
* [font-size](/front-end/CSS/property/fonts/font-size)
* [line-height](/front-end/CSS/property/CSS22/line-height)
* [font-family](/front-end/CSS/property/fonts/font-family)
* `caption`:
* `icon`:
* `menu`:
* `message-box`:
* `small-caption`:
* `status-bar`:
