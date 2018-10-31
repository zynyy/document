---
title: font-feature-settings
category: property
type: fonts
---

# font-feature-settings 控制OpenType字体特征功能

控制[OpenType字体](/)特征功能。

## 语法

```css
font-feature-settings: [
  normal
  || [ <string> && [ <integer> || on || off ]? ]
]

eg:
font-feature-settings: normal; /* 设置 4 个方向边框线颜色为 red */
font-feature-settings: "dlig" 1; /* 设置 4 个方向边框线颜色为 red */
font-feature-settings: "dlig" on; /* 设置 4 个方向边框线颜色为 red */
font-feature-settings: "dlig" off; /* 设置 4 个方向边框线颜色为 red */
```

## 属性值

注: OpenType字体特征标签来源<https://docs.microsoft.com/en-us/typography/opentype/spec/features_ae>

* [全局属性值](/front-end/CSS/values#anchor-值类型)
* [string](/front-end/CSS/values#anchor-值类型): OpenType字体特征功能标签始终是__4__个ASCII字符,截至2018年6月18号总计 122种(12 + 37 + 22 + 24 + 27)
* [integer](/front-end/CSS/values#anchor-值类型): 0 表示禁止字体特征功能, 大于 0 表示启用字体特征功能
* `on`: 启用字体特征功能
* `off`: 禁止字体特征功能
