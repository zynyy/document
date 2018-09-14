---
title: WAI-ARIA 无障碍阅读
order: 6
---

# WAI-ARIA

WAI-ARIA 即Web Accessibility Initiative-Accessible Rich Internet Application 缩写,指无障碍富互联网应用,可以使一些有功能障碍（如听力，视力）的人群。他们借助一些设备如正常人一样使用你的网站。

常见读屏软件设备有:

* 移动端
  1. Android: TalkBack
  1. Android: Funtouch
  1. iPhone: VoiceOver 开启 设置 通用 辅助功能 旁白
* PC端
  1. Windows: NVDA, JAWS
  1. Chrome: ChromeVox
  1. OSX: VoiceOver

## 使用 ARIR

应用于HTML的ARIA有两个部分组成:

* `role`(角色): 标识一个元素的作用
* `aria-*`(属性): 描述了有关事物特征以及什么样的状态

## WAI-ARIA 在 HTML 使用的规则

1. 如果使用的元素(HTML5)具有语义化，那么这些元素就不该重新添加一个 ARIA角色、状态。反之就可以使用
1. 如果存在隐式角色则不可以在一次定义,如`<a href=''>`含有隐式角色`link`则禁止`<a href='' role="link">`定义
1. 所有的ARIA 控件必须具有键盘(keyboard)事件,即用户用鼠标能操作的基本都要添加键盘事件
1. 具备有可获取焦点的元素使用 ARIA 角色 `presentation`、`none`, 属性 `aria-hidden="true"`
1. 一个HTML标签有且只有一个角色，可以多个属性

>各个标签私有的 ARIA角色、特征、状态。将在 `HTML` 元素标签展示和介绍

## roles 角色

> 角色所对应的私有属性带有 &lpar; &#42; &rpar;的说明,如果定义了该角色那么该属性必须存在。\
> 写有多个版本的说明有变化\
> 总计 69 个角色:
> * 1.0版本 61 个角色
> * 1.1版本 8 个角色

