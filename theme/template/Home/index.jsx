import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import { Layout, Icon } from 'antd';

import HomePageWrapper from './HomePageWrapper';
import HomeScene from './HomeScene';

import { getElementHeight } from '../utils';

const { Content } = Layout;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      modules: Object.keys(props.themeConfig.docs),
      bottomLength: 0,
    };
  }

  componentDidMount() {
    const height = getElementHeight('#footer');
    this.setState({
      bottomLength: height,
    });
  }

  setActiveScene = (index: number) => {
    const { modules } = this.state;
    const { length } = modules;
    let i = index % length;
    if (i < 0) {
      i = 0;
    }

    if (index >= length) {
      i = length - 1;
    }

    this.setState({
      activeIndex: i,
    });
  }

  // onWheel onClick
  handleActiveSceneIndex = (event) => {
    let { activeIndex } = this.state;

    if (event.type === 'wheel' && event.deltaY < 0) {
      activeIndex -= 1;
    } else {
      activeIndex += 1;
    }
    this.setActiveScene(activeIndex);
  }

  // 移动端 Touch 事件
  handleActiveSceneIndexTouch = (event) => {
    const e = event.touches[0] || event;
    let { activeIndex } = this.state;
    if (e.target.htmlFor || e.target.href) {
      return;
    }
    switch (event.type) {
      case 'touchstart': {
        this.posY = e.pageY;
        this.touching = true;
        break;
      }
      case 'touchmove': {
        if (this.touching) {
          this.nowY = e.pageY;
        }
        break;
      }
      case 'touchend': {
        if (this.touching) {
          const down = this.nowY - this.posY;
          if (Number.isNaN(down)) return;
          if (down > 20) {
            activeIndex += 1;
          }

          if (down < -20) {
            activeIndex -= 1;
          }

          this.setActiveScene(activeIndex);
        }
        this.touching = false;
        break;
      }
      default: {
        break;
      }
    }
  }

  render() {
    const { props, state } = this;
    const { docs } = props.themeConfig;
    const { activeIndex, modules, bottomLength } = state;
    const { length } = modules;
    return (
      <DocumentTitle title="学习成长笔记">
        <Content
          onWheel={this.handleActiveSceneIndex}
          onTouchStart={this.handleActiveSceneIndexTouch}
          onTouchMove={this.handleActiveSceneIndexTouch}
          onTouchEnd={this.handleActiveSceneIndexTouch}
        >
          {
            modules.map(key => (
              <HomePageWrapper
                module={key}
                key={key}
                moduleData={docs[key]}
                activeScene={modules[activeIndex]}
              />
            ))
          }

          <HomeScene
            modules={modules}
            setActiveScene={this.setActiveScene}
            activeIndex={activeIndex}
          />

          {
            activeIndex !== (length - 1)
              ? (
                <Icon
                  type="down"
                  theme="outlined"
                  className="next-scene"
                  style={{
                    fontSize: '50px',
                    color: '#08c',
                    bottom: `${bottomLength}px`,
                  }}
                  onClick={this.handleActiveSceneIndex}
                />
              )
              : null
          }

        </Content>
      </DocumentTitle>
    );
  }
}

Home.propTypes = {
  themeConfig: PropTypes.shape({
    docs: PropTypes.object,
  }).isRequired,
};
