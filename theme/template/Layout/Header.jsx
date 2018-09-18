import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'bisheng/router';


import {
  Layout,
  Row,
  Col,
  Icon,
  Input,
  Menu,
  Cascader,
} from 'antd';

const { Header } = Layout;
const { SubMenu, ItemGroup, Item } = Menu;

let docsearch;
if (typeof window !== 'undefined') {
  docsearch = require('docsearch.js'); // eslint-disable-line
}

function initDocSearch() {
  if (!docsearch) {
    return;
  }
  docsearch({
    appId: 'YZX024ZZ4G',
    apiKey: '1cb38cc8ca9b9f4ba880a97a98d75981',
    indexName: 'hyl_doc',
    inputSelector: '#search-box input',
    debug: false, // Set debug to true if you want to inspect the dropdown
  });
}


export default class HeaderContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.params.index,
    };
  }

  componentDidMount() {
    initDocSearch();
  }

  static getDerivedStateFromProps(props, state) {
    const { index } = props.params;
    const { current } = state;
    if (current !== index) {
      return {
        current: index,
      };
    }
    return null;
  }

  handleDocsChange = (value) => {
    // console.warn(url);
    const { router } = this.props;
    router.push(`${value.join('/')}/index`);
  };

  handleNavClick = ({ key }) => {
    this.setState({
      current: key,
    });
  }

  render() {
    const { config, params, location } = this.props;
    const { current } = this.state;
    const { docs } = config;
    const { pathname } = location;
    const moduleName = params.index;
    const selectValue = pathname.split('/').slice(0, 2);
    const options = Object.keys(docs).map(doc => (
      {
        value: doc,
        label: docs[doc].name,
        disabled: !docs[doc].index,
        children: docs[doc].index
          ? Object.keys(docs[doc].index).map(item => (
            {
              value: item,
              label: item,
              disabled: moduleName === item,
            }
          ))
          : '',
      }
    ));

    return (
      <header id="header" className="navbar-light">
        <Header>
          <Row gutter={16} type="flex" justify="start">

            <Col span={5} className="logo">
              <Link to="/">
                大大 logo
              </Link>

            </Col>

            <Col span={5} className="search" id="search-box">
              <form>
                <Input
                  placeholder="请输入关键词"
                  prefix={<Icon type="search" />}
                />
              </form>
            </Col>

            <Col span={moduleName ? 10 : 0} className="nav">
              <nav id="nav">
                <Menu
                  mode="horizontal"
                  selectedKeys={[current]}
                  onClick={this.handleNavClick}
                >
                  <Menu.Item key="home">
                    <Link to="/"> 首页 </Link>
                  </Menu.Item>

                  <SubMenu title={<span className="submenu-title-wrapper"> 文档 </span>}>
                    {
                      Object.keys(docs).map(doc => (
                        <ItemGroup title={docs[doc].name} key={doc}>
                          {
                            docs[doc].index
                              ? Object.keys(docs[doc].index).map(item => (
                                <Item key={item}>
                                  {
                                    current !== item
                                      ? <Link to={docs[doc].index[item]}>{item}</Link>
                                      : <span>{item}</span>
                                  }
                                </Item>
                              ))
                              : ''
                          }
                        </ItemGroup>
                      ))
                    }
                  </SubMenu>

                  <Menu.Item>
                    <a href="//me.65ker.com" target="_blank" rel="noopener noreferrer"> 关于作者</a>
                  </Menu.Item>

                </Menu>
              </nav>
            </Col>

            <Col span={moduleName ? 4 : 0} className="docs">

              <Cascader
                options={options}
                value={selectValue}
                onChange={this.handleDocsChange}
                allowClear={false}
              />

            </Col>
          </Row>
        </Header>
      </header>
    );
  }
}

HeaderContent.propTypes = {
  config: PropTypes.shape({
    docs: PropTypes.object,
  }).isRequired,
  params: PropTypes.shape({
    index: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape().isRequired,
  router: PropTypes.shape().isRequired,
};
