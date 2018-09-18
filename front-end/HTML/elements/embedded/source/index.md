---
title: <source>
category: element
type: semantics-embedded-content
anchor: the-source-element
order: 4
---

# `source` 元素标签

给 `<img>`(父级元素必须是`<picture>`)、`<video>`、`<audio>`提供多种来源。然后浏览器根据当前设备从中选择最合适的资源

## 用法

```html
<video>
  <source src='' type=''/>
</video>
 or
<audio>
  <source src='' type=''/>
</audio>
or
<picture>
  <img src='' alt=''/>
  <source src='' type=''/>
</picture>
```

## 子元素标签

不存在任何子元素和文本内容

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `src` | | |
| `type` | | |

* 如果位于`<picture>`元素之中存在属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `srcset` | | |
| `sizes` | | |
| `media` | | |
| `type` | | |

## CSS 默认样式

不存在任何默认样式

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: 无。 <br> aria-*: 全局属性 |
