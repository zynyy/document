---
title: <!DOCTYPE>
category: element
type: docment
---

# `!DOCTYPE` 声明

因 HTML 历史遗留问题，存在着许多版本所以需要 \<!doctype htmlVersion\>声明来告知 Web 浏览器页面使用了哪种 HTML 版本。
`<!DOCTYPE>`声明位于文档中的最前面的位置，处于 `<html>` 标签之前。
`<!DOCTYPE>` 声明不是一个 HTML 标签。并且不区分大小写

## 作用

声明文档的解析类型，避免浏览器标准兼容模式关闭。如果你的页面没有DOCTYPE的声明 或者只声明没指定html版本，那么 compatMode 值是 BackCompat, 则浏览器按照自己的方式解析渲染页面，那么在不同的浏览器就会显示不同的样式。如果你的页面添加了`<!DOCTYPE html>`那么 compatMode 值是 CSS1Compat, 就会按照W3C标准解析渲染页面。

## DOM 接口(api)

> document 属于 javascript 中的 DOM 对象

1. `document.compatMode` 查看浏览器解析类型
1. `document.doctype` 查看声明信息

## 各个版本号的声明

1. HTML 5

```html
<!doctype html>
```

1. HTML 4.01

```html
// https://www.w3.org/TR/html4/sgml/loosedtd.html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
            "http://www.w3.org/TR/html4/loose.dtd">

// https://www.w3.org/TR/html4/sgml/dtd.html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
            "http://www.w3.org/TR/html4/strict.dtd">

// https://www.w3.org/TR/html4/sgml/framesetdtd.html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN"
            "http://www.w3.org/TR/html4/frameset.dtd">
```

1. XHTML 1.0

```XHTML
// https://www.w3.org/TR/xhtml1/#strict
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
            "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN"
            "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
            "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
```

<!-- <http://validator.w3.org/unicorn/#validate-by-uri+task_conformance> -->
