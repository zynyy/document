---
title: hanging-punctuation
category: property
type: text
anchor: hanging-punctuation-property
order: 14
---

# hanging-punctuation 标点位置

给元素文本内容标点符号设置位置

## 语法

```css
hanging-punctuation: [
  none
  || [
    first
    || [
      force-end || allow-end
    ]
    || last
  ]{1, 3}
]

eg:
hanging-punctuation: first;
hanging-punctuation: first force-end;
hanging-punctuation: allow-end last;
hanging-punctuation: first allow-end last;
hanging-punctuation: first force-end last;
```

## 属性值

* [全局属性值](/front-end/CSS/values#anchor-值类型)
* `first`:
* `force-end`:
* `allow-end`:
* `last`:
