---
title: font-variant-east-asian
category: property
type: fonts
order: 1.25
anchor: propdef-font-variant-east-asian
---

# font-variant-east-asian 字体替换

控制元素文本内容(东亚地区文字)的字形替换、大小调整

## 语法

注: []表示一组可选的属性值，|| 表示 [] 内的属性值任选其一。

```css
font-variant-east-asian: [
  normal
  || ruby
  || <east-asian-variant-values>
  || <east-asian-width-values>
]

eg:
font-variant-east-asian: normal;
```

## 属性值

* [全局属性值](/front-end/CSS/values#anchor-值类型)
* `normal`: 禁用字体特征
* `ruby`: OpenType字体特征: 'ruby'
* east-asian-variant-values:
  1. `jis04`: OpenType字体特征: 'jp04'
  1. `jis78`: OpenType字体特征: 'jp78'
  1. `jis83`: OpenType字体特征: 'jp83'
  1. `jis90`: OpenType字体特征: 'jp90'
  1. `simplified`: OpenType字体特征: 'smpl'
  1. `traditional`: OpenType字体特征: 'trad'
* east-asian-width-values:
  1. `full-width`: OpenType字体特征: 'fwid'
  1. `proportional-width`: OpenType字体特征: 'pwid'
