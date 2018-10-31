---
title: font-size-adjust
category: property
type: fonts
order: 1.6
---

# font-size-adjust 统一字体族大小尺寸

给元素文本内容的字体族设置统一的 x 轴高度。因为不同的字体族的 x 轴高度不一。

## 语法

```css
font-size-adjust: [
  none
  || <number>
]

eg:
font-size-adjust: 0.5; /* 文本内容真实大小即 font-size 值的一半 */
```

## 属性值

* [全局属性值](/front-end/CSS/values#anchor-值类型)
* [number](/front-end/CSS/values#anchor-值类型): `font-size` 系数
* `none`: 不对`font-size`大小进行系数调整。
