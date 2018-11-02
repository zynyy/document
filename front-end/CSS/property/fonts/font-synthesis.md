---
title: font-synthesis
category: property
type: fonts
order: 1.7
anchor: font-synthesis-prop
---

# font-synthnesis 字体合成

给元素文本内容设置的字体族，可能缺少粗体和斜体，从而影响阅读，设置此属性浏览器自动合成粗体、斜体

## 语法

注: []表示一组可选的属性值，|| 表示 [] 内的属性值任选其一，{} 表示 [] 内的属性值任选其中几个属性值并且用空格隔开。

```css
font-synthnesis: [
  none
  || [ weight || style ]{1, 2}
]

eg:
font-synthnesis: weight;
font-synthnesis: weight style;
```

## 属性值

* [全局属性值](/front-end/CSS/values#anchor-值类型)
* `none`: 不能合成粗体、斜体
* `weight`: 如果需要可以合成粗体
* `style`: 如果需要可以合成斜体
