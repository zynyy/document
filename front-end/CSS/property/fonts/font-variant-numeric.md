---
title: font-variant-numeric
category: property
type: fonts
order: 1.24
anchor: font-variant-numeric-prop
---

# font-variant-numeric 字体数学控制

给元素文本内容(数学、分数)设置样式

## 语法

```css
font-variant-numeric: [
  normal
  || <lining-nums>
  || <numeric-figure-values>
  || <numeric-spacing-values>
  || <numeric-fraction-values>
  || ordinal
  || slashed-zero
]

eg:
font-variant-numeric: normal;
```

## 属性值

* [全局属性值](/front-end/CSS/values#anchor-值类型)
* numeric-figure-values:
  1. `lining-nums`: OpenType字体特征: 'lnum'
  1. `oldstyle-nums`: OpenType字体特征: 'onum'
* numeric-spacing-values:
  1. `proportional-nums`: OpenType字体特征: 'pnum'
  1. `tabular-nums`: OpenType字体特征: 'tnum'
* numeric-fraction-values:
  1. `diagonal-fractions`: OpenType字体特征: 'frac'
  1. `stacked-fractions`: OpenType字体特征: 'afrc'
* `ordinal`: OpenType字体特征: 'ordn'
* `slashed-zero`: OpenType字体特征: 'zero'
