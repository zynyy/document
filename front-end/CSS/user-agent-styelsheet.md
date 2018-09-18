---
title: 浏览器默认样式
order: 5
---

# 浏览器默认样式

每种浏览器都有一套默认的样式表，即 user agent stylesheet，在写网页时，没有指定的样式，按浏览器内置的样式表来渲染。不同浏览器甚至同一浏览器不同版本的默认样式是不同的。这才带来了很多的坑。因此了解各浏览器的默认样式能让我们对每条Reset规则的写法做到心中有数，对我们了解浏览器的差异，写各浏览器兼容的代码也有很大帮助。可通过以下几个途径来了解浏览器默认样式

1. 以 webkit 内核为代表的浏览器可以通过: <https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css>
1. 以 Gecko 内核为代表的浏览器可以通过: <https://hg.mozilla.org/mozilla-central/file/tip/layout/style/res/html.css>浏览器地址输入 resource://gre-resources/html.css

## 自定义 CSS 样式覆盖默认样式

## 浏览器功能

1. chrome://about/
