---
title: <meta>
category: element
type: document-metadata
anchor: the-meta-element
order: 2
---

# `meta` 元素标签

可提供有关页面的元信息(meta-information)，比如针对搜索引擎和更新频度的描述和关键词。

## 用法

```html
// 注意: 该标签属性 charset 只可设置一个。位于 <title> 元素标签前面
<meta charset=''/> or
<meta name='' content=''/> or
<meta http-equiv='' content=''/>
```

## 子元素标签

> 不存在任何子元素和文本内容

## 属性

* [全局属性](/front-end/HTML/attribute#anchor-全局属性)
* 私有属性如下:

| 属性 | 值 | 描述 |
| --- | --- | --- |
| `name` | 查看 name 表格 | 设置文档元数据,是以键值对存在 `name`、`content`来表示 |
| `http-equiv` | pargma指令 | 如果该属性存在则必须有`content`属性 |
| `charset` | 字符集编码 | 字符编码声明,有且最多一个 |
| `content` | String类型 | 与 `http-equiv` 或 `name` 属性相关的元信息 |

### name 值

| name值 | content 值| 描述|
| --- | --- | --- |
| `name='viewport'` |  viewport表格 | 定义特定浏览器窗口特征(缩放比例,布局宽度) |
| `name='application-name'` | languages | 建议在根元素`html`上设置属性`lang` |
| `name='author'` | String类型 | 该文档作者 |
| `name='keywords'` | String类型 | 该文档关键词,多个关键词逗号隔开,通常是设置给搜索引擎抓取 |
| `name='description'` | String类型 | 该文件概要,通常是设置给搜索引擎抓取  |
| `name='generator'` | String类型 | 生成文档的工具名 |
| `name='referrer'` | `content='never'`、`content='default'`、`content='always'` or `content='origin-when-crossorigin'` | 该文档可引用政策 |

> default 值默认是 Document

### viewport值

> 该键是复合属性可用逗号隔开设置多个。

| content属性 | 值 | 描述 |
| ---- | ---- | ---- |
| width | `content='width=Integer类型'` or `content='width=width-device'` | 设置layout viewport  的宽度 |
| height | `content='height=Integer类型'`| 设置layout viewport  的高度,通常忽略此属性设置 |
| user-scalable | `content='user-scalable=yes'` or `content='user-scalable=no'` | 是否允许用户进行缩放 |
| inital-scale | `content='inital-scale=number类型'` | 设置页面的初始缩放值 |
| maximun-scale | `content='maximun-scale=number类型'`| 允许用户的最大缩放值 |
| minximun-scale | `content='minimun-scale=number类型'` | 允许用户的最小缩放值 |

### pargma指令

| http-equiv值 | content 值 | 描述 |
| ---- | ---- | ---- |
| `http-equiv='default-style'` |  | 页面上使用的首选样式表 |
| `http-equiv='refresh'` | `content='number类型; URL=" "'` | 定时重定向, number(单位: 秒)设置多长时间执行 URL值, 如果URL没有只有number则本页面间隔刷新 |
| `http-equiv='content-security-policy'` | 安全策略表,复合属性,可以通过分号(;)隔开 | 安全策略避免XSS攻击 |
| `http-equiv='set-cookie'` | String类型 | 设置 HTTP cookie不建议使用 |
| `http-equiv='content-language'` | languages | 建议在根元素`html`上设置属性`lang` |
| `http-equiv='X-UA-Compatible'` | `content='IE=edge,chrome=1'` | IE8浏览器以上兼容模式专属IE的meta。chrome=1 强制 IE 使用 Chrome Frame 渲染 |

### 安全策略(CSP)

> CSP 即 Content Security Policy 缩写 \
> 信息来源<https://www.w3.org/TR/CSP/> \
> 属于HTTP协议范畴,下面仅列出于\<meta\>元素标签使用 \
> 20种安全策略 \
> `default-scr`可以设置以下几个策略默认值:
>1. `child-src`
>1. `connect-src`
>1. `font-src`
>1. `img-src`
>1. `media-src`
>1. `object-src`
>1. `script-src`
>1. `style-src`

### 策略属性

| content属性 | 值 | 描述 | CSP版本 |
| ---- | --- | --- | --- |
| `script-src` | 策略值 | 指定脚本信任来源 | 2 |
| `object-src` | 策略值 | 指定视频信任来源 | 2 |
| `style-src` | 策略值 | 指定样式信任来源 | 2 |
| `img-src` | 策略值 | 指定图片信任来源 | 2 |
| `from-action` | 策略值 | 将表单资源提交给信任的 URL |2 |
| `default-src` | 策略值 | 设置一些策略属性默认值 | 2 |
| `font-src` | 策略值 | 指定字体信任来源 | 2 |
| `base-uri` | 策略值 | 限制文档元素中使用的URL | 2 |
| `child-src` | 策略值 | 于 3.0版本废弃 | 2 |
| `block-all-mixed-content` | `content='block-all-mixed-content;'` | 使用HTTPS加载页面时, 可防止使用HTTP加载的资源 | 3 |
| `connect-src` | 策略值 | 限制可以使用脚本接口加载的URL,如`websocket`、`fetch`、`XMLHttpRequest`等 | 2 |
| `worker-src` | 策略值 | 指定Worker有效来源 | 3 |
| `sandbox` | `allow-forms`、`allow-modals`、`allow-orientation-lock`、`allow-pointer-lock`、`allow-popups`、`allow-popups-to-escape-sandbox`、`allow-presentation`、`allow-same-origin`、`allow-scripts` or `allow-top-navigation` | 对页面的操作应用限制如 弹窗，\<iframe\> | 3 |
| `upgrade-insecure-requests` | `content='upgradde-insecure-requests;'` | 指定代理处理站点的不安全的URL,此指令适用于需要重写大量不安全遗留URL的网站 | 3 |
| `plugin-types` | MIME类型 | 限制加载的资源类型 | 2 |
| `require-sri-for` | `script` and `style` | 加载属性`integrity`的资源 | 3 |
| `frame-src` | 策略值 | 指定标签\<iframe\>信任来源| 2 |
| `manifest-src` | 策略值 | 指定`manifest`信任来源 | 3 |
| `media-src` | 策略值 | 指定标签\<video\>、\<audio\>信任来源| 2 |

### 策略值

> 9种值,每种策略属性可以设置一个或多个策略值, 用空格隔开，如果不是URL则必须使用单引号 \
> eg: `content='default-src 'self' 'unsafe-inline' 'unsafe-eval' 'none' <URL> <HOST> '<hash算法>-<base64值>' 'none-<加密随机数>''`

| 值 |  描述 |
| --- | --- |
| `'unsafe-eval'` | 允许使用eval()和类似的方法从字符串创建代码 |
| `'unsafe-inline'` | 允许使用内联资源 |
| `'self'` | 与文档来源相同的域名、端口 |
| `'strict-dynamic'` | 与文档来源相同的域名、端口 |
| `'none'` | 指空集; 也就是说，没有URL匹配 |
| `'nonce-<加密随机数>'` | 允许标签属性 `nonce`的值相等加载相关资源 |
| \<HOST\> | 设置主机域名,可使用 `http://`或`https://`协议，子域名可以通过 `*` 或者确切的子域名 |
| \<URL\> | 设置其他协议 如 `data:`、`mediastream:`、`blob:`、`filesystem:` |
| '\<sha256\>-\<base64\>' | 加载符合该加密策略的资源 |

## CSS 默认样式

```css
meta {
  display: none;
}
```

## DOM 接口(IDL)

1. 基础 [HTMLElement]
1. 私有 [HTMLMetaElement]

## ARIA 无障碍阅读

>没有任何角色和属性
