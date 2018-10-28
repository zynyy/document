import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';

// import { Controlled as CodeMirror } from 'react-codemirror2';
// import 'codemirror/mode/xml/xml';

import { Tooltip, Icon } from 'antd';
import EditButton from '../Component/EditButton';

// require('codemirror/mode/javascript/javascript.js');

export default class HTMLDemo extends React.Component {
  state = {
    codeExpand: true,
    date: '',
    copied: false,
    copyTooltipVisible: false,
    sourceCode: '<h2>你是</h2>',
  }

  handleCodeExpand = () => {
    const { codeExpand } = this.state;
    this.setState({ codeExpand: !codeExpand });
  }

  handleCodeCopied = () => {
    this.setState({ copied: true });
  }

  onCopyTooltipVisibleChange = (visible) => {
    if (visible) {
      this.setState({
        copyTooltipVisible: visible,
        copied: false,
      });
      return;
    }
    this.setState({
      copyTooltipVisible: visible,
    });
  }

  render() {
    const { state } = this;
    const {
      date,
      codeExpand,
      copyTooltipVisible,
      copied,
      sourceCode,
    } = state;

    const highlightClass = classNames({
      'highlight-wrapper': true,
      'highlight-wrapper-expand': codeExpand,
    });
    const codeBoxClass = classNames({
      'code-box': true,
      expand: codeExpand,
    });
    return (
      <section className={codeBoxClass}>
        <section className="code-box-demo" key="demo" dangerouslySetInnerHTML={{ __html: sourceCode }} />
        <section className="code-box-meta markdown" key="description">
          <div className="code-box-title">
            <a href="#1">
              {date}
            </a>
            <EditButton title="" filename="" />
          </div>
          <p>
            你们好
          </p>
          <Tooltip title={codeExpand ? 'Hide Code' : 'Show Code'}>
            <span className="code-expand-icon">
              <img
                alt="expand code"
                src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
                className={codeExpand ? 'code-expand-icon-hide' : 'code-expand-icon-show'}
                onClick={this.handleCodeExpand}
                onKeyDown={this.handleCodeExpand}
                role="presentation"
              />

              <img
                alt="expand code"
                src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
                className={codeExpand ? 'code-expand-icon-show' : 'code-expand-icon-hide'}
                role="presentation"
                onClick={this.handleCodeExpand}
                onKeyDown={this.handleCodeExpand}
              />
            </span>
          </Tooltip>
        </section>

        <section
          className={highlightClass}
          key="source code"
        >
          <div className="highlight">
            <div className="code-box-actions">

              <CopyToClipboard
                text={state.sourceCode}
                onCopy={this.handleCodeCopied}
              >
                <Tooltip
                  visible={copyTooltipVisible}
                  onVisibleChange={this.onCopyTooltipVisibleChange}
                  title={copied ? '复制成功' : '复制代码'}
                >
                  <Icon
                    type={(copied && copyTooltipVisible) ? 'check' : 'copy'}
                    className="code-box-code-copy"
                  />
                </Tooltip>
              </CopyToClipboard>
            </div>
          </div>
          {/* <CodeMirror
            value={sourceCode}
            options={{
              mode: 'xml',
              lineNumbers: true,
              lineWrapping: true,
              showCursorWhenSelecting: true,
            }}
            onBeforeChange={(editor, data, value) => {
              this.setState({
                sourceCode: value,
              });
            }}
          /> */}
        </section>
      </section>
    );
  }
}

HTMLDemo.propTypes = {

};
