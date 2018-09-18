---
title: <textarea>
category: element
type: sec-forms
anchor: the-textarea-element
order: 9
---

# `textarea` 元素标签

一个多行纯文本编辑。

## 用法

```html
<textarea>
  文本内容
</textarea>
```

## 子元素标签

不存在任何子元素,就算写有 HTML 标签也只会被当做文本处理

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| ---- | ---- | ---- |
| `autocomplete` | | |
| `autofocus` | | |
| `cols` | | |
| `dirname` | | |
| `disabled` | | |
| `form` | | |
| `inputmode` | | |
| `maxlength` | | |
| `minlength` | | |
| `name` | | |
| `placeholder` | | |
| `readonly` | | |
| `required` | | |
| `rows` | | |
| `wrap` | | |

## CSS 默认样式

```css
textarea {
  display: inline-block;
  font: 400 13.3333px Arial;
  font-family: monospace;
  color: initial;
  text-rendering: auto;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  background-color: white;
  padding: 2px;
  margin: 0em;
  flex-direction: column;
  resize: auto;
  cursor: text;
  overflow-wrap: break-word;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: rgb(169, 169, 169);
  white-space: pre-wrap;
  letter-spacing: normal;
  word-spacing: normal;
  writing-mode: horizontal-tb !important;
  appearance: textarea;
  -webkit-rtl-ordering: logical;
}
```

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| `aria-multiline='true'` | `role='textbox'` | Roles: 任何角色。 <br> aria-*: 全局属性以及角色所对应的私有属性 |
