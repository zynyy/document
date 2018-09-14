import React from 'react';
// import OfflineRuntime from 'offline-plugin/runtime';
import { Layout } from 'antd';


import HeaderContent from './Header';
import FooterContent from './Footer';

if (typeof window !== 'undefined') {
  // OfflineRuntime.install();
  require('../../static/style'); // eslint-disable-line global-require
}


export default class LayoutBase extends React.Component {
  componentDidMount() {
    // const nprogressHiddenStyle = document.getElementById('nprogress-style');
    // if (nprogressHiddenStyle) {
    //     this.timer = setTimeout(() => {
    //         nprogressHiddenStyle.parentNode.removeChild(nprogressHiddenStyle);
    //     }, 0);
    // }
  }

  render() {
    const { children, themeConfig, location } = this.props;

    return (
      <Layout>
        <HeaderContent {...this.props} config={themeConfig} location={location} />

        <main id="main">

          {children}

        </main>

        <FooterContent />

      </Layout>
    );
  }
}
