---
title: font-variant-caps
category: property
type: fonts
order: 1.23
anchor: font-variant-caps-prop
---

# font-variant-caps 大写字母替换小写字母

给元素文本内容(含有字母)设置成大写字母。

## 语法

注: []表示一组可选的属性值，|| 表示 [] 内的属性值任选其一。

```css
font-variant-caps: [
  normal
  || small-caps
  || all-small-caps
  || petite-caps
  || all-petite-caps
  || unicase
  || titling-caps
]

eg:
font-variant-caps: all-petite-caps;
```

## 属性值

* [全局属性值](/front-end/CSS/values#anchor-值类型)
* `normal`:
* `small-caps`: OpenType字体特征: 'smcp'
* `all-small-caps`: OpenType字体特征: 'c2sc'、'smcp'
* `petite-caps`: OpenType字体特征: 'pcap'
* `all-petite-caps`: OpenType字体特征: 'c2pc','pcap'
* `unicase`: OpenType字体特征: 'unic'
* `titling-caps`: OpenType字体特征: 'titl'
