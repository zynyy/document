import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'bisheng/router';

import {
  Layout, Row, Col, Anchor, Icon,
} from 'antd';

import isMobileContext from '../Context/Mobile';
import { docModule, uriPath } from '../utils';
import LeftSide from './LeftSide';

import HTMLContent from './HTMLDocument';
import CSSContent from './CSSDocument';
import JavaScriptContent from './JavaScriptDocument';
import Documents from './Documents';

const { Content } = Layout;
const AnchorLink = Anchor.Link;

const getModuleData = (props) => {
  const { picked, params } = props;
  const { index } = params;
  const moduleData = picked[index];
  if (moduleData) {
    return moduleData.filter(({ meta }) => meta.filename.endsWith('.md'));
  }
  console.error(`请到theme/index.js里面的picked配置${index}`);
  return [];
};

const reshapAnchor = (anchor) => {
  if (!Array.isArray(anchor)) {
    return '';
  }

  const anchors = [];
  let index = -1;

  anchor.map((node) => {
    if (node.tag === 'h2') {
      index += 1;
      anchors.push({
        ...node,
        children: [],
      });
    } else if (node.tag === 'h3') {
      anchors[index].children.push({
        ...node,
      });
    }
    return anchors;
  });
  return anchors;
};

export default class MainContent extends React.Component {
  constructor(props) {
    super(props);
    const { location, localizedPageData } = props;
    this.state = {
      prev: '',
      next: '',
      active: '',
      module: docModule(location.pathname), // eslint-disable-line react/no-unused-state
      anchors: reshapAnchor(localizedPageData.anchor),
    };
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (!prevProps
      || (!window.location.hash
        && prevProps
        && prevProps.location.pathname !== location.pathname)) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      return;
    }

    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      const hash = decodeURI(window.location.hash);
      if (hash) {
        // 中文转码
        document.querySelector(hash).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }, 200); // 如果页面加载大于 200ms则无效
  }

  footerNav = (chilrenEvent) => {
    const { active } = this.state;
    const { location: { pathname }, localizedPageData } = this.props;
    if (active !== pathname) {
      this.setState({
        prev: chilrenEvent.prev,
        next: chilrenEvent.next,
        active: pathname,
        anchors: reshapAnchor(localizedPageData.anchor),
      });
    }
  }

  render() {
    const { props, state } = this;

    const {
      localizedPageData,
      utils,
      params,
      location,
      demos,
    } = props;

    const { anchors, prev, next } = state;
    const moduleName = params.index;
    const moduleData = getModuleData(props);
    const sideConf = props.themeConfig[moduleName];
    const activeMenuItem = location.pathname;
    return (
      <Layout>
        <LeftSide
          active={activeMenuItem}
          conf={sideConf}
          moduleData={moduleData}
          footerNav={this.footerNav}
        />
        <Content>
          <isMobileContext.Consumer>
            {isMobile => (
              <Row>
                <Col className="main-container" span={(anchors && !isMobile) ? 22 : 24}>
                  {
                    (
                      () => {
                        switch (moduleName) {
                          case 'HTML': {
                            return (<HTMLContent
                              unitls={utils}
                              localizedPageData={localizedPageData}
                              demos={demos || ''}
                            />
                            );
                          }

                          case 'CSS': {
                            return (<CSSContent
                              unitls={utils}
                              localizedPageData={localizedPageData}
                              demos={demos || ''}
                            />
                            );
                          }

                          case 'javaScript': {
                            return (<JavaScriptContent
                              unitls={utils}
                              localizedPageData={localizedPageData}
                              demos={demos || ''}
                            />
                            );
                          }

                          default: {
                            return (
                              <Documents
                                unitls={utils}
                                localizedPageData={localizedPageData}
                                demos={demos || ''}
                              />
                            );
                          }
                        }
                      }
                    )()
                  }
                </Col>

                {anchors
                  ? (
                    <Col span={isMobile ? 0 : 2}>
                      {
                        <Anchor bounds={16} offsetTop={100}>
                          {
                            anchors.map(node => (
                              <AnchorLink href={node.href} title={node.title} key={node.href}>
                                {
                                  node.children
                                    ? node.children.map(children => (
                                      <AnchorLink href={children.href} title={children.title} key={`${children.href}`} />
                                    ))
                                    : null
                                }
                              </AnchorLink>
                            ))
                          }
                        </Anchor>
                      }
                    </Col>)
                  : null
                }
              </Row>
            )}
          </isMobileContext.Consumer>
          <Row>
            <Col
              span={24}
            >
              <section className="prev-next-nav">
                <h2>上下篇</h2>
                {
                  prev
                    ? (
                      <Link className="prev-page" to={uriPath(prev.filename)}>
                        <Icon type="arrow-left" theme="outlined" className="footer-nav-icon-before" />
                        {prev.title || next.filename}
                      </Link>)
                    : null
                }
                {
                  next
                    ? (
                      <Link className="next-page" to={uriPath(next.filename)}>
                        {next.title || next.filename}
                        <Icon type="arrow-right" theme="outlined" className="footer-nav-icon-after" />
                      </Link>)
                    : null
                }
              </section>
            </Col>
          </Row>
        </Content>

      </Layout>
    );
  }
}

MainContent.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  localizedPageData: PropTypes.shape({
    anchor: PropTypes.array,
  }).isRequired,
};
