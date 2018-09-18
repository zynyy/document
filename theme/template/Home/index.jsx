import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import DocumentTitle from 'react-document-title';
import classnames from 'classnames';

import Background from './Background';
import getScrollPos from './canvas/scroll';
import Cubes from './Cubes';
import DocsTitle from './docs';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    const { docs } = props.themeConfig;
    this.state = {
      docs: Object.keys(docs).map(key => docs[key]),
      docsIndex: 0,
      docsSelected: false,
      canvas: '',
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  startTimer = () => {
    const { docsSelected, docsIndex, docs } = this.state;
    this.timeout = setTimeout(() => {
      if (!docsSelected) {
        if (!window.scrolling && getScrollPos().y < window.innerHeight) {
          this.setState({
            docsIndex: (docsIndex + 1) % docs.length,
          });
        }

        this.startTimer();
      }
    }, 3000);
  };

  setCanvas = (canvas) => {
    this.setState({ canvas });
  };

  selectTemplate = (template) => {
    const { docs } = this.state;
    this.setState({
      docsIndex: docs.indexOf(template),
      docsSelected: true,
    });
  };

  render() {
    const { docs, docsIndex, canvas } = this.state;
    const doc = docs[docsIndex];
    return (
      <DocumentTitle title="学习成长笔记">
        <div className="relative">
          <div className="fullscreen">
            <Background
              templateIndex={docsIndex}
              template={doc}
              setCanvas={this.setCanvas}
            />
            <div className={classnames('centered', 'horizontal')}>
              <DocsTitle template={doc} />
              <Media query="(min-width: 1280px)">
                <Cubes
                  canvas={canvas}
                  templates={docs}
                  template={doc}
                  setTemplate={this.selectTemplate}
                />
              </Media>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

Home.propTypes = {
  themeConfig: PropTypes.shape({
    docs: PropTypes.object,
  }).isRequired,
};
