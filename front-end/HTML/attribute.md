---
title: HTML属性
order: 5
type: dom
anchor: global-attributes
---

# 属性

为 HTML 元素提供附加信息, 总是在 HTML 元素的开始标签中规定。可以存在多个属性用空格(Spacebar)隔开一般是1格。

注意: 最后一个属性没有空格紧跟着尖括号(>), 属性值应该始终被包括在引号内,单、双都可以。如果属性值本身就含有引号那么必须采取相反的,亦或者属性带的引号进行转义( \ )

## 基本用法

`<Element 属性名='值'>`

## 全局属性

> element(元素): (开始标签 + 内容 + 结束标签)
>
> 可使用 element`.getAttribute(属性名)` 方法来获取属性值, element`.setAttribute(属性名, 值)` 方法来给元素设置属性, element`.attributes` 子对象获取全部属性。element.`innerText` 子对象获取元素内的所有文本内容。想了解更多 element 的方法和子对象请到 javascript DOM 介绍查看。这里仅列出与属性有关的方法和子对象
>
> 总计 22 种类:
>1. 4.0版本以前 9种
>1. 5.0版本 8种
>1. 5.1版本 2种
>1. 5.3版本 3种

| 属性名 | 值 | element子对象 | 描述 | 版本 |
| :--- | --- | --- | --- | --- |
| `accesskey` | 键盘上的键值 | element`.accessKey`  | 指定访问元素的键盘快捷键 | 4.0 |
| `aria-*` | [WAI-ARIA-aria](/front-end/HTML/WAI-ARIA#anchor-aria---属性) | | 帮助残疾人更友好的使用 | 5.0 |
| `class` | CSS类名,复合属性,可用空格隔开设置多个 | element`.classList` <br> element`.className` | 元素的一个或多个类名（引用样式表中的类）| 4.0 |
| `contenteditable` | `true`、`false` or 空字符串 | element`.contentEditable` <br> element`.isContentEditable` | 指定是否允许用户编辑内容 | 5.0 |
| `contextmenu` | `<menu>`元素 id | | 定义元素的上下文菜单 | 5.1 |
| `dir` | `auto`、`ltr` or `rtl` | element`.dir` | 定义元素文本内容的方向 | 4.0 |
| `data-*` | string类型 | element`.dataset` | 用于存储页面的自定义数据 | 5.0 |
| `draggable` | `auto` 、`true` or `false` | element`.draggable` | 指定是否允许用户拖拽元素 | 4.0 |
| `dropzone` | `copy` 、`move` or `link` | | 当拖拽数据放开的时候会发生什么 | 5.1 |
| `hidden` | `true` or `false` | element`.hidden` | 对元素是否隐藏。| 5.0 |
| `id` | String类型 | element`.id` | 元素的唯一身份 id | 4.0 |
| `is` | 自定义元素名称 | | 自定义元素,属于webcomponents | 5.3 |
| `lang` | language code | element`.lang` | 设置元素中内容的语言代码。须遵守语言标签法| 4.0 |
| `nonce` | 随机数 | element.`nonce` | 密码临时数，属于安全策略 | 5.3 |
|  `role` | [WAI-ARIA-role](/front-end/HTML/WAI-ARIA#anchor-roles-角色) | | 帮助残疾人更友好的使用 | 5.0 |
| `spellcheck` | 空字符串、`true` or `false` | element`.spellcheck` | 检测元素是否拼写错误 | 5.0 |
| `style` | CSS样式属性,复合属性,可用分号(;)隔开设置多个 | element`.style` <br> element`.attributeStyleMap` | 元素的行内 CSS 样式 | 4.0 |
| `tabindex` | number类型 | element`.tabIndex` | 指定元素的tab顺序 | 4.0 |
| `title` | text类型 | element.`title` | 元素额外的信息 | 4.0 |
| `translate` | `yes` or `no` | element`.translate` | 指定是否一个元素的值在页面载入时是否需要翻译 | 5.0 |
| `slot` | `<slot>`元素 name 属性 | element.`slot` | 带有 `slot`属性的元素分配给由`<slot>`创建的槽 | 5.0 |
| `xmlns` | URL| | 文档中定义一个或多个可供选择的命名空间 | 5.3 |

> 自定义元素可通过 CustomElementRegistry 对象，可参考<https://github.com/mdn/web-components-examples>

## 私有属性

> 每个属性值 点击左侧 element 菜单项查看相对应标签了解
>
> 总计 95 种类:
> 1. 4.0版本以前 45 种
> 1. 5.0版本 49 种
> 1. 5.1版本 1 种
> 1. 5.3版本 3 种

| 属性名 |适用标签  | 版本 |
| ---- | --- | ---- |
| a | 统计: 11 条 5  | |
| `alt` | `<img>`、`<area>`、`<input>` |  4.0 |
| `abbr` | `<th>` |  4.0 |
| `async` | `<script>` |  5.0 |
| `accept` | `<input>` |  4.0 |
| `action` | `<form>` |  4.0 |
| `autoplay` | `<video>`、`<audio>` |  5.0 |
| `autofocus` | `<input>`、`<button>`、`<select>`、`<textarea>` |  5.0 |
| `autocomplete` | `<form>`、`<input>`、`<select>`、`<textarea>` |  5.0 |
| `accept-charset` | `<form>` |  4.0 |
| `allowfullscreen` | `<iframe>` |  5.0 |
| `allowpaymentrequest` | `<iframe>` |  5.0 |
| b |  统计: 1 条 |
| `border` | `<table>` |  4.0 |
| c | 统计: 9 条 |
| `cite` | `<blockquote>`、`<q>`、`<ins>`、`<del>` |  4.0 |
| `cols` | `<textarea>`|  4.0 |
| `coords` | `<area>` |  4.0 |
| `charset` | `<meta>`、`<script>` |  4.0 |
| `content` | `<meta>` |  4.0 |
| `checked` | `<input>` |  4.0 |
| `colspan` | `<td>`、`<th>` |  4.0 |
| `controls` | `<video>`、`<audio>` |  5.0 |
| `crossorigin` | `<link>`、`<video>`、`<audio>`、`<img>`、`<script>`  |  5.0 |
| d | 统计: 7 条|
| `data` | `<object>` |  4.0 |
| `defer` | `<script>` |  4.0 |
| `default` | `<track>` |  5.0 |
| `dirname` | `<input>`、`<textarea>` |  5.0 |
| `download` | `<a>`、`<area>` |  5.0 |
| `datetime` | `<time>`、`<ins>`、`<del>` |  4.0 |
| `disabled` | `<input>`、`<button>`、`<select>`、`<optgroup>`、`<option>`、`<textarea>`、`<fieldset>` |  4.0 |
| e |  统计: 1 条|
| `enctype` | `<form>` |  4.0 |
| f |  统计: 7 条|
| `for` | `<label>`、`<output>` |  4.0 |
| `form` | `<object>`、`<input>`、`<button>`、`<select>`、`<textarea>`、`<output>`、`<fieldset>` |  5.0 |
| `formaction` | `<input>`、`<button>` |  5.0 |
| `formmethod` | `<input>`、`<button>` |  5.0 |
| `formtarget` | `<input>`、`<button>` |  5.0 |
| `formenctype` | `<input>`、`<button>` |  5.0 |
| `formanovalidate` | `<input>`、`<button>` | 5.0 |
| h |  统计: 6 条|
| `high` | `<meter>` | 5.0 |
| `href` | `<base>`、`<link>`、`<a>`、`<area>` | 4.0 |
| `height` | `<img>`、`<iframe>`、`<embed>`、`<object>`、`<video>`、`<input>`、`<canvas>` | 4.0 |
| `headers` | `<td>`、`<th>` | 5.0 |
| `hreflang` | `<link>`、`<a>`、`<area>` | 4.0 |
| `http-equiv` | `<meta>` | 4.0 |
| i |  统计: 1 条|
| `ismap` | `<img>` |  4.0 |
| k |  统计: 1 条|
| `kind` | `<track>` |  5.0 |
| l |  统计: 5 条|
| `low` | `<meter>` |  5.0 |
| `list` | `<input>` |  5.0 |
| `loop` | `<video>`、`<audio>` |  5.0 |
| `label` | `<track>`、`<optgroup>`、`<option>` | 4.0 |
| `longdesc` | `<img>` | 4.0 |
| m |  统计: 9 条|
| `min` | `<input>`、`<meter>` |  5.0 |
| `max` | `<input>`、`<progress>`、`<meter>` |  5.0 |
| `muted` | `<video>`、`<audio>` |  5.0 |
| `media` | `<link>`、`<style>`、`<source>` | 4.0 |
| `method` | `<form>` | 4.0 |
| `maxlength` | `<input>`、`<textarea>` | 4.0 |
| `minlength` | `<input>`、`<textarea>` | 4.0 |
| `manifest` | `<html>` |  5.0 |
| `multiple` | `<input>`、`<select>` | 4.0 |
| n |  统计: 3 条|
| `name` | `<meta>`、`<iframe>`、`<object>`、`<param>`、`<map>`、`<form>`、&#x200B; `<input>`、`<button>`、`<select>`、`<textarea>`、`<output>`、`<fieldset>` |  4.0 |
| `nonce` | `<link>`、`<style>`、`<script>` |  5.1 |
| `novalidate` | `<form>` |  5.0 |
| 0 |  统计: 2 条|
| `optmum` | `<meter>` |  5.0 |
| `open` | `<details>`、`<dialog>` |  5.0 |
| p |  统计: 3 条|
| `poster` | `<video>` |  5.0 |
| `preload` | `<video>`、`<audio>` |  5.0 |
| `placeholder` | `<input>`、`<textarea>` |  5.0 |
| r |  统计: 8 条|
| `rel` | `<link>`、`<a>`、`<area>` | 4.0 |
| `rev` | `<link>`、`<a>` | 4.0 |
| `rows` | `<textarea>` | 4.0 |
| `rowspan` | `<td>`、`<th>` |  5.0 |
| `reversed` | `<ol>` |  5.0 |
| `readonly` | `<input>`、`<textarea>` |  5.0 |
| `required` | `<input>`、`<select>`、`<textarea>` |  5.0 |
| `referrerpolicy` | `<link>`、`<a>`、`<iframe>`、`<img>`、`<area>` |  5.0 |
| s |  统计: 13 条|
| `src` | `<source>`、`<img>`、`<iframe>`、`<embed>`、`<video>`、`<audio>`、`<track>`、`<input>`、`<script>`  |  4.0 |
| `step` | `<input>` |  5.0 |
| `span` | `<colgroup>`、`<col>` |  4.0 |
| `size` | `<input>`、`<select>` |  4.0 |
| `sizes` | `<link>`、`<source>`、`<img>` |  5.0 |
| `start` | `<ol>` |  4.0 |
| `shape` | `<area>` |  4.0 |
| `scope` | `<th>` |  4.0 |
| `srcdoc` | `<iframe>`、 |  5.0 |
| `srcset` | `<source>`、`<img>` |  5.0 |
| `sandbox` | `<iframe>`、 |  5.0 |
| `srclang` | `<track>` |  5.0 |
| `selected` | `<option>` |  4.0 |
| t |  统计: 3 条|
| `type` | `<link>`、`<style>`、`<ol>`、`<a>`、`<source>`、`<embed>`、`<object>`、`<input>`、`<button>`、`<script>`、`<area>` |  5.0 |
| `target` | `<base>`、`<a>`、`<form>`、`<area>` |  4.0 |
| `typemustmatch` | `<object>` |  5.0 |
| u |  统计: 1 条|
| `usemap` | `<img>` |  5.0 |
| v |  统计: 1 条|
| `value` | `<li>`、`<data>`、`<param>`、`<input>`、`<button>`、`<option>`、`<progress>`、`<meter>` |  4.0 |
| w |  统计: 2 条|
| `wrap` | `<textarea>` |  5.0 |
| `width` | `<img>`、`<iframe>`、`<embed>`、`<object>`、`<video>`、`<input>`、`<canvas>` |  4.0 |

## 事件属性

> 事件属性值都是 javascript 方法名。
>
> 是 javascript DOM 对象中重要的一环,又称 DOM 事件
>
> 具体用法可到<>详细查看

### 键盘事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `onkeyup` | 松开任意键盘 | |
| `onkeydown` | 按下任意键盘 | |
| `onkeypress` | 按下任意键盘 | |

### 鼠标事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `onclick` | 在元素上点击左键 | 4.0 |
| `ondblclick` | 在元素上双击左键 | 4.0 |
| `onauxclick` | 在元素上双击鼠标按键 | 4.0 |
| `oncontextmenu` | 在元素上点击右键 | 4.0 |
| `onwheel` | 在元素上滚轮任意方向 | 4.0 |
| `onselect` | 文本被选中 | 4.0 |
| `onmousemove` | 在元素内移动时持续触发 |
| `onmouseover` |移动到有事件监听的元素或者它的子元素内触发 | 4.0 |
| `onmouseout` | 移出有事件监听的元素或者它的子元素内触发 | 4.0 |
| `onmouseenter` | 移动到有事件监听的元素内 | 4.0 |
| `onmouseleave` | 移出有事件监听的元素 | 4.0 |
| `onmouseup` | 在元素上松开任意鼠标按键 | 4.0 |
| `onmousedown` | 在元素上按下任意鼠标按键 | 4.0 |
| `onmousewheel` | 在元素上按下任意鼠标按键 | 4.0 |

### 焦点事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `onblur` | | 4.0 |
| `onfocus` | | 4.0 |

### 资源加载事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `onabort` | 资源加载失败时调用 | 4.0 |
| `onunload` | 资源正在被卸载调用 | 4.0 |
| `onbeforeunload` | 资源即将被卸载调用 | 4.0 |

| `onloadedmetadata` | 资源即将被卸载调用 | 4.0 |
| `onerror` | 资源即将被卸载调用 | 4.0 |
| `onload` | 资源即将被卸载调用 | 4.0 |

### 网络事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `ononline` | 浏览器获得网络访问 | |
| `onoffline` | 浏览器失去网络访问 | |

### 表单事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `onreset` | 重置 form 表单中所有数据 | 4.0 |
| `onsubmit` | 提交 form 表单中所有数据 | 4.0 |
| `oninput` | 提交 form 表单中所有数据 | 4.0 |
| `oninvalid` | 提交 form 表单中所有数据 | 4.0 |

### 打印事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `onafterprint` | 打印机关闭时触发 | |
| `onbeforeprint` |打印机就绪时触发 | |

### 文本组合事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |

### 视图事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `onscroll` | 文档视图或元素滚动时触发 | 4.0 |
| `onresize` | 文档视图窗口大小变化时触发 | 4.0 |

### 剪贴板事件

| 事件名 | 所属 | 作用 | 版本 |
| --- |--- | --- |
| `oncut` | 剪贴选中的文本内容并且复制到了剪贴板 | 5.0 |
| `oncopy` | 把选中的文本内容复制到了剪贴板 | 5.0 |
| `onpaste` | 从剪贴板复制的文本内容被粘贴 | 5.0 |

### 拖放事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `ondrag` | 正在拖到元素或文本选区持续触发(350ms) | 5.0 |
| `ondrop` | 元素在有效释放目标区上释放 | 5.0 |
| `ondragstart` | 用户开始拖动HTML元素或选中的文本 | 5.0 |
| `ondragend` | 拖放操作结束 （松开鼠标按钮或按下Esc键） | 5.0 |
| `ondragover` | 被拖动的元素或文本选区正在有效释放目标上被拖动 | 5.0 |
| `ondragenter` | 被拖动的元素或文本选区移入有效释放目标区 | 5.0 |
| `ondragleave` | 被拖动的元素或文本选区移出有效释放目标区 | 5.0 |
| `ondragexit` | 被拖动的元素或文本选区移出有效释放目标区 | 5.0 |

### 媒体事件

> 即 `<video>`、`<audio>` 元素标签。当音频/视频处于加载过程中时，会依次发生以下事件:
> 1. onloadstart
> 1. ondurationchange
> 1. onloadedmetadata
> 1. onloadeddata
> 1. onprogress
> 1. oncanplay
> 1. oncanplaythrough

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `onloadstart` | 开始读入媒体数据时触发的事件 | |
| `ondurationchange` | 更改声频、视频的时长时触发 | |
| `onloadedmetadata` | 当浏览器开始加载声频、视频的元数据（播放时间、视频宽、高等）时触发的事件 | 4.0 |
| `onloadeddata` | 浏览器加载声频、视频当前帧结束后 | 4.0 |
| `onprogress` | 浏览器正在下载媒体数据时 | |
| `oncanplay` | 当浏览器可以播放媒体数据时 | |
| `oncanplaythrough` | 当浏览器可以在不因缓冲而停顿的情况下播放时 | |
| `oncuechange` | 当 textTracks 属性改变当前显示的提示时就会触发 | |
| `onemptied` | 当 textTracks 属性改变当前显示的提示时就会触发 | |
| `onpause` | 当 声频、视频暂停时播放时就会触发 | |
| `onplay` | 当 声频、视频开始播时就会触发时就会触发 | |
| `onplaying` | 当 声频、视频暂停后准备开始播放时执行时就会触发 | |
| `onratechange` | 当 声频、视频的播放速度发生改变时就会触发 | |
| `onseeked` | 当用户重新定位声频、视频的播放位置时就会触发 | |
| `onseeking` | 当用户开始定位声频、视频的播放位置时就会触发 | |
| `onstalled` | 当 textTracks 属性改变当前显示的提示时就会触发 | |
| `onsuspend` | 当 textTracks 属性改变当前显示的提示时就会触发 | |
| `ontimeupdate` | 当 textTracks 属性改变当前显示的提示时就会触发 | |
| `onvolumechange` | 当 textTracks 属性改变当前显示的提示时就会触发 | |
| `onwaiting` | 当 textTracks 属性改变当前显示的提示时就会触发 | |
| `onended` | 当 声频、视频播放完毕时就会触发 | |

### 存储事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `onpopstate` | |
| `onstorage` | |

### 更新事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| | |

### 值变化事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `onchange` | 当输入的值发生改变的时候 | 4.0 |
| `onhashchange` | URL 中的 hash(即#后面数据) 发生变化调用 | 4.0 |
| `onlanguagechange` | 元素属性`lang` 发生变化 调用| 4.0 |
| `onreadystatechange` | 当前文档的状态(即 `document.readyState` 值)发生更改时会触发| 5.0 |

### 触摸事件

>只有触摸屏才有的事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `ontouchcancel` | |
| `ontouchend` | |
| `ontouchenter` | |
| `ontouchleave` | |
| `ontouchmove` | |
| `ontouchstart` | |

### CSS 动画事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `onanimationend` | 某个 CSS 动画完成时触发 |  |
| `onanimationstart` | 某个 CSS 动画开始时触发 |  |
| `onanimationiteration` | 某个 CSS 动画完成后又重新开始时触发 |  |

### WebSocket事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `onmessage` | 通过 WebSocket 接收到消息 | 5.0 |
| `onmessageerror` | 通过 WebSocket 接收到消息 | 5.0 |

### FileReader 事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `onloadend` |

### Promises 事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `onrejectionhandled` |--- | 5.0 |
| `onunhandledrejection` |--- | 5.0 |

### 窗口事件

| 事件名 | 作用 | 版本 |
| --- | --- | --- |
| `oncancel` | 通过 WebSocket 接收到消息 | 5.0 |
| `onclose` | 通过 WebSocket 接收到消息 | 5.0 |

### 会话历史事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `onpagehide` | | |
| `onpageshow` | | |

### 其他事件

| 事件名 | 作用 | 版本 |
| --- |--- | --- |
| `onshow` | | |
| `ontoggle` | | |
| `onappinstalled` | | |
| `onbeforeinstallprompt` | | |
| `ondevicemotion` | | |
| `ondeviceorientation` | | |
| `ondeviceorientationabsolute` | | |
| `ongotpointercapture` | | |
| `onlostpointercapture` | | |
| `onpointercancel` | | |
| `onpointerdown` | | |
| `onpointerenter` | | |
| `onpointerleave` | | |
| `onpointermove` | | |
| `onpointerout` | | |
| `onpointerover` | | |
| `onpointerup` | | |
| `onsearch` | | |
| `ontransitionend` | | |

## 过时的属性

> 指的是在HTML4.01标准中可以使用。但是在HTML5中标准淘汰

| 属性名 | 原因 |
| --- | --- | --- |
| `align` |  CSS 的 `text-align` 属性更适合 |
| `alink` |  CSS 的 `:active` 伪类更适合 |
| `archive` | 性能方面的原因 |
| `axis` |  |
| `background` | CSS 的 `background` 属性更合适 |
| `bgcolor` | CSS 的 `background-color` 属性更合适 |
| `char` | |
| `charset` |  |
| `cellpadding` |  |
| `cellspacing` |  |
| `color` |  |
| `compact` |  |

> 比较来源 <https://www.w3.org/TR/html401/index/attributes.html>

## 来源

1. <https://www.w3.org/TR/html51/fullindex.html>
