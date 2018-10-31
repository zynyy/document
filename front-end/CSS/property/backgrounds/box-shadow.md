---
title: box-shadow
category: property
type: backgrounds
order: 1
---

# box-shadow 阴影

给元素的边框添加阴影效果

## 语法

注: ? 表示该属性值可选，[] 表示一组可选的属性值，|| 表示 [] 内的属性值任选其一。&& 表示相邻属性值必须要有。

```css
box-shadow: [
  none
  || inset? && <length>{2, 4} && <color>?
]

eg:
box-shadow: none ; /* 取消元素阴影效果 */
box-shadow: 1px 1px; /* 元素外阴影分别往右、下移 1px */
box-shadow: 1px 1px red; /* 元素外阴影分别往右、下移 1px,颜色为 red */
box-shadow: inset 1px 1px; /* 元素内阴影分别往右、下移 1px */
box-shadow: inset 1px 1px red; /* 元素内阴影分别往右、下移 1px 颜色为 red */
box-shadow: inset 1px 1px 1px 1px red; /* 元素内阴影分别往右、下移 1px, 模糊半径 1px 扩散 1px 颜色为 red */
box-shadow: 1px 1px 1px 1px red; /* 元素外阴影分别往右、下移 1px, 模糊半径 1px 扩散 1px 颜色为 red */

/*可以声明多个阴影即英文逗号(,)隔开即可*/
box-shadow: 1px 1px, -1px -1px; /* 元素第一个阴影分别往右、下移 1px, 第二个阴影往左、上移 1px */
```

## 属性值

* [全局属性值](/front-end/CSS/values#anchor-值类型)
* `inset`: 内阴影即在元素边框线内部。默认是外阴影即元素边框线外部
* [length](/front-end/CSS/values#anchor-值类型): {2, 4}参数可选。如果第一、二参数两参数都是 0 则阴影存在元素底下,此时如果存在三个参数及以上则底下有模糊效果
  1. 第一个参数是 x(offset-x)轴(水平)偏移量, 负数往左边移，正数往右边移
  1. 第二个参数是 y(offset-y)轴(垂直)偏移量, 负数往上边移，整数往下边移。
  1. 第三个参数是 模糊半径,该值不可为负的
  1. 第四个参数是 负数 阴影紧缩,正数阴影扩散
* [color](/front-end/CSS/values#anchor-值类型)
