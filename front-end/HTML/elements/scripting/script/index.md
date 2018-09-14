---
title: <script>
category: element
type: semantics-scripting
anchor: the-script-element
order: 2
---

# `script` 元素标签

## 用法

```html
// 注意：通常情况下放在 <body> 容器的最底部。如果渲染过程中，或者存在全局变量则应该放在 <head> 容器的最底部
// 要么
<script>
  javascript 脚本内容
</script>
// 就，引入外部脚本
<script scr=''></script>
```

## 子元素标签

>不存在任何子元素和文本内容,只能是脚本内容或者引入外部脚本

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

>Boolean类型可以不需要写值直接 `<element attribute>`

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `src` | URL | 引入外部脚本内容 |
| `type` | MIME 类型 | 脚本文件的 MIME |
| `charset` | 字符编码 | 外部文件的编码 |
| `async` | Boolean类型 | 使script脚本异步的加载并在允许的情况下执行。谁先加载完谁执行 |
| `defer` | Boolean类型 | 浏览器会异步的下载该文件并且不会影响到后续DOM的渲染； |
| `crossorigin` | [详见](/front-end/HTML/elements/metadata/meta/index#anchor-策略值) | 安全策略 |
| `nonce` | 加密随机数 | 安全策略 |

## ARIA 无障碍阅读

>没有任何属性和角色
