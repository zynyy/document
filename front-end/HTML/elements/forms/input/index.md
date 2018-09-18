---
title: <input>
category: element
type: sec-forms
anchor: the-input-element
order: 3
---

# `input` 元素标签

通常用于表单控件以允许用户编辑的数据。根据不同的 type 属性值，输入字段拥有很多种形式。输入字段可以是文本字段、复选框、单选按钮、按钮等等

## 用法

```html
<input type='' name='' value=''/>
```

## 子元素标签

不存在任何子元素，文本内容请用属性`value`来设置

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| --- | --- | --- |
| `type` | | |
| `name` | | |
| `value` | | |
| `autofocus` | | |
| `disabled` | | |
| `form` | | |

### type 值

| 值 | 描述 |
| --- | --- |
| `type='hidden'` | |
| `type='text'` | |
| `type='search'` | |
| `type='tel'` | |
| `type='url'` | |
| `type='email'` | |
| `type='password'` | |
| `type='date'` | |
| `type='month'` | |
| `type='week'` | |
| `type='time'` | |
| `type='datetime-local'` | |
| `type='number'` | |
| `type='range'` | |
| `type='color'` | |
| `type='checkbox'` | |
| `type='radio'` | |
| `type='file'` | |
| `type='submit'` | |
| `type='image'` | |
| `type='reset'` | |
| `type='button'` | |

### type 值专有属性

| 属性 | 值 | type值 | 描述 |
| --- | --- | --- | --- |
| `accept` | | `type='file'` | |
| `alt` | | `type='image'` | |
| `autocomplte` | | `type='text'`、`type='search'`、`type='datetime-local'`、<wbr>`type='time'`、`type='month'`、`type='week'`、`type='date'`、`type='number'`、<wbr>`type='range'`、`type='color'`、`type='url'`、<wbr>`type='tel'`、`type='email'` and `type='password'` |  |
| `checked` | | `type='checkbox'` and `type='radio'` | |
| `dirname` | |  `type='text'` and `type='search'` | |
| `formaction` | | `type='image'` and `type='submit'` | |
| `formenctype` | | `type='image'` and `type='submit'` | |
| `formmethod` | | `type='image'` and `type='submit'` | |
| `formnovalidate` | | `type='image'` and `type='submit'` | |
| `formtarget` | | `type='image'` and `type='submit'` | |
| `max` | | `type='datetime-local'`、<wbr>`type='time'`、`type='month'`、`type='week'`、`type='date'`、`type='number'`、<wbr>`type='range'`、 | |
| `min` | | `type='datetime-local'`、<wbr>`type='time'`、`type='month'`、`type='week'`、`type='date'`、`type='number'`、<wbr>`type='range'`、 | |
| `maxlength` | | `type='text'`、`type='search'`、`type='url'`、<wbr>`type='tel'`、`type='email'` and `type='password'` | |
| `minlength` | | `type='text'`、`type='search'`、`type='url'`、<wbr>`type='tel'`、`type='email'` and `type='password'` | |
| `multiple` | | `type='file'` and `type='email'` | |
| `pattern` | | `type='text'`、`type='search'`、`type='url'`、<wbr>`type='tel'`、`type='email'` and `type='password'` | |
| `placeholder` | | `type='text'`、`type='search'`、`type='url'`、<wbr>`type='tel'`、`type='email'`、`type='number'` and `type='password'` | |
| `readonly` | | `type='text'`、`type='search'`、`type='url'`、<wbr>`type='tel'`、`type='email'`、`type='password'` <wbr>`type='datetime-local'`、`type='time'`、`type='month'`、`type='week'`、`type='date'` and `type='number'` | |
| `required` | | `type='text'`、`type='search'`、`type='url'`、<wbr>`type='tel'`、`type='email'`、`type='file'`、`type='checkbox'`、`type='radio'`、`type='number'`、`type='datetime-local'`、<wbr>`type='time'`、`type='month'`、`type='week'`、`type='date'` and `type='password'` | |
| `height` | | `type='image'`  | |
| `list` | `<datalist>`元素属性 ID 值 | `type='text'`、`type='search'`、`type='url'`、<wbr>`type='tel'`、`type='email'`、`type='datetime-local'`、<wbr>`type='time'`、`type='month'`、`type='week'`、`type='date'`、`type='number'`、`type='color'` and `type='range'`、 | |
| `size` | | `type='text'`、`type='search'`、`type='url'`、<wbr>`type='tel'`、`type='email'` and `type='password'` | |
| `src` | | `type='image'`  | |
| `step` | | `type='datetime-local'`、<wbr>`type='time'`、`type='month'`、`type='week'`、`type='date'`、`type='number'`、<wbr>`type='range'`、 | |
| `width` | | `type='image'`  | |

## CSS 默认样式