| 角色 | 含义 | 私有属性 | 版本 |
| --- | --- | --- | --- |
| `alert` | 警告 | 特征: 无。<br> 状态: `aria-expanded` | 1.0 |
| `alertdialog` | 警告框 | 特征: `aria-modal`。<br> 状态: `aria-expanded` | 1.0 |
| `application` | 应用 | 特征: 无。<br> 状态: `aria-expanded` | 1.0 |
| `article` | 文章 | 特征: 无。<br> 状态: `aria-expanded` |  1.0 |
| `banner` | 横幅 | 特征: 无。<br> 状态: `aria-expanded` | 1.0 |
| `button` | 按钮 | 特征: 无。<br> 状态: `aria-expanded` or `aria-pressed` | 1.0 |
| `cell` |  | 特征: `aria-colspan`、`aria-colindex`、`aria-rowindex` or `aria-rowspan`。<br> 状态: 无 | 1.1 |
| `checkbox` | 下拉列表框 | 特征: 无。<br> 状态: `aria-checked`\* | 1.0 |
| `columnheader` |  | 特征: `aria-sort`、`aria-readonly` or `aria-required`。 <br> 状态: `aria-selected` or `aria-expanded` | 1.0 |
| `combobox` |  | 特征: `aria-autocomplete`、`aria-required` or `aria-activedescendant` <br> 状态: `aria-expanded`\* | 1.0 |
| `complementary` |  | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `contentinfo` |  | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `definition` |  | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `dialog` |  | 特征: 无。 <br> 状态: `aria-expanded` or `aria-modal` | 1.0 1.1 |
| `directory` |  | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `document` |  | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `feed` |  | 特征: 无。 <br> 状态: `aria-expanded` | 1.1 |
| `figure` |  | 特征: 无。 <br> 状态: `aria-expanded` | 1.1 |
| `form` |  | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `grid` | 网格 | 特征: `aria-level`、`aria-multiselectable`、`aria-readonly` 、`aria-activedescendant`、`aria-colcount` or `aria-rowcount`。 <br> 状态: `aria-expanded` | 1.0 1.1 |
| `gridcell` | 网格单元 | 特征: `aria-readonly`、`aria-required`、`aria-colindex`、`aria-colspan`、`aria-rowspan` or `aria-rowindex`。 <br> 状态: `aria-expanded` or `aria-selected` | 1.0 1.1 |
| `group` | 组合 | 特征: `aria-activedescendant`。 <br> 状态: `aria-expanded` | 1.0 |
| `heading` | 应用程序标题头 | 特征: `aria-level`。 <br> 状态: `aria-expanded` | 1.0 |
| `img` |  | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `link` |  | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `list` |  | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `listbox` | 列表框 | 特征: `aria-multiselectable`、`aria-required`、`aria-activedescendant` or `aria-orientation`。 <br> 状态: `aria-expanded` | 1.0 1.1 |
| `listitem` |  | 特征: `aria-level`、`aria-posinset` or `aria-setsize`、。 <br> 状态: `aria-expanded` | 1.0 |
| `log` | 日志 | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `main` |  | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `marquee` |  | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `math` |  | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `menu` | 菜单  | 特征: `aria-activedesendant` or `aria-orientation`。 <br> 状态: `aria-expanded` | 1.0 1.1 |
| `menubar` | 菜单栏 | 特征: `aria-activedesendant` or `aria-orientation`。 <br> 状态: `aria-expanded` | 1.0 1.1 |
| `menuitem` | 菜单项 | 特征: 无。 <br> 状态: 无 | 1.0 |
| `menuitemcheckbox` | 可复选的菜单项 | 特征: 无。 <br> 状态: `aria-checked`\* | 1.0 |
| `menuitemradio` | 单选菜单项 | 特征: `aria-posinset` or `aria-setsize`。 <br> 状态: `aria-checked`\* or `aria-selected` | 1.0 |
| `navigation` | 导航栏 | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `none` | 隐藏 | 特征: 无。 <br> 状态: `aria-expanded` | 1.1 |
| `note` | 注意 | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `option` | 选项 | 特征: `aria-posinset` or `aria-setsize`。 <br> 状态: `aria-checked` or `aria-selected` | 1.0 |
| `presentation` | 陈述(描述) | 特征: 无。 <br> 状态: 无 | 1.0 |
| `progressbar` | 进度条 | 特征: `aria-valuemax`、`aria-valuemin`、`aria-valuenow`、 or `aria-valuetext`。 <br> 状态: 无 | 1.0 |
| `radio` |  单选 | 特征: `aria-posinset` or `aria-setsize`。 <br> 状态: `aria-checked`\* or `aria-selected` | 1.0 |
| `radiogroup` | 单选按钮组合 | 特征: `aria-required`、`aria-activedescendant` or `aria-orientation`。 <br> 状态: `aria-expanded` | 1.0 1.1 |
| `region` | 区域 | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `row` | 行 | 特征: `aria-activedescendant`、`aria-level`、`aria-rowindex` or `aria-colindex`。 <br> 状态: `aria-expanded` or `aria-selected` | 1.0 1.1 |
| `rowgroup` | 行组合 | 特征: `aria-activedescendant`。 <br> 状态: `aria-expanded` | 1.0 |
| `rowheader` | 行标题 | 特征: `aria-colspan`、`aria-colindex`、`aria-rowspan`、`aria-rowindex`、`aria-sort`、`aria-readonly` or `aria-required`。 <br> 状态: `aria-expanded` or `aria-selected` | 1.0 1.1 |
| `scrollbar` | 滚动条 | 特征: `aria-controls`\*、`aria-orientation`\*、`aria-valuemax`\*、`aria-valuemin`\* or `aria-valuenow`\*。 <br> 状态: `aria-expanded` | 1.0 |
| `search` | 搜索 | 特征: `aria-orientation`。 <br> 状态: `aria-expanded` | 1.0 |
| `searchbox` | 搜索框 | 特征: `aria-orientation`。 <br> 状态: `aria-expanded` | 1.1 |
| `separator` | 分隔 | 特征: `aria-valuemin`\*、`aria-valuemax`\*、`aria-valuenow`\*、`aria-valuetext` or `aria-orientation`。 <br> 状态: 无 | 1.0 1.1 |
| `slider` | 滑动条 | 特征: `aria-valuemax`\*、`aria-valuemin`\*、`aria-valuenow`\*、`aria-orientation`、or `aria-valuetext`。 <br> 状态: 无 | 1.0 |
| `spinbutton` | 微调 | 特征: `aria-valuemax`\*、`aria-valuemin`\*、`aria-valuenow`\*、`aria-required`、or `aria-valuetext`。 <br> 状态: 无 | 1.0 |
| `status` | 状态  | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `switch` | 开关选项 | 特征: 无。 <br> 状态: `aria-expanded` | 1.1 |
| `tab` | tab标签 | 特征: 无。 <br> 状态: `aria-expanded` or `aria-selected` | 1.0 |
| `tablist` | 标签列表 | 特征: `aria-orientation`、`aria-level` or `aria-activedescendant`。 <br> 状态: `aria-expanded` | 1.0 1.1 |
| `tabpanel` | 标签面板 | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `table` | 表格 | 特征: `aria-level` or `aria-activedescendant`。 <br> 状态: `aria-expanded` | 1.1 |
| `term` |  | 特征: `aria-level` or `aria-activedescendant`。 <br> 状态: `aria-expanded` | 1.1 |
| `textbox` |  | 特征: `aria-activedescendant`、`aria-autocomplete`、`aria-multiline`、`aria-readonly`、`aria-placeholder` or `aria-required`。  <br> 状态: 无 | 1.0 1.1 |
| `timer` | 计数 | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 |
| `toolbar` | 工具栏 | 特征: `aria-activedescendant` or `aria-orientation`。  <br> 状态: `aria-expanded` | 1.0 |
| `tooltip` | 提示文本 | 特征: 无。 <br> 状态: `aria-expanded` | 1.0 1.1 |
| `tree` | 树形 | 特征: `aria-multiselectable`、`aria-required`、`aria-orientation` or `aria-activedescendant`。 <br> 状态: `aria-expanded` | 1.0 1.1 |
| `treegrid` |  | 特征: `aria-level`、`aria-multiselectable`、`aria-readonly`、`aria-required`、`aria-colcount`、`aria-rowcount` or `aria-activedescendant`。 <br> 状态: `aria-expanded` | 1.0 |
| `treeitem` | 树结构选项 | 特征: `aria-level`、`aria-posinset` or `aria-setsize`。 <br> 状态: `aria-expanded`、`aria-checked` or `aria-selected` | 1.0 |

