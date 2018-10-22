import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
// import { Carousel } from 'antd';

import Background from './Background';
import HomePageWrapper from './HomePageWrapper';
import HomeScene from './HomeScene';

export default function Home({ themeConfig }) {
  const { docs } = themeConfig;
  const modules = Object.keys(docs);
  return (
    <DocumentTitle title="学习成长笔记">
      <div>
        <Background />
        {
          modules.map(key => (
            <HomePageWrapper
              module={key}
              key={key}
              moduleData={docs[key]}
              modules={modules}
            />
          ))
        }
        <HomeScene modules={modules} />
      </div>
    </DocumentTitle>
  );
}

Home.propTypes = {
  themeConfig: PropTypes.shape({
    docs: PropTypes.object,
  }).isRequired,
};