```css
input {
  display: inline-block;
  color: initial;
  font: 400 13.3333px Arial;
  text-rendering: auto;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  margin: 0em;
  padding: 1px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
  border-width: 2px;
  appearance: textfield;
  background-color: white;
  -webkit-rtl-ordering: logical;
  cursor: text;
  writing-mode: horizontal-tb !important;
  letter-spacing: normal;
  word-spacing: normal;
}

input:not([type]),
input[type="email"],
input[type="number"],
input[type="password"],
input[type="tel"],
input[type="url"],
input[type="text"] {
  padding: 1px 0px;
}

input[type="button"],
input[type="submit"],
input[type="reset"],
input[type="file"]::file-upload-button {
  padding: 1px 6px;
}

input[type="button"],
input[type="submit"],
input[type="reset"],
input[type="file"]::file-upload-button {
  align-items: flex-start;
  text-align: center;
  cursor: default;
  color: rgb(0, 0, 0);
  background-color: rgb(221, 221, 221);
  box-sizing: border-box;
  padding: 2px 6px 3px;
  border-width: 2px;
  border-style: outset;
  border-color: rgb(221, 221, 221);
  border-image: initial;
}

input[type="button"],
input[type="submit"],
input[type="reset"] {
  appearance: push-button;
  user-select: none;
  white-space: pre;
}

input[type="checkbox"] {
  margin: 3px 3px 3px 4px;
  appearance: checkbox;
  box-sizing: border-box;
}

input[type="radio"],
input[type="checkbox"] {
  background-color: initial;
  cursor: default;
  margin: 3px 0.5ex;
  padding: initial;
  border: initial;
}

input[type="color"] {
  appearance: square-button;
  width: 44px;
  height: 23px;
  background-color: rgb(221, 221, 221);
  cursor: default;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(169, 169, 169);
  border-image: initial;
  padding: 1px 2px;
}

input[type="date"],
input[type="datetime-local"],
input[type="month"],
input[type="time"],
input[type="week"] {
  align-items: center;
  display: inline-flex;
  font-family: monospace;
  padding-inline-start: 1px;
  cursor: default;
  overflow: hidden;
  padding: 0px;
}

input[type="file"] {
  align-items: baseline;
  color: inherit;
  text-align: start !important;
}

input[type="hidden"],
input[type="image"],
input[type="file"] {
  -webkit-appearance: initial;
  background-color: initial;
  cursor: default;
  padding: initial;
  border: initial;
}

input[type="hidden"] {
  display: none;
}

input[type="image"] {
  cursor: pointer;
}

input[type="search"] {
  padding: 1px;
  appearance: searchfield;
  box-sizing: border-box;
}

input[type="range"] {
  color: rgb(196, 196, 196);
}

input[type="range"] {
  -webkit-appearance: slider-horizontal;
  color: rgb(144, 144, 144);
  cursor: default;
  padding: initial;
  border: initial;
  margin: 2px;
}

input[type="password"] {
  -webkit-text-security: disc !important;
}

input[type="radio"] {
  appearance: radio;
  box-sizing: border-box;
  margin: 3px 3px 0px 5px;
}
```

## DOM API

当 input 元素标签 `type=file`的时候可以通过 `new fileRender();` 来操作文件。

## ARIA 无障碍阅读

| 属性 | 隐式角色 | 可能存在角色、特征、状态 |
| ---- | ---- | ---- |
| `type='hidden'` | 无 | Roles: 无 <br> aria-*: 无 |
| `type='text'` 且不存在属性`list` | `role='textbox'` | Roles: `role='combobox'`、`role='searchbox'` or `role='spinbutton'`。` <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='text'` 且存在属性`list` | `role='combobox'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='search'` 且不存在属性`list` | `role='searchbox'` | Roles: 无。` <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='search'` 且存在属性`list` | `role='combobox'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='tel'` 且不存在属性`list` | `role='textbox'` | Roles: 无。` <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='tel'` 且存在属性`list` | `role='combobox'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='url'` 且不存在属性`list` | `role='textbox'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='url'` 且存在属性`list` | `role='combobox'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='email'`且不存在属性`list` | `role='textbox'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='email'` 且存在属性`list` | `role='combobox'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='password'` | 无 | Roles: 无 <br> aria-*: 全局属性以及`aria-required` |
| `type='date'` | 无 | Roles: 无 <br> aria-*: 全局属性 |
| `type='month'` | 无 | Roles: 无 <br> aria-*: 全局属性 |
| `type='week'` | 无 | Roles: 无 <br> aria-*: 全局属性 |
| `type='time'` | 无 | Roles: 无 <br> aria-*: 全局属性 |
| `type='number'` | `role='spinbutton'` | Roles: 无 <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='range'` | `role='slider'` | Roles: 无。` <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='color'` | 无 | Roles: 无 <br> aria-*: 全局属性 |
| `type='checkbox'` | `role='checkbox'` | Roles: `role='button'`、`role='menuitemcheckbox'`、`role='option'`、or `role='switch'`。<br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='radio'` | `role='radio'` | Roles: `role='menuitemradio'` <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='file'` | 无 | Roles: 无 <br> aria-*: 全局属性 |
| `type='submit'` | `role='button'` | Roles: 无。` <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='image'` | `role='button'` | Roles: `role='link'`、`role='menuitem'`、`role='menuitemcheckbox'`、<wbr>`role='menuitemradio'`、`role='radio'` or `role='switch'` <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='reset'` | `role='button'` | Roles: 无。` <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='button'` | `role='button'` | Roles: `role='link'`、`role='menuitem'`、`role='menuitemcheckbox'`、<wbr>`role='menuitemradio'`、`role='option'`、`role='radio'`、`role='switch'`、 or `role='tab'` <br> aria-*: 全局属性以及角色所对应的私有属性 |
| `type='datetime-local'` | 无 | Roles: 无 <br> aria-*: 全局属性 |
