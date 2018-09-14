import React from 'react';
import PropTypes from 'prop-types';
import { getCSSModulesInformation } from './moduleVersion';

export default function Standard({ module, anchor }) {
  const baseURL = 'https://www.w3.org/TR/';
  const CSSModule = getCSSModulesInformation(module);
  if (!CSSModule) {
    console.error(`没有找到${module}模块版本`);
  }
  // WD Working Draft REC Recommendation CR Candidate Recommendation
  // https://www.w3.org/Style/CSS/current-work

  return CSSModule
    ? (
      <section>
        <h2>规范参考</h2>
        <table className="standard-table">
          <thead>
            <tr>
              <th>模块版本</th>
              <th>状态</th>
              <th>文档最后一次编辑时间</th>
            </tr>
          </thead>
          <tbody>
            {
              CSSModule.version
                ? (
                  Object.keys(CSSModule.version).map(key => (
                    <tr key={`${CSSModule.module}-${key}`}>
                      <td>
                        <a
                          href={`${baseURL}${CSSModule.css ? '' : 'css-'}${module}-${key}/#${anchor}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {key}
                        </a>
                      </td>
                      <td>
                        {CSSModule.version[key].state}
                      </td>
                      <td>
                        {CSSModule.version[key].time}
                      </td>
                    </tr>
                  ))
                )
                : (
                  <tr>
                    <td>
                      <a
                        href={`${baseURL}css3-${module}/#${anchor}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {module}
                      </a>
                    </td>
                    <td>
                      {CSSModule.state}
                    </td>
                    <td>
                      {CSSModule.time}
                    </td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </section>
    )
    : null;
}

Standard.propTypes = {
  anchor: PropTypes.string.isRequired,
  module: PropTypes.string.isRequired,
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
