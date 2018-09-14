---
title: 浏览器兼容
order: 8
---

# 浏览器兼容

指网页在各种浏览器上的显示效果尽量保持一致的状态。

## 为什么会有浏览器兼容问题

1. 同一浏览器，版本越老 bug 越多
1. 同一浏览器，版本越新，支持的特性越多
1. 不同浏览器，标准(内核)不同，实现方式也有差异

## 浏览器内核

浏览器内核又可以分成两部分：渲染引擎和JS引擎。

“渲染引擎”(Rendering Engine)，不过我们也常称其为“排版引擎”。常见的浏览器内核有很多个，如 Gecko、Trident、Webkit、Blink 等等，它的作用负责 HTML、CSS、图片等静态资源的渲染，正因为每家的内核对网页代码的解释有不同的地方，所以才会出现同一个页面在不同内核的浏览器下显示的不一样。

| 浏览器 | logo | 渲染引擎 | js引擎 | github |
| ---- | :----: | :---- | :---: | --- |
| IE | ![IE / Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_24x24.png) | Trident(MSHTML) | Chakra | |
| Edge | ![IE / Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_24x24.png) | EdgeHTML | Chakra | |
| Firefox | ![Gecko](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_24x24.png) | Gecko | | [mozilla/gecko] |
| Chrome | ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_24x24.png) | Chromium(Blink) | [V8] |[chromium/chromium] |
| Safari | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_24x24.png) | Webkit | JavaScriptCore | [WebKit/webkit] |

> 国内浏览器基本都是双核浏览器其中一核便是 Chromium，美其名曰 “极速模式” 另外一个核便是 Trident，美其名曰 “兼容模式”。
>
> Firefox和Safari浏览器js引擎暂时未找到比较可靠的资料来源。

## 渲染引擎来源

> KHTML 奇趣科技(Trolltech)公司开发的 QT库

1. Webkit 是基于 KHTML 演变而来
1. Blink 是基于 Webkit 演变而来
1. EdgeHTML 是基于 Trident 演变而来
1. Trident 微软公司开发的
1. Gecko 网景(Netscape)公司开发的

## 兼容方法

1. `modernizr.js` 检测浏览器 HTML5 和 CSS3 特性
1. 引入Polyfill(polyfiller)相关的库

## 查询浏览器版本信息

使用 javascription 中的 BOM 对象 `navigator.userAgent`

<!-- js引擎 github 地址-->
[v8]: https://github.com/v8/v8
[rhino]: https://github.com/mozilla/rhino

<!-- 渲染引擎 github 地址-->
[WebKit/webkit]: https://github.com/WebKit/webkit
[chromium/chromium]: https://github.com/chromium/chromium
[mozilla/gecko]: https://github.com/mozilla/gecko

<!-- https://en.wikipedia.org/wiki/Comparison_of_browser_engines_(HTML_support) -->
<!-- https://en.wikipedia.org/wiki/Comparison_of_browser_engines_(CSS_support) -->
<!-- https://en.wikipedia.org/wiki/Comparison_of_browser_engines_(typography_support) -->
