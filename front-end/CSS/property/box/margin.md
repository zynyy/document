---
title: margin
category: property
type: box
anchor:
order: 1
---

# margin 外边距

该属性为简写属性(4种),给元素设置4个方向(上、右、下、左)的外边距。4种属性分别: `margin-top`、`margin-right`、`margin-bottom`、`margin-left`。

## 语法

注: []表示一组可选的属性值，|| 表示 [] 内的属性值任选其一，{} 表示 [] 内的属性值任选其中几个属性值并且用空格隔开。

```css
margin: [
  <length>
  || <percentage>
  || auto
]{1, 4}

eg: /* 水平即左右，垂直即上下*/
margin: 1px; /* 给四个方向外边距设置 1px */
margin: 1px 2px; /* 分别给水平方向 垂直方向的外边距设置 1px 2px */
margin: 1px 2px 1px; /* 分别给 上方向 、水平方向、下方向的外边距设置 1px 2px 1px */
margin: 1px 2px 2px 3px; /* 分别给 上方向 、右方向、下方向、左方向的外边距设置 1px 2px 2px 3px*/
```

## 属性值

接受1~4个可选参数，每个参数取值如下：

1. [全局属性值](/front-end/CSS/values#anchor-值类型)
1. [length](/front-end/CSS/values#anchor-值类型)，注: 该值允许为负的
1. [percentage](/front-end/CSS/values#anchor-值类型)，注: 该值允许为负的
1. `auto`: 浏览器会自动选择一个合适的值来应用。注：该值仅对水平方向居中有效。所以比较标准的写法是: marin: 0px auto;

```jsx
import CSSDemo from 'demo/CSSDemo';

const values = {
    compound: [
      {
        'margin-top': {
          keyword: ['auto'],
          types: ['length', 'percentage']
        }
      }, {
        'margin-right': {
          keyword: ['auto'],
          types: ['length', 'percentage']
        }
      }, {
        'margin-bottom': {
          keyword: ['auto'],
          types: ['length', 'percentage']
        }
      }, {
        'margin-left': {
          keyword: ['auto'],
          types: ['length', 'percentage']
        }
      }
    ],
  };

ReactDOM.render(<CSSDemo property='margin' values={values} defaultValue="auto" />, mountNode);
```
