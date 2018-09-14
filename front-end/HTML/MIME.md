---
title: MIME类型
order: 7
---

# MIME 多用途互联网邮件扩展类型

MIME 即 Multipurpose Internet Mail Extensions 缩写, 是一种标准化的方式来表示文档的性质和格式。互联网号码分配机构(IANA)负责跟踪所有官方 MIME 类型的官方机构。
浏览器通常使用MIME类型（而不是文件扩展名）来确定如何处理文档；因此服务器设置正确以将正确的MIME类型附加到响应对象的头部是非常重要的。
数据: 800多种MIME类型，1000多种扩展名。
此项应属于`HTTP`协议内容,因`<input type="file">`这个标签所以把这项内容放在了`HTML`里来。

## MIME 语法

### 结构

> type/subtype

MIME 结构是由类型和子类型两个字符串中间使用`/`分隔组成。并不允许空格存在。type 表示类别。subtype 表示细分后的每个类型

### 类别

| 类别 | 描述 | 例子 |
| --- | --- | --- |
| `text` | 表明文件是普通文本 | `text/html` |
| `image` | 表明是某种图像 | `image/png` |
| `auio` | 表明是某种音频文件 | `audio/mpeg`|
| `video` | 表明是某种视频文件 | `video/mp4` |
| `application` | 表明是某种二进制数据 | `application/octet-stream` |
| `multipart` | 复合类型,也就是说提供了一种封装零个或多个对象的方法，每个对象都标有自己的类型, | `multipart/form-data` |

以上 6 个类别在 HTTP 请求头(Content-Type)里面较为常见

## 常见扩展对应的 MIME 类型

> 注意
> 如果以下MIME类型没有找到你想要的,并
> 懂得使用 node 的包管理工具 `npm install node-mime` 安装这个包。主要两个方法查询类型和扩展: `getType(扩展名)`返回相对应的MIME类型, `getExtension(MIME类型)`返回相对应的扩展名,其他方法自己查看。
> 如果浏览器有安装格式化json插件可以查看[标准版](https://raw.githubusercontent.com/broofa/node-mime/master/types/standard.json) [其他版](https://raw.githubusercontent.com/broofa/node-mime/master/types/other.json)并没有`multipart`这个类别。
> 如果想查询相对应MIME类型文献可以到<https://www.freeformatter.com/mime-types-list.html>进行查找

### application

| MIME 类型 | 文件扩展名 |
| --- | --- |
| `application/postscript` | `.jar` |
| `application/vnd.android.package-archive` | `.apk` |

### text

| MIME 类型 | 文件扩展名 |
| --- | --- |
| `text/plain` |  |

### image

| MIME 类型 | 文件扩展名 |
| --- | --- |
| `image/bmp` | `.bmp` |
| `image/png` | `.png` |
| `image/jpeg` | `.jpeg`, `.jpg` |
| `image/gif` | `.gif` |
| `image/svg+xml` | `.svg` |
| `image/vnd.adobe.photoshop` | `.psd` |
| `image/vnd.microsoft.icon` | `.ico` |
| `image/tiff` | `.tiff` |
| `image/wmf` | `.wmf` |
| `image/vnd.zbrush.pcx` | `.pcx` |
| `image/vnd.fpx` | `.fpx` |
| `image/vnd.dxf` | `.dxf` |

>后续待补充

### video

| MIME 类型 | 文件扩展名 |
| --- | --- |

### audio

| MIME 类型 | 文件扩展名 |
| -------- | ---------- |

### multipart

该类别是复合类型所以没有对应的文件扩展
