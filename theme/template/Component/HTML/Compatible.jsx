import React from 'react';
import PropTypes from 'prop-types';

export default function Compatible({ element }) {
  const html = {
    html5semantic: ['section', 'article', 'aside', 'header', 'footer', 'nav', 'figure', 'figcaption', 'time', 'mark', 'main',
  ],
    html4: ['a', 'abbr', 'address', 'area', 'b', 'base', 'basefont', 'bdo', 'blockquote', 'body', 'br', 'button', 'caption', 'cite', 'code', 'col', 'colgroup', 'dd', 'del', 'dfn', 'div', 'dl', 'dt', 'em', 'fieldset', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'map', 'meta', 'noscript', 'object', 'ol', 'optgroup', 'option', 'p', 'param', 'pre', 'q', 's', 'samp', 'script', 'select', 'small', 'span', 'strong', 'style', 'sub', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'u', 'ul', 'var', 'wbr',
    ],
    templates: ['template'],
    bdi: [],
    ruby: ['ruby', 'rt', 'rp', 'rtc', 'rb'],
    progress: ['progress'],
    canvas: ['canvas'],
  };

  const elementIndex = Object.keys(html).find((key) => {
    if (html[key].indexOf(element[0]) > -1) {
      return key;
    }
    return false;
  });

  let children = '';
  let urlAnchor = `search=${element[0]}`;

  switch (elementIndex) {
    case 'html5semantic': {
      urlAnchor = 'feat=html5semantic';
      children = (
        <tr>
          <td>9 部分支持</td>
          <td>12</td>
          <td>31</td>
          <td>29</td>
          <td>8</td>
          <td>23</td>
          <td>7.1</td>
          <td>4.4</td>
          <td>67</td>
          <td>60</td>
          <td>11.8</td>
          <td>1.2</td>
          <td>7.12</td>
        </tr>
      );
      break;
    }
    case 'progress': {
      children = (
        <tr>
          <td>10</td>
          <td>12</td>
          <td>6</td>
          <td>15</td>
          <td>8</td>
          <td>12.1</td>
          <td>7.1部分支持</td>
          <td>4.4</td>
          <td>67</td>
          <td>60</td>
          <td>11.8</td>
          <td>1.2</td>
          <td>7.12</td>
        </tr>
      );
      break;
    }
    case 'canvas': {
      children = (
        <tr>
          <td>9</td>
          <td>12</td>
          <td>6</td>
          <td>15</td>
          <td>5.1</td>
          <td>12.1</td>
          <td>5.1</td>
          <td>4.3</td>
          <td>67</td>
          <td>60</td>
          <td>11.8</td>
          <td>1.2</td>
          <td>7.12</td>
        </tr>
      );
      break;
    }
    case 'html4': {
      children = (
        <tr>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
        </tr>
      );
      break;
    }
    case 'ruby': {
      children = (
        <tr>
          <td>6 部分支持</td>
          <td>12 部分支持</td>
          <td>38</td>
          <td>15部分支持</td>
          <td>5.1部分支持</td>
          <td>23部分支持</td>
          <td>5.1部分支持</td>
          <td>4.3部分支持</td>
          <td>67部分支持</td>
          <td>6.0</td>
          <td>11.8部分支持</td>
          <td>1.2部分支持</td>
          <td>7.12部分支持</td>
        </tr>
      );
      break;
    }
    default: {
      children = (
        <tr>
          <td>未知</td>
          <td>未知</td>
          <td>未知</td>
          <td>未知</td>
          <td>未知</td>
          <td>未知</td>
          <td>未知</td>
          <td>未知</td>
          <td>未知</td>
          <td>未知</td>
          <td>未知</td>
          <td>未知</td>
          <td>未知</td>
        </tr>
      );
      break;
    }
  }
  return (
    <section className="compatible">
      <h2> 浏览器兼容性 </h2>
      <table>
        <thead>
          <tr>
            <th>IE</th>
            <th>Edge</th>
            <th>Firefox</th>
            <th>Chrome</th>
            <th>Safari</th>
            <th>Opera</th>
            <th>iOS Safari</th>
            <th>Android</th>
            <th>Chrome Android</th>
            <th>Firefox Android</th>
            <th>UC</th>
            <th>QQ</th>
            <th>Baidu</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
      <blockquote>
        数据来源
        <a href={`https://caniuse.com/#${urlAnchor}`} target="_blank" rel="noopener noreferrer">https://caniuse.com/</a>
        <p>
          如果表格中有数字则表示支持该标签的第一个浏览器版本号。都显示未知请点击上面链接查看具体
        </p>
      </blockquote>
    </section>
  );
}

Compatible.propTypes = {
  element: PropTypes.arrayOf(PropTypes.string).isRequired,
};
