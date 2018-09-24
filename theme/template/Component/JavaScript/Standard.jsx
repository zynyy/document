import React from 'react';
import PropTypes from 'prop-types';

export default function Standard({ anchor, version }) {
  const baseURL = 'https://www.ecma-international.org/ecma-262/';
  const ECMAVersions = [{
    version: '5.1',
    time: '2011年6月',
  }, {
    version: '6.0',
    time: '2015年6月',
  }, {
    version: '7.0',
    time: '2016年6月',
  }, {
    version: '8.0',
    time: '2017年6月',
  }, {
    version: '9.0',
    time: '2018年6月',
  }];

  return (
    <section>
      <h2>规范参考</h2>
      <table className="standard-table">
        <thead>
          <tr>
            <th>版本</th>
            <th>发行年份</th>
            <th>组织</th>
          </tr>
        </thead>
        <tbody>
          {
            ECMAVersions.map(item => (
              !version
              || (version.start && item.version >= version.start && !version.end)
              || (version.end && version.end <= item.version && version.start >= item.version)
                ? (
                  <tr key={item.version}>
                    <td>
                      <a
                        href={`${baseURL}${item.version}/#${anchor}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.version}
                      </a>
                    </td>
                    <td>
                      {item.time}
                    </td>
                    <td>
                      ECMA-262
                    </td>
                  </tr>
                )
                : null
            ))
          }
        </tbody>
      </table>
    </section>
  );
}

Standard.propTypes = {
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