## aria-* 属性

> 所属: 全局适用于所有角色, 私有只适用个别角色。 \
> 总计 49 条属性:
> * 1.0版本个:定义了全局特征 9 个、状态 5 个, 私有特征 17 个、状态 4 个,
> * 1.1版本:增加了全局特征 5 个、状态 1 个, 私有特征 8 个、状态 0 个。

### 特征 property

> or => 代表该属性只有一个值 \
> and => 代表该属性可以一个或多个值,用空格隔开

| 属性名 | 所属 | 默认值 | 属性值 | 描述 |版本 |
| ---- | ---- | ---- | --- | --- | --- |
| `aria-atomic` | 全局 | `false` | `true` or `false` | | 1.0 |
| `aria-controls` | 全局 | | 元素 ID | `aria-owns`所定义的元素 ID | 1.0 |
| `aria-describedby` | 全局 | | 元素 ID | `aria-labelledby`所定义的元素 ID | 1.0 |
| `aria-details` | 全局 | | 元素 ID | `aria-labelledby`所定义的元素 ID | 1.1|
| `aria-dropeffect` | 全局 | `none` | `copy`、`execute`、`link`、`move`、`node` and `popup` | | 1.0 |
| `aria-errormessage` | 全局 | | 元素 ID | 必须与`aria-invalid`属性一起使用。<br /> `aria-live`所定义的元素ID | 1.1 |
| `aria-flowto` | 全局 | | 元素 ID | | 1.0 |
| `aria-haspopup` | 全局 | `false` | `false`、`true`、`menu`、`listbox`、`tree`、`grid` or `dialog` | | 1.0 |
| `aria-keyshortcuts` | 全局 | | string | 键盘快捷键组合 | 1.1 |
| `aria-label` | 全局 | | sting |  | 1.0 |
| `aria-labelledby` | 全局 | | 元素 ID | | 1.0 |
| `aria-live` | 全局 | | `off` | `assertive`、`off` or `polite` | 1.0 |
| `aria-owns` | 全局 | | 元素 ID | | 1.0 |
| `aria-relevant` | 全局 | | `additions`、`all`、`removals` and `text` | | 1.0 |
| `aria-roledescription` | 全局 | | roles | 覆盖`role` | 1.1 |
| `aria-sort` | 私有 | `none` | `ascending`、`none`、`descending` or `other` | | 1.0 |
| `aria-readonly` | 私有 | `false` | `true` or `false` | | 1.0 |
| `aria-required` | 私有 | `false` | `true` or `false` | | 1.0 |
| `aria-colspan` | 私有 | | integer类型 | | 1.1 |
| `aria-colindex` | 私有 | | integer类型 | | 1.1 |
| `aria-rowindex` | 私有 | | integer类型 | | 1.1 |
| `aria-rowspan` | 私有 | | integer类型 | | 1.1 |
| `aria-autocomplete` | 私有 | `none` | `inline`、`list`、`both` or `none` | | 1.0 |
| `aria-colcount` | 私有 | integer类型 | `horizontal`、`undefined` or `vertical` | | 1.1 |
| `aria-modal` | 私有 | `false` | `true` or `false` | | 1.1 |
| `aria-activedescendant` | 私有 | | 元素 ID | | 1.0 |
| `aria-level` | 私有 | | integer类型 | | 1.0 |
| `aria-multiline` | 私有 | `false` | `true` or `false` | | 1.0 |
| `aria-multiselectable` | 私有 | `false` | `true` or `false` | | 1.0 |
| `aria-posinset` | 私有 | | integer类型 | | 1.0 |
| `aria-setsize` | 私有 | | integer类型 | | 1.0 |
| `aria-valuemax` | 私有 | | number类型 | | 1.0 |
| `aria-valuemin` | 私有 | | number类型 | | 1.0 |
| `aria-valuenow` | 私有 | | number类型 | | 1.0 |
| `aria-valuetext` | 私有 | | string类型 | | 1.0 |
| `aria-controls` | 私有 | | 元素 ID | | 1.0 |
| `aria-orientation` | 私有 | `undefined`| `horizontal`、`undefined` or `vertical` | | 1.0 |
| `aria-placeholder` | 私有 | | string类型 | | 1.1 |
| `aria-rowcount` | 私有 | | integer类型 | | 1.1 |

