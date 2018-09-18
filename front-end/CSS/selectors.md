---
title: CSS选择器
type: selectors
order: 2
---

# 选择器

可以使 CSS 对 HTML 页面中的元素实现一对一，一对多或者多对一的控制。

## 用法

```css
// 注意: 如果多种选择模式的样式属性是一样的可以用逗号(,)隔开
选择器模式 {
  样式属性
}
```

## 选择器模式

> 优先级: 如果同一个元素 具有不同的选择器，且样式属性相同属性值不同。那么就会发生一些选择器的属性无效被覆盖了。
>
> n 可以使用表达式 或者 odd(2n+1)、even(2n-1)
>
> E 即代表 元素标签, 类别是伪类的前面可以是元素、ID。下面表格中仅用元素展示,伪类可单独使用即(*:伪类)
>
> 有效的 id, class 命名是以大小写字母或符合 \[a-z\_-A-Z\] 开头的且不能含有(除了_-之外其他的符号),当然也可以使用中文。这就碰到了计算科学中最难的两件事之一的命名

| 模式 | 类别 | 范围 | 优先级 |
| --- | --- | --- | --- |
| * | 通用 | 匹配任何元素 | 2 |
| E | 标签 | 匹配所有 E 元素 | 1 |
| #id | ID | 匹配所有元素属性 `id` 为该值 | 1 |
| .class | 类 | 匹配所有元素属性 `class` 为该值 | 1 |
| E F | 后代 | 匹配 E 元素中所有后代(子元素或子元素的子元素)元素标签为 F 的元素 | 1 |
| E > F | 子 | 匹配 E 元素中的子元素标签 F 元素 | 2 |
| E + F | 同胞 | 匹配 E 元素同级中且下一个是 F 元素 | 2 |
| E ~ F | 兄弟 | 匹配 E 元素同级中的 F 元素  | 3 |
| E\[attr\] | 属性 | 匹配 E 元素具有 attr 属性 | 2 |
| E\[attr='val'\] | 属性 | 匹配 E 元素具有 attr 属性且值是 val | 2|
| E\[attr~='val'\] | 属性 | 匹配 E 元素具有 attr 属性且值具有 val 词的 | 2 |
| E\[attr\|='val'\] | 属性 | 匹配 E 元素具有 attr 属性且值是 val or val- 词开头的 | 2 |
| E\[attr^='val'\] | 属性 | 匹配 E 元素具有 attr 属性且值是以 val 开头的 | 3 |
| E\[attr$='val'\] | 属性 | 匹配 E 元素具有 attr 属性且值是以 val 结尾的 | 3 |
| E\[attr*='val'\] | 属性 | 匹配 E 元素具有 attr 属性且值含有 val  | 3 |
| :root | 伪类 | 匹配 `<html>` 元素标签  | 3 |
| E:nth-child(n) | 伪类 | 匹配第n个E元素 | 3 |
| E:nth-last-child(n) | 伪类 | 匹配倒数第n个E元素 | 3 |
| E:nth-of-type(n) | 伪类 | 匹配倒数第n个同级(即相邻的兄弟姐妹)E元素 | 3 |
| E:nth-last-of-type(n) | 伪类 | 匹配倒数第n个同级(即相邻的兄弟姐妹)E元素 | 3 |
| E:first-child | 伪类 | 匹配第1个E元素，跟 E:nth-child(1)效果一样但是优先级更高 | 2 |
| E:last-child | 伪类 | 匹配倒数第1个E元素 跟 E:nth-last-child(1)效果一样| 3 |
| E:first-of-type | 伪类 | 匹配第1个同级(即相邻的兄弟姐妹)E元素跟 E:nth-of-type(1)效果一样 | 3 |
| E:last-of-type | 伪类 | 匹配倒数第1个同级(即相邻的兄弟姐妹)E元素跟 E:nth-last-of-type(1)效果一样 | 3 |
| E:only-child | 伪类 | 匹配具有父级元素(除了`<body>`容器)且只有一个E元素的子元素 | 3 |
| E:only-of-type | 伪类 | 匹配具有同级(即相邻的兄弟姐妹)父级元素(除了`<body>`容器)且只有一个E元素的子元素 | 3 |
| E:empty | 伪类 | 匹配E元素且没有子元素也没有文本内容 | 3 |
| E:link | 伪类 | 匹配E元素且用户还没有访问过的链接 | 1 |
| E:visited | 伪类 | 匹配E元素且用户已经访问过的链接 | 1 |
| E:active | 伪类 | 匹配用户用鼠标点击和松开 | 1 |
| E:any-link | 伪类 | 匹配超链接具有属性`href` | 1 |
| E:hover | 伪类 | 匹配用户用鼠标悬浮在E元素上 | 1 |
| E:focus | 伪类 | 匹配E元素获得焦点 | 2 |
| E:target | 伪类 | 匹配URL锚点值与元素 id 相同的元素 | 3 |
| E:lang(language-code) | 伪类 | 匹配E元素属性`lang`具有language-code 等同 E\[lang='language-code'\] | 2 |
| E:enabled | 伪类 | 匹配可写入、输入的E元素主要匹配`<input>` `<textarea>` | 3 |
| E:disabled | 伪类 | 匹配具有属性`disabled`的E元素 | 3 |
| E:checked | 伪类 | 匹配E元素获得焦点 | 3 |
| E:not(s) | 伪类 | 匹配E元素获得焦点 | 2 |
| E::first-line | 伪元素 | 匹配E元素中的第一行 | 1 |
| E::first-letter | 伪元素 | 匹配E元素中的第一个字母或字 | 1 |
| E::before | 伪元素 | 匹配E元素渲染后 | 2 |
| E::after | 伪元素 | 匹配E元素渲染前 | 2 |
| ::selection | 伪元素 | 匹配用户选中的元素 | 2 |
| E::inactive-selection | 伪元素 | 匹配E元素渲染前 | 2 |
| E::spelling-error | 伪元素 | 匹配E元素渲染前 | 2 |
| E::grammar-error | 伪元素 | 匹配E元素渲染前 | 2 |
| E::marker | 伪元素 | 匹配E元素渲染前 | 2 |
| E::placeholder | 伪元素 | 匹配E元素渲染前 | 2 |
