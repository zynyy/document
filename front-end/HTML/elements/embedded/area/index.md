---
title: <area>
category: element
type: semantics-embedded-content
anchor: the-area-element
order: 15
---

# `area` 元素标签

在图片上定义一个热点区域。可以关联一个超链接

## 用法

```html
<map>
  <area href=''/>
</map>
```

## 子元素标签

不存在任何子元素和文本内容

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `alt` | | |
| `coords` | | |
| `download` | | |
| `href` | | |
| `hreflang` | | |
| `rel` | | |
| `shape` | | |
| `target` | | |
| `type` | | |

## CSS 默认样式

```css
area {
  display: inline;
  cursor: pointer;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| 存在`href` | `role='link'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