### 状态 state

| 属性名 | 所属 | 默认值 | 值 |  版本 |
| ---- | ---- | ---- | --- |
| `aria-busy` | 全局 | `false` | `true` or `false` | 1.0 |
| `aria-current` | 全局 | `false` | `true` 、`false` 、`step`、 `page` `location`、`date` or `time` | 1.1 |
| `aria-disabled` | 全局 | `false` | `true` or `false` | 1.0 |
| `aria-grabbed` | 全局 | `undefined` | `true`、`false` or `undefined` | 1.0 |
| `aria-hidden` | 全局 | `undefined` | `true`、`false` or `undefined` | 1.0 |
| `aria-invalid` | 全局 | `false` | `true`、`false`、`grammar` or `spelling` | 1.0 |
| `aria-expanded` | 私有 | `undefined` | `true`、`false` or `undefined` | 1.0 |
| `aria-selected` | 私有 | `undefined` | `true`、`false` or `undefined` | 1.0 |
| `aria-checked` | 私有 | `undefined` | `true`、`false`、`mixed` or `undefined` | 1.0 |
| `aria-pressed` | 私有 | `undefined` | `true`、`false`、`mixed` or `undefined` | 1.0 |

## ARIA的规则

## UML 图

![aria 关系图](https://www.w3.org/TR/wai-aria-1.1/img/rdf_model.svg)

## 标准规范定义

* WAI-ARIA 1.0 版本 <https://www.w3.org/TR/wai-aria-1.0/> 对应的 HTML 版本是5.0
* WAI-ARIA 1.1 版本 <https://www.w3.org/TR/wai-aria-1.1/> 对应的 HTML 版本是5.2~5.3

<style>
  .markdown tabel td:last-child {
    width: 10%;
  }
</style>
