---
title: display
category: property
type: display
---

# dispaly

指定用于元素的呈现框的类型。

## 属性值

| 值 | 类型 | 描述 |
| --- | --- | --- |
| `block` | outside | |
| `inline` | outside | |
| `run-in` | outside | 不建议使用 |
| `list-item` | listitem | |
| `table` | inside | |
| `flex` | inside | |
| `grid` | inside | |
| `ruby` | inside | |
| `flow` | inside | |
| `flow-root` | inside | |
| `inline-block` | legacy | |
| `inline-table` | legacy | |
| `inline-flex` | legacy | |
| `inline-grid` | legacy | |
| `table-row-group` | Internal | |
| `table-header-group` | Internal | |
| `table-footer-group` | Internal | |
| `table-row` | Internal | |
| `table-cell` | Internal | |
| `table-column-group` | Internal | |
| `table-column` | Internal | |
| `table-caption` | | 表格标题 |
| `ruby-base` | Internal | |
| `ruby-text` | Internal | |
| `ruby-base-container` | Internal | |
| `ruby-text-container` | Internal | |
| `none` | Box | |
| `contents` | Box | |

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
