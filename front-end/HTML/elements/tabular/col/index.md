---
title: <col>
category: element
type: tabular-data
anchor: the-col-element
order: 4
---

# `col` 元素标签

 `<colgroup>`元素内部的每一列的列属性。通过该标签可以向`<table>`元素中每一个列应用样式，而不需要重复为每个单元格或每一行设置样式。

## 用法

```html
// 注意: 一个 <table> 元素中 <tr> 元素存在几个子元素 <td> 则该标签就存在几个
<table>
  <colgroup>
    <col />
  </colgroup>
  <tr>
    <td></td>
  </tr>
</table>
```

## 子元素标签

不存在任何子元素和文本内容

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `span` | | |

## CSS 默认样式

```css
col {
  display: table-column;
}
```

## ARIA 无障碍阅读

没有任何角色和属性
