import React from 'react';
import PropTypes from 'prop-types';

export default function Standard({ type, anchor, version }) {
  const W3CBaseURL = 'https://www.w3.org/TR/html';
  const WHATWGBaseURL = 'https://html.spec.whatwg.org/multipage/';
  const HTMLVersion = [{
    version: 5.3,
    state: '草案',
    time: ' 2018年08月09日',
  }, {
    version: 5.2,
    state: '标准推荐',
    time: '2017年12月14日',
  }, {
    version: 5.1,
    state: '标准推荐',
    time: '2017年10月03日',
  }, {
    version: '5.0',
    state: '标准建议',
    time: '2014年10月28日',
  }];
  return (
    <section>
      <h2>规范参考</h2>
      <table className="standard-table">
        <thead>
          <tr>
            <th>版本</th>
            <th>状态</th>
            <th>发布时间</th>
            <th>组织</th>
          </tr>
        </thead>
        <tbody>
          {
            HTMLVersion.map(item => (
              !version
                || (version.start && item.version >= version.start && !version.end)
                || (version.end && version.end <= item.version && version.start >= item.version)
                ? (
                  <tr key={item.version}>
                    <td>
                      <a
                        href={`${W3CBaseURL}${`${item.version}`.replace('.', '')}/${type}.html#${anchor}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.version}
                      </a>
                    </td>
                    <td>
                      {item.state}
                    </td>
                    <td>
                      {item.time}
                    </td>
                    <td>W3C</td>
                  </tr>
                )
                : null
            ))
          }
          {
            <tr>
              <td>
                <a
                  href={`${WHATWGBaseURL}${type}.html#${anchor}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1
                </a>
              </td>
              <td>标准</td>
              <td>2018年9月17日</td>
              <td>WHATWG</td>
            </tr>
          }
        </tbody>
      </table>
    </section>
  );
}

Standard.propTypes = {
  type: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired,
  version: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      start: PropTypes.number,
      end: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
  ]).isRequired,
};

/*
y: 支持
n: 不支持
d: 默认不支持,但是可以开启
u: 是否支持未知
a: 部分支持
p: 不支持但是有 polyfill 库

edgo: 版本是根据 EdgeHTML 版本
*/
