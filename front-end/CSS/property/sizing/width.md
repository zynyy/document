---
title: width
category: property
type: sizing
anhcor:
---

# width

定义元素内容区的宽度

## 属性值

| 值 | 描述 |
| --- | --- |
| auto | |
| min-content | |
| max-content | |
| fit-content() | |
| auto | |
| length | |
| percentage | |

```jsx
import CSSDemo from 'demo/CSSDemo';

const values = {
  keywork: [
    'auto', 'min-content', 'max-content'
  ],
  functions: [{
    function: 'fit-content',
    value: [
      'length', 'percentage'
    ]
  }],
  length: {
    value: 500,
    unit: 'px'
  },
  percentage: {
    value: '10%'
  }
};

ReactDOM.render(<CSSDemo property='width' values={values} defaultValue="auto" />, mountNode);
```
