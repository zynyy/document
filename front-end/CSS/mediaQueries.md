---
title: CSS媒体查询
order: 5
---

# 媒体查询(Media Queries)

由一个可选的媒体类型和零个或多个使用媒体功能的限制了样式表范围的表达式组成，例如宽度、高度和颜色。媒体查询，添加自CSS3，允许内容的呈现针对一个特定范围的输出设备而进行裁剪，而不必改变内容本身。即响应式设计

## 用法

```css
// 逻辑 类型 特征 皆为可选。and 需查看前面一个词是否是类型。如果是类型则必须，反之不用写
// 多个类型可使用逗号(,)隔开。特征需要使用括号包起来如果需要写多个特征请使用 and 这个关键词。 and 关键词前后需要有空格(1格)，
@media 逻辑 类型 and (特征) {
  选择器 {
    样式属性
  }
}
or
@import '外部文件地址' 逻辑 类型 and (特征);
```

## 逻辑

| 运算符 | 描述 |
| --- | --- |
| `not` | 非  |
| `only` | 只有  |

## 类型

| 名称 | 描述 |
| --- | --- |
|  `all` | 适用于所有类型 | |
|  `screen` | 匹配所有不被 `print` or `speech`类型所匹配的设备 | |
|  `print` | 匹配打印机设备或打印预览 |
|  `speech` | 匹配屏幕阅读器等发声设备。 |

## 特征

> 从语法上讲，特征类似于CSS属性：它们具有名称并接受某些值。

|  名称 | 值 | 描述 |
| `width` | length + CSS 单位 | 输出设备中的页面可见区域宽度 |
| `min-width` | length + CSS 单位 | 输出设备中的页面最低可见区域宽度 |
| `max-width` | length + CSS 单位 | 输出设备中的页面最大可见区域宽度 |
| `height` | length + CSS 单位 | 输出设备中的页面可见区域高度 |
| `min-height` | length + CSS 单位 | 输出设备中的页面最低可见区域高度 |
| `max-height` | length + CSS 单位 | 输出设备中的页面最大可见区域高度 |
| `device-width` | length + CSS 单位 | 输出设备的渲染可见的宽度 |
| `min-device-width` | length + CSS 单位 | 输出设备的渲染可见的最小宽度 |
| `max-device-width` | length + CSS 单位 | 输出设备的渲染可见的最大宽度 |
| `device-height` | length + CSS 单位 | 输出设备的渲染可见的高度 |
| `min-device-height` | length + CSS 单位 | 输出设备的渲染可见的最小高度 |
| `max-device-height` | length + CSS 单位 | 输出设备的渲染可见的最大高度 |
| `orientation` | `portrait` or `landscape` | 输出设备中的页面可见区域高度是否大于或等于宽度 |
| `min-aspect-ratio` | width/height| 输出设备的中的页面可见区域宽度与高度的比率 |
| `min-aspect-ratio` | width/height| 输出设备的中的页面可见区域宽度与高度的最低比率 |
| `max-aspect-ratio` | width/height | 输出设备中的页面可见区域宽度与高度的最高比率 |
| `device-aspect-ratio` | device-width/device-height | 输出设备的屏幕可见宽度与高度的比率 |
| `mix-device-aspect-ratio` | device-width/device-height | 输出设备的屏幕可见宽度与高度的比率最低 |
| `max-device-aspect-ratio` | device-width/device-height | 输出设备的屏幕可见宽度与高度的比率最高 |
| `color` | 无 | 输出设备的彩色原件个数,非彩色设备即为0 |
| `min-color` | integer 类型 |输出设备的彩色原件最小个数 |
| `max-color` | integer 类型 | 输出设备的彩色原件最大个数 |
| `color-index` | integer 类型 | 输出设备的彩色查询表中的条目数 |
| `min-color-index` | integer 类型 | 输出设备的彩色查询表中的最小条目数 |
| `max-color-index` | integer 类型 | 输出设备的彩色查询表中的最大条目数 |
| `monochrome` | integer 类型 | 像素包含的单色原件个数 |
| `min-monochrome` | integer 类型 | 像素包含的单色原件最小个数 |
| `max-monochrome` | integer 类型 | 像素包含的单色原件最大个数 |
| `resolution` | integer 类型 + dpi 单位| 输出设备的分辨率  |
| `min-resolution` | integer 类型 + dpi 单位| 输出设备的最小分辨率  |
| `max-resolution` | integer 类型 + dpi 单位| 输出设备的最大分辨率 |
| `scan` | `progressive` or `interlace` | 电视类设备的扫描工序 |
| `grid` | `-0`、`0` or `1` | 输出设备是否使用栅格或点阵 |

<https://www.w3.org/TR/css3-mediaqueries/>

## javascript

1. 
