
import React from 'react';
import PropTypes from 'prop-types';
import { getChildren } from 'jsonml.js/lib/utils';
import DocumentTitle from 'react-document-title';
// import { Row, Col } from 'antd';

export default function Articlecontent({ localizedPageData, unitls }) {
  const { meta, footnote, content } = localizedPageData;
  const { title } = meta;

  return (
    <DocumentTitle title={title || '暂无标题'}>
      <article className="markdown">
        {unitls.toReactComponent([
          'section', { className: 'markdown' }, ...getChildren(content),
        ])}
        {
          footnote
            ? <hr className="footnotes-sep" />
            : ''
        }
        {unitls.toReactComponent(footnote)}
      </article>
    </DocumentTitle>
  );
}

Articlecontent.propTypes = {
  localizedPageData: PropTypes.shape({
    meta: PropTypes.object,
    content: PropTypes.array,
    footnote: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  }).isRequired,
  unitls: PropTypes.shape({
    toReactComponent: PropTypes.func,
  }).isRequired,
};