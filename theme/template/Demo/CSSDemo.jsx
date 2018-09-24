import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';

import {
  Radio, Tooltip, Icon, Input, Popover,
} from 'antd';

// import UnitSelect from '../Component/CSS/UnitSelect';

export default class CSSDemo extends React.Component {
  // static length(value) {
  //   return (
  //     <Radio value={value}>
  //       {value}
  //       <Input type="number" style={{ width: 100, marginLeft: 10 }} addonAfter={UnitSelect} />
  //     </Radio>
  //   );
  // }
  constructor(props) {
    super(props);
    this.state = {
      nowValue: props.defaultValue,
      copied: false,
    };
  }

  handleValueChange = (e) => {
    const { value } = e.target;
    console.warn();
    this.setState({
      nowValue: value,
      copied: false,
    });
  }

  handleCodeCopied = () => {
    this.setState({ copied: true });
  }

  render() {
    const { property, values } = this.props;
    const { nowValue, copied } = this.state;
    const getStyle = {
      [property]: nowValue,
    };

    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );

    const text = <span>Title</span>;

    return (
      <section>
        <h2>
          {property}
          : 特征各个值展示
        </h2>
        {
          Object.keys(values).map((key) => {
            switch (key) {
              case 'keywork':
                return (
                  <Radio.Group value={nowValue} onChange={this.handleValueChange} key={key} buttonStyle="solid" name={key}>
                    {
                      values[key].map(value => (
                        <Radio.Button value={value} key={value}>{value}</Radio.Button>
                      ))
                    }
                  </Radio.Group>
                );
              case 'functions':
                return (
                  <Radio.Group
                    value={nowValue}
                    onChange={this.handleValueChange}
                    key={key}
                    name={key}
                  >
                    {
                      values.functions.map(func => (
                        <Popover placement="topLeft" title={text} content={content} trigger="click">
                          <Radio.Button
                            value={`${func.function}()`}
                            key={func.function}
                          >
                            {`${func.function}()`}
                          </Radio.Button>
                        </Popover>

                      ))
                    }

                  </Radio.Group>
                );
              default:
                return null;
            }
          })
        }


        <h3>
          当前样式属性:&nbsp;&nbsp;
          {`${property}: ${nowValue};`}
          <CopyToClipboard
            text={`${property}: ${nowValue};`}
            onCopy={this.handleCodeCopied}
          >
            <Tooltip
              title={copied ? '复制成功' : '复制当前样式属性'}
            >
              <Icon type="copy" theme="outlined" />
            </Tooltip>
          </CopyToClipboard>
        </h3>
        <div>
          CSS
          <div style={getStyle}>
            样式展示
          </div>
        </div>
        <h2>
          浏览器兼容
        </h2>
        <blockquote cite="https://caniuse.com/">
          <a href={`https://caniuse.com/#search=${property}`} target="_blank" rel="noopener noreferrer">点击查看</a>
        </blockquote>
      </section>
    );
  }
}

CSSDemo.propTypes = {
  property: PropTypes.string.isRequired,
  values: PropTypes.shape({
    keyword: PropTypes.array,
  }).isRequired,
  defaultValue: PropTypes.string.isRequired,
};
