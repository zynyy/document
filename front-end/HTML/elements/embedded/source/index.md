---
title: <source>
category: element
type: semantics-embedded-content
anchor: the-source-element
order: 4
---

# `source` 元素标签

## 用法

```html
<video>
  <source src='' type=''/>
</video>
 or
<audio>
  <source src='' type=''/>
</audio>
```

## 子元素标签

> 该标签不存在任何子元素和文本内容

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

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: 无。 <br> aria-*: 全局属性 |
