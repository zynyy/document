---
title: <param>
category: element
type: semantics-embedded-content
anchor: the-param-element
order: 9
---

# `param` 元素标签

定义了`<object>`元素调用的插件的参数。它本身并不代表任何东西。

## 用法

```html
<object>
  <param name='' value=''/>
</object>
```

## 子元素标签

不存在任何子元素和文本内容

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `name` | `<object>` 元素的属性 | |
| `value` | `<object>` 元素的属性值 | |

## CSS 默认样式

```css
param {
  display: none;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| | 无 | Roles: 无。 <br> aria-*: 全局属性 |
