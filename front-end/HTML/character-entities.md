---
title: 实体符
order: 4
---

# HTML 实体符

是SGML(Standard Generalized Markup language)构建的字符集引用。

> 字符集是 unicode 联盟制定的标准

1. ISO 8859-1
1. ISO 10646

## 实体符构成

> ctrl + shift + p

* 第一部分是一个`&`符号，英文叫ampersand。
* 第二部分是实体名称, `#`加上编码叫做NCR(numeric character reference)
* 第三部分是一个分号(`;`)
> 编码分为: 十进制 和 十六进制以x开头 \
> 不同的字符集，编码与名称是不同的

## 实体符列表

> 点击图标可复制实体符。按钮可以选择复制那种类型: 实体名, 十进制，十六进制 \
> 想了解更多实体符请到<https://www.unicode.org/charts/#symbols>查看pdf \
> 下面仅列出有实体名称 1448 种

### 标点

```jsx
import CharaRef from 'component/CharRef';

ReactDOM.render(<CharaRef category="arr"/>, mountNode);
```

### 标志

```jsx
import CharaRef from 'component/CharRef';

ReactDOM.render(<CharaRef category="sign"/>, mountNode);
```

### 货币

```jsx
import CharaRef from 'component/CharRef';

ReactDOM.render(<CharaRef category="money"/>, mountNode);
```

### 数学

```jsx
import CharaRef from 'component/CharRef';

ReactDOM.render(<CharaRef category="math"/>, mountNode);
```

### 空格

```jsx
import CharaRef from 'component/CharRef';

ReactDOM.render(<CharaRef category="space"/>, mountNode);
```

### 形状

```jsx
import CharaRef from 'component/CharRef';

ReactDOM.render(<CharaRef category="shape"/>, mountNode);
```

### 几何图形

```jsx
import CharaRef from 'component/CharRef';

ReactDOM.render(<CharaRef category="geometry"/>, mountNode);
```

### 箭头

```jsx
import CharaRef from 'component/CharRef';

ReactDOM.render(<CharaRef category="arrow"/>, mountNode);
```

### 分数

```jsx
import CharaRef from 'component/CharRef';

ReactDOM.render(<CharaRef category="frac"/>, mountNode);
```

### 矢量

```jsx
import CharaRef from 'component/CharRef';

ReactDOM.render(<CharaRef category="vector"/>, mountNode);
```

### 档案

```jsx
import CharaRef from 'component/CharRef';

ReactDOM.render(<CharaRef category="filig"/>, mountNode);
```

### 制表符

```jsx
import CharaRef from 'component/CharRef';

ReactDOM.render(<CharaRef category="box"/>, mountNode);
```

### 数字

```jsx
import CharaRef from 'component/CharRef';

ReactDOM.render(<CharaRef category="number"/>, mountNode);
```

### 字母

```jsx
import CharaRef from 'component/CharRef';

ReactDOM.render(<CharaRef category="letter"/>, mountNode);
```

### 拉丁字母

```jsx
import CharaRef from 'component/CharRef';

ReactDOM.render(<CharaRef category="LatinLetter"/>, mountNode);
```

### 字母1

```jsx
import CharaRef from 'component/CharRef';

ReactDOM.render(<CharaRef category="scrLetter"/>, mountNode);
```

### 希腊字母

```jsx
import CharaRef from 'component/CharRef';

ReactDOM.render(<CharaRef category="GreekLetter"/>, mountNode);
```

### 其他字母

```jsx
import CharaRef from 'component/CharRef';

ReactDOM.render(<CharaRef category="otherLetter"/>, mountNode);
```

## 信息来源

<https://dev.w3.org/html5/html-author/charref>

<!-- 4.0.1 <https://www.w3.org/TR/html401/sgml/entities.html> -->
