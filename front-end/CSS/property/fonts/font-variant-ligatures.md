---
title: font-variant-ligatures
category: property
type: fonts
order: 1.21
anchor: propdef-font-variant-ligatures
---

# font-variant-ligatures 连体字母

给元素文本内容(英文字母)设置连字。

## 语法

注: []表示一组可选的属性值，|| 表示 [] 内的属性值任选其一。

```css
font-variant-ligatures: [
  normal
  || none
  || <common-lig-values>
  || <discretionary-lig-values>
  || <historical-lig-values>
  || <contextual-alt-values>
]

eg:
font-variant-ligatures: normal;
```

## 属性值

* [全局属性值](/front-end/CSS/values#anchor-值类型)
* common-lig-values: OpenType字体特征 'liga'、'clig'
  1. `common-ligatures`: 开启字体特征
  1. `no-common-ligatures`: 禁用字体特征
* discretionary-lig-values: OpenType字体特征 'dlig'
  1. `discretionary-ligatures`: 开启字体特征
  1. `no-discretionary-ligatures`: 禁用字体特征
* historical-lig-values: OpenType字体特征 'hlig'
  1. `historical-ligatures`: 开启字体特征
  1. `no-historical-ligatures`: 禁用字体特征
* contextual-alt-values: OpenType字体特征 'calt'
  1. `contextual`: 开启字体特征
  1. `no-contextual`: 禁用字体特征
