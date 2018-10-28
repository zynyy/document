import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { Link } from 'bisheng/router';


import {
  Layout,
  Row,
  Col,
  Input,
  Menu,
  Cascader,
  Popover,
  Icon,
} from 'antd';

const { Header } = Layout;
const { SubMenu, ItemGroup, Item } = Menu;
const { Search } = Input;

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
      widthLength: 150,
      menuVisible: false,
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

  handleWidthLengthFocus = () => {
    this.setState({
      widthLength: 280,
    });
  }

  handleWidthLengthBlur = () => {
    this.setState({
      widthLength: 150,
    });
  }

  handleMenuVisibleChange = (visible) => {
    this.setState({
      menuVisible: visible,
    });
  }

  render() {
    const {
      config, params, location,
      isMobile,
    } = this.props;
    const { current, widthLength, menuVisible } = this.state;
    const { docs } = config;
    const { pathname } = location;
    const mode = isMobile ? 'inline' : 'horizontal';
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

    const menu = [
      <Cascader
        options={options}
        value={selectValue}
        onChange={this.handleDocsChange}
        allowClear={false}
        key="docs"
      />,
      <nav id="nav" key="nav">
        <Menu
          mode={mode}
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
            <a href="//me.65ker.com" target="_blank" rel="noopener noreferrer"> 关于我 </a>
          </Menu.Item>
        </Menu>
      </nav>,
    ];

    return (
      <header id="header">
        {
          moduleName
            ? null
            : (
              <style dangerouslySetInnerHTML={{
                __html: `html, body {
                  height: ${isMobile ? '100vh' : '100%22'};
                  overflow: hidden;
                  position: relative;
                }`,
              }}
              />
            )
        }
        <Header className="navbar-light">
          {
            isMobile && moduleName && (
              <Popover
                overlayClassName="popover-menu"
                placement="bottomRight"
                content={menu}
                trigger="click"
                visible={menuVisible}
                arrowPointAtCenter
                onVisibleChange={this.handleMenuVisibleChange}
              >
                <Icon
                  className="nav-phone-icon"
                  type="menu"
                />
              </Popover>
            )
          }
          <Row gutter={16} type="flex" justify="start">

            <Col span={5} className="logo" xxl={4} xl={5} lg={5} md={6} sm={24} xs={24}>
              <Link to="/">
                编程文档
              </Link>
            </Col>

            <Col span={isMobile ? 0 : 5} className="search" id="search-box">
              <form>
                <Search
                  placeholder="请输入关键词"
                  style={{ width: widthLength, transition: 'width 0.5s' }}
                  onFocus={this.handleWidthLengthFocus}
                  onBlur={this.handleWidthLengthBlur}
                />
              </form>
            </Col>

            <Col span={moduleName && !isMobile ? 9 : 0} className="nav">
              {menu[1]}
            </Col>

            <Col span={moduleName && !isMobile ? 4 : 0} className="docs">

              {menu[0]}

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
  isMobile: PropTypes.bool.isRequired,
};
