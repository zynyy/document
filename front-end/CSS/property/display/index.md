---
title: display
category: property
type: display
---

# dispaly

指定用于元素的呈现框的类型。

## 语法

```css
display: [
  <display-outside>
  || <display-listitem>
  || <display-inside>
  || <display-legacy>
  || <display-internal>
  || <display-box>
]

eg:
diaplay: block;
```

## 属性值

* [全局属性值](/front-end/CSS/values#anchor-值类型)
* display-outside: 以下关键词
  1. `block`: 给元素设置块级框
  1. `inline`: 给元素设置内联级框
  1. `run-in`: 给元素设置特殊的内联级框
* display-listitem: `[ <display-outside>? && [ flow || flow-root ]? &&  list-item ]`
* display-inside:
  1. `table`
  1. `flex`
  1. `grid`
  1. `ruby`
  1. `flow`
  1. `flow-root`
* display-legacy:
  1. `inline-block`
  1. `inline-table`
  1. `inline-flex`
  1. `inline-grid`
* display-internal:
  1. `table-row-group`
  1. `table-header-group`
  1. `table-footer-group`
  1. `table-row`
  1. `table-cell`
  1. `table-column-group`
  1. `table-column`
  1. `table-caption`
  1. `ruby-base`
  1. `ruby-text`
  1. `ruby-base-container`
  1. `ruby-text-container`
* display-box:
  1. `none`
  1. `contents`

```jsx
import CSSDemo from 'demo/CSSDemo';

const values = {
    keywork: [
      'block', 'inline', 'run-in',
      'table', 'flex', 'grid', 'ruby', 'flow', 'flow-root',
      'list-item',
      'inline-block', 'inline-table', 'inline-flex', 'inline-grid',
      'table-row-group', 'table-header-group', 'table-footer-group', 'table-row table-cell', 'table-column-group', 'table-column','ruby-base', 'ruby-text', 'ruby-base-container', 'ruby-text-container',
      'none', 'contents',
      'table-caption'
    ],
  };

ReactDOM.render(<CSSDemo property='display' values={values} defaultValue="block" />, mountNode);
```
