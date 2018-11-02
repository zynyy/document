---
title: text-shadow
category: property
type: text-decor
anchor: text-shadow-property
order: 1
---

# text-shadow 文本阴影

给元素文本内容设置阴影效果

## 语法

注: # 表示 [] 内的属性值可以多次重复直到浏览器设置的上限次数，不同浏览器的上限次数是不一致的但是都保证了至少20次，超过浏览器次上限则无效。使用英文逗号(,)进行分隔, && 表示相隔的是必须的，顺序不限

```css
text-shadow: [
  none
  || [
    <color>? && [ <length> ]{2, 3}
  ]#
]

eg:
text-shadow: none;
text-shadow: red 10px 20px;
text-shadow: red 10px 20px 10px;
text-shadow: 10px 20px 10px red;
text-shadow: red 10px 20px 10px, red 10px 20px 10px;
```

## 属性值

* [全局属性值](/front-end/CSS/values#anchor-值类型)
* [color](/front-end/CSS/values#anchor-值类型)
* [length](/front-end/CSS/values#anchor-值类型)
