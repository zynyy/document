---
title: text-emphasis-style
category: property
type: text-decor
anchor: text-emphasis-style-property
order: 3.1
---

# text-emphasis-style 标记样式风格

给元素文本内容标记设置样式风格。

## 语法

```css
text-emphasis-style: [
  none
  || [
    [
      filled
      || open
    ]
    || [
      dot
      || circle
      || double-circle
      || triangle
      || sesame
    ]
  ]{1, 2}
  || <string>
]

eg:
text-emphasis-style: none;
text-emphasis-style: 'x';
text-emphasis-style: filled dot;
text-emphasis-style: open circle;
```
