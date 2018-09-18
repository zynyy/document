---
title: <html>
category: element
type: semantics
anchor: the-html-element
---

# `html` 元素标签

表示 HTML 文档的根, 所以它也被称为根元素。所有其他元素必须是此元素的后代。

## 用法

```html
<html lang='zh'>
  子元素
</html>
```

## 子元素标签

1. metadata: `<head>`
1. sections: `<body>`

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| --- | --- | --- |
| `manifest` | URL | 应用程序缓存清单 |

## 应用缓存优点

1. 离线预览
1. 快速
1. 减少服务器加载

> IE9以下不支持缓存 具体标准详见<https://www.w3.org/TR/2017/REC-html52-20171214/semantics.html#element-attrdef-html-manifest>

## CSS 默认样式

```css
html {
  display: block;
}
```

## DOM

1. window.applicationCache

## ARIA 无障碍阅读

>没有任何角色和属性
