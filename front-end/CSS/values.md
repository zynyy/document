---
title: CSS-值
type: values
anchor:
order: 4
---

# CSS 值定义

用于描述 CSS 特征的有效集, 特征值可以包含一个或多个组成(空格隔开)

## 数字类型定义

1. integer: 正、负、0整数的集的数字都可以
1. numbers: 实数 和 小数的集合
1. percentages: 百分比(%)

## 值类型

值组成类型以多种方式指定:

* 关键词: `initial`, `inherit`, `unset`
  1. initial: 初始默认值
  1. inherit: 继承直接父元素的对应属性值
  1. unset: 表示如果该属性默认可继承，则值为inherit，否则值为initial。
  1. revert: 样式表中定义的元素属性的默认值。注: 该关键词是第四版本才出现的，慎用
* length类型: 长度值即有一个 Number 值 + 相对、绝对的长度单位如: 12px
* angle类型: 角度值即一个 Number + 角度单位如: 90deg
* time类型: 时间值即一个 Number + 时间单位如: 1s
* frequency类型: 频率值即一个 Number + 频率单位如: 50Hz
* resolution类型: 分辨值即一个 integer + 分辨率单位如: 2dppx
* Functional: 函数如: url()
* percentage: 百分比如: 50%
* color: 颜色值: #112233
* position: `left`、`right`、`center`、`top`、`buttom`

## 单位列表

| 单位名 | 英文全称 | 类型 | 描述 |
| --- |--- |----|
| `em` | | 相对字体长度 | 取决于 父级元素的 `font-size` 大小 |
| `ex` | | 相对字体长度 | 取决于 26个字母的 `x` 的高度。x-height 概念 |
| `ch` | | 相对字体长度 | 取决于 数字 0 的宽度 |
| `rem` | | 相对字体长度 | 取决于根元素(`<html>`)的 `font-size` 大小 |
| `vw` | | 相对 viewport 宽度 | 取决于 屏幕可视区的宽度大小 |
| `vh` | | 相对 viewport 高度 | 取决于 屏幕可视区的宽度大小 |
| `vmin` | | 相对 viewport 百分比长度 | 等于 `vw` 或 `vh`的最小值 |
| `vmxn` | | 相对 viewport 百分比长度 | 等于 `vw` 或 `vh`的最大值 |
| `cm` | centimeters | 绝对长度 | 厘米 1cm = 96/2.54px |
| `mm` | millimeters | 绝对长度 | 毫米 1mm = 0.1cm |
| `Q` | quarter-millimeters | 绝对长度 | 1Q = 1/40cm |
| `in` | inches | 绝对物理长度 | 英寸 1in = 96px |
| `pt` | points | 绝对物理长度 | 点 1pt = 1/72in |
| `pc` | picas | 绝对物理长度 | 派卡(印刷行业使用的长度单位) 1pc=1/6in |
| `px` | pixel | 绝对视角长度 | 设备像素 |
| `deg` | | 角度 | 度, 一个圆圈 360 deg |
| `grad` | | 角度 | 梯度, 一整圈 400 grad, 100grad = 90deg |
| `rad` | | 角度 | 弧度, 2(pi)Π, 1.57rad ≈ 90deg |
| `turn` | | 角度 | 圈, 一整圈, 1turn = 360deg |
| `s` | | 时间 | 秒 |
| `ms` | | 时间 | 毫秒 1000ms = 1s |
| `Hz` | | 频率 | 赫兹 |
| `kHz` | | 频率  | 千赫兹 1kHz = 1000Hz |
| `dpi` | dot per inch | 分辨率 | 每英寸面积内的像素点数 |
| `dpcm` | | 分辨率 | 每厘米包含点的数量 1dpcm ≈ 2.54dpi |
| `dppx` | | 分辨率 | 每像素包含点的数量 1dppx = 96dpi |

### viewport

用户网页的可视区域,主要针对移动端。viewport 宽高度可以由 HTML 中的`<meta>`元素属性`content`来指定: `<meta name='viewport' content='width=width-device'>`。width-device 即设备的宽度。[了解更多content值](/front-end/HTML/elements/metadata/meta/index#anchor-viewport值)

## 特殊值 !important

样式特征的值集合后面添加 !important,说明该值很重要,从而忽略其他方式同样的值

```jsx
import UnitConvert from 'component/CSS/UnitConvert';

ReactDOM.render(<UnitConvert />, mountNode);
```
