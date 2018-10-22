import React from 'react';
import PropTypes from 'prop-types';
import { getChildren } from 'jsonml.js/lib/utils';
import DocumentTitle from 'react-document-title';
import { Row, Col, Spin } from 'antd';
import Loadable from 'react-loadable';

import HTMLCompatible from '../Component/HTML/Compatible';
import HTMLStandard from '../Component/HTML/Standard';

function Loading() {
  return (
    <Spin />
  );
}

const LoadableComponent = Loadable({
  loader: () => import('../Demo/HTMLDemo'),
  loading: Loading,
});

export default function HTMLDocument({ localizedPageData, unitls, demos }) {
  const { meta, footnote, content } = localizedPageData;
  const isSingleCol = meta.cols === 1;
  const childrenContent = getChildren(content);
  return (
    <DocumentTitle title={meta.title || '暂无标题'}>
      <article className="markdown">
        {
          childrenContent[0] && childrenContent[0][0] === 'h1'
            ? unitls.toReactComponent(childrenContent.shift())
            : null
        }
        {
          content
            ? unitls.toReactComponent([
              'section', { className: 'markdown' },
            ].concat(childrenContent))
            : null
        }
        {
          meta.anchor
            ? <HTMLCompatible element={`${meta.anchor}`.replace('and-', '').replace(/^the-(.*?)-element[s]?/, '$1').split('-')} />
            : null
        }
        {
          meta.anchor
            ? (
              <HTMLStandard
                type={meta.type || ''}
                anchor={meta.anchor || ''}
                version={meta.version || ''}
              />
            )
            : null
        }
        <Row gutter={16}>
          <Col
            span={isSingleCol ? '24' : '12'}
            className={
              isSingleCol
                ? 'code-boxes-col-1-1'
                : 'code-boxes-col-2-1'
            }
          >
            {/* {
              demos
                ? <LoadableComponent unitls={unitls} demos={demos} />
                : null
            } */}
          </Col>
          {
            isSingleCol
              ? null
              : (
                <Col className="code-boxes-col-2-1" span={12}>
                  {/* {
                    demos
                      ? <LoadableComponent unitls={unitls} demos={demos} />
                      : null
                  } */}
                </Col>
              )
          }
        </Row>
        {
          footnote
            ? <hr className="footnotes-sep" />
            : null
        }
        {
          footnote
            ? unitls.toReactComponent(footnote)
            : null
        }
      </article>
    </DocumentTitle>
  );
}

HTMLDocument.propTypes = {
  localizedPageData: PropTypes.shape({
    meta: PropTypes.object,
    content: PropTypes.array,
    footnote: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  }).isRequired,
  unitls: PropTypes.shape({
    toReactComponent: PropTypes.func,
  }).isRequired,
  demos: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
};
