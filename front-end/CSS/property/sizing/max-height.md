---
title: max-height
category: property
type: sizing
anchor: max-size-properties
order: 3.2
---

# max-height

给元素设置最大高度。如果设置的`height`的属性值大于该属性(`max-height`)值时，不管该属性(`height`)值有没有`!important`都会按照该属性(`max-height`)值设置元素高度

## 语法

```css
max-height: [
  none
  || <length>
  || <percentage>
  || min-content
  || max-content
  || fit-content()
]

eg:
max-height: 100px; /* 设置 4 个方向边框线颜色为 red */
```

## 属性值

1. [全局属性值](/front-end/CSS/values#anchor-值类型)
1. [length](/front-end/CSS/values#anchor-值类型)
1. [percentage](/front-end/CSS/values#anchor-值类型)
1. `none`:
1. `min-content`:
1. `max-content`:
1. [fit-content()](/front-end/CSS/function/sizing/fit-content)
