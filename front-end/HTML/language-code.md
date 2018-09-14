---
title: language-code 语言代码
order: 3
---

# language-code

是将字母或数字指定为语言的标识符或分类符的代码。这些代码可用于组织库集合或数据表示，选择计算中的正确本地化和翻译，并作为较长的语言名称形式的缩写。

语言的标签表示法的国际标准是[RFC 4646](http://www.ietf.org/rfc/rfc4646.txt)，名称是《Tags for Identifying Languages》

ISO 639规定的代码是，用两个拉丁字母表示一种语言，这被称为ISO 639-1。但是，两个拉丁字母最多只有26^2=676种组合，而世界上已知的语言总数可能有六七千种，因此明显是不够的。所以，后来又规定了ISO 639-2，用三个拉丁字母的组合表示一种语言。

>写的不好，并不通顺。

## 结构

language-code = language( - subcode )

>language 是必须的, subcode可选, 通常约定 language 是小写

### subcode 主要有

1. script: 表示书写格式，比如简体汉字是zh-Hans，繁体汉字是zh-Hant。
1. extlang: 表示扩展语言文字种类: 比如闽南语 nan,只有 language 是(macrolanguage)才有扩展语言。注意: 扩展类语言可以作为独立语言写而不需要写宏语言前缀即(lang='zh-nan') 可以改写成 (lang='nan')
1. region: 表示语言使用的地理区域，比如zh-Hans-CN就是中国大陆使用的简体中文。
1. variant: 表示变体。如拼音是拉丁而来的 所以 zh-Latn-pinyin
1. extension: 表示扩展用途
1. privateus: 私有标识

> macrolanguage: 表示这个语言种类非常多。宏语言
>
> 一般约定,region标签全部大写，script标签只有首字母大写(通常四个字母)。不同标签之间用连字号-链接。
> 有 extlang 的一般前面不用标写 language
>
> 基本大部分操作系统和浏览器依然沿用 language + region 的方式, 最多也就 language + script + region

## language-code 列表

1. 大约存在 7903多种语言 其中 宏语言(macrolanguage) 大概在 62 种左右, 扩展类语言大概 235 种左右
1. 大约存在 196多书写格式
1. 大约存在 304多地区
1. 大约存在 100多种变体

> 这里仅列出世界母语前十和第二语言前十的,[了解更多](http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)

| language | extlang | script | region | variant | 描述 |
| ---- |  --- | --- | ---- | ---- | ----- |
| zh | cdo、cjy、cmn、cpx、czh、czo、gan、hak、hsn、lzh、mnp、nan、wuu、yue | Hans(简体) or Hant(繁体) | HK(香港)、MO(澳门)、CN(大陆)、TW(台湾) or SG(新加坡) | Latn-pinyin or Latn-wadegile | 中文(Chinese) |
| en | | | GB(英国)、US(美国) | basiceng、boont、cornu、emodeng、oxendict、scotland、scouse、spanglis、unifon | 英语(English) |
| es | ssp | | ES(西班牙) | | 西班牙语(Spanish) |
| hi | | | IN(印度) | | 印地语(Hindi) |
| ar | aao、abh、abv、acm、acq、acw、acx、acy、adf、aeb、aec .... | | SA(沙特阿拉伯) | | 阿拉伯语(Arabic) |
| bn | | Beng | BD(孟加拉) | | 孟加拉语(Bengali) |
| pt | psr | | PT(葡萄牙) | | 葡萄牙语(Portuguese) |
| ru | rsl |  luna1918、petr1708 | RU(俄国) | | 俄语(Russian) |
| ja | jsl | Jpan | JP(日本) |  | 日语(Japanese) |
| de | gsg | | DD(德国共和)、DE(德国) | | 德语(German) |
| fr | fsl、sfb、ssr | | FR(法国)| | 法语(French) |
| pny | | | | | 拼音 |
| chi | | | | | 中国式英语 |
| csl | | | | | 中国手语 |
| ltc | | | | | 中古汉语 |
| och | | | | | 古代汉语 |
| zhx | | | | | 汉语 |
| bxu | | | | | 布里亚特(蒙古人) |

## 扩展语言

| 语言code | 全称 | 语言 |
| --- | --- | --- |
| cmn | Mandarin | 普通话 |
| lzh | Literary | 文言文 |
| cdo | Min Dong | 闽东语 |
| nan | Min Nan | 闽南语 |
| mnp | Min Bei | 闽北语 |
| czo | Min Zhong | 闽中语 |
| hak | Hakka | 客家语 |
| hsn | Xiang | 湘语(湖南) |
| wuu | Wu | 吴语(上海) |
| yue | Yue | 粤语 |
| cjy | Jinyu | 晋语(中国北方) |
| cpx | Pu-Xian | 莆仙语 |
| czh | Huizhou | 徽州话 |
| gan | Gan | 赣语 |
