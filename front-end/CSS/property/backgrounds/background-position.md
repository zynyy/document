---
title: background-position
category: property
type: backgrounds
order: 8.3
---

# background-position 背景图像定位

给元素背景图像设置初始位置

## 语法

注: 符号 [] 表示一组值, | 表示 [] 内的任选其一, & 表示 前后两个[]内的值是必须, ?表示可选

```css
background-position: [
  [ top | right | bottom | left | center | [ <length> | <percentage> ]{1, 2} ]
  |
  [ left | center | right | <length> | <percentage> ]
  [ top | center | bottom | <length> | <percentage> ]
  |
  [ center | [
      [ left | right ] <length>? | <percentage>?
    ]
  ]
  &
  [ center | [
      [ top | bottom ] <length>? | <percentage>?
    ]
  ]
]

eg:
background-position: 10px; /* 元素背景图象宽度、高度为 10px */
background-position: 10px 20px; /* 元素背景图象宽度、高度分别为 10px 20px */
background-position: center; /* 元素背景图象宽度、高度分别为 10px 20px */
background-position: center bottom 10px; /* 元素背景图象宽度、高度分别为 10px 20px */
background-position: left 10px center; /* 元素背景图象宽度、高度分别为 10px 20px */
background-position: left right; /* 元素背景图象宽度、高度分别为 10px 20px */
```

## 属性值

1. [全局属性值](/front-end/CSS/values#anchor-值类型)
1. [length](/front-end/CSS/values#anchor-值类型)
1. [percentage](/front-end/CSS/values#anchor-值类型)
1. `top`:
1. `right`:
1. `bottom`:
1. `left`:
1. `center`:
