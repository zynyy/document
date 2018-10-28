import React from 'react';
import { enquireScreen } from 'enquire-js';
import classnames from 'classnames';
// import OfflineRuntime from 'offline-plugin/runtime';
import { Layout } from 'antd';

import isMobileContext from '../Context/Mobile';

import HeaderContent from './Header';
import FooterContent from './Footer';
import Background from './Background';

if (typeof window !== 'undefined') {
  // OfflineRuntime.install();
  require('../../static/style'); // eslint-disable-line global-require
}

export default class LayoutBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }

  componentDidMount() {
    const nprogressHiddenStyle = document.getElementById('nprogress-style');
    if (nprogressHiddenStyle) {
      this.timer = setTimeout(() => {
        nprogressHiddenStyle.parentNode.removeChild(nprogressHiddenStyle);
      }, 0);
    }

    enquireScreen((b) => {
      this.setState({
        isMobile: b,
      });
    });
  }

  render() {
    const { props, state } = this;
    const {
      children, themeConfig, location,
      params,
    } = props;
    const { isMobile } = state;
    const moduleName = params.index;

    return (
      <isMobileContext.Provider value={isMobile}>
        {
          moduleName
            ? null
            : (
              <Background />
            )
        }
        <Layout
          className={
            classnames(
              { pc: !isMobile },
              { mobile: isMobile },
              { home: !moduleName },
            )
          }
        >
          <HeaderContent
            {...this.props}
            config={themeConfig}
            location={location}
            isMobile={isMobile}
          />

          <main id="main">
            {children}
          </main>

          <FooterContent />

        </Layout>
      </isMobileContext.Provider>
    );
  }
}
