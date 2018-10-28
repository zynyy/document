import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';

import {
  Radio, Tooltip, Icon, Popover,
  Checkbox, Row, Col, Input,
} from 'antd';


import UnitSelect from '../Component/CSS/UnitSelect';

const { Button, Group } = Radio;
const CheckboxGroup = Checkbox.Group;


export default class CSSDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowValue: props.defaultValue,
      copied: false,
      unit: 'px',
    };
  }

  handleValueChange = (e: Event) => {
    const { value } = e.target;
    this.setState({
      nowValue: value,
      copied: false,
    });
  }

  handleUnitChange = (value: String) => {
    this.setState({
      unit: value,
      copied: false,
    });
  }

  handleCodeCopied = () => {
    this.setState({ copied: true });
  }

  handleCheckChange = (e: Event) => {
    console.warn(e.target.value);
  }

  generatePopoverContent = (values: Object<Array>, defaultUnit: string) => {
    return (
      <Input
        addonAfter={(
          <UnitSelect
            selectUnitTypes={values.types}
            defaultUnit={defaultUnit}
          />
        )}
        defaultValue="1"
        onChange={this.handleValueChange}
      />
    );
  }

  generateKeyword = (values: Array<String>) => {
    return (
      values.map(value => (
        <Button
          value={value}
          key={value}
        >
          {value}
        </Button>
      ))
    );
  }

  generateCompound = (values: Object) => {
    return (
      <CheckboxGroup>
        {
          Object.keys(values).map(key => (
            Object.keys(values[key]).map(value => (
              <Row key={key}>
                <Col span={12}>
                  <Checkbox
                    value={value}
                    onChange={this.handleCheckChange}
                  >
                    {value}
                  </Checkbox>
                </Col>
                <Col span={12}>
                  <Input
                    addonAfter={(
                      <UnitSelect
                        selectUnitTypes={values[key][value].types}
                        defaultUnit="px"
                        onChange={this.handleUnitChange}
                      />
                    )}
                    defaultValue="1"
                    onChange={this.handleValueChange}
                  />
                </Col>
              </Row>
            ))
          ))
        }
      </CheckboxGroup>
    );
  }

  render() {
    const { property, values } = this.props;
    const { nowValue, copied, unit } = this.state;
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
              case 'keywork': {
                return (
                  <Group value={nowValue} onChange={this.handleValueChange} key={key} buttonStyle="solid" name={key}>
                    {
                      this.generateKeyword(values[key])
                    }
                  </Group>
                );
              }

              case 'functions': {
                return (
                  <Group
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
                  </Group>
                );
              }

              case 'compound': {
                return (
                  this.generateCompound(values[key])
                );
              }
              default:
                return null;
            }
          })
        }


        <h3>
          当前样式属性:&nbsp;&nbsp;
          {`${property}: ${nowValue};`}
          <CopyToClipboard
            text={`${property}: ${nowValue}${unit};`}
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
