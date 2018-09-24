import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option, OptGroup } = Select;

export default class UnitSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      units: [{
        unit: 'Viewport',
        lengths: ['vw', 'vh'],
      }, {
        unit: '物理',
        lengths: ['cm', 'mm', 'Q', 'in', 'pc', 'pt', 'px'],
      }, {
        unit: '视角',
        lengths: ['px'],
      }],
      selectUnitValue: props.selectUnit,
    };
  }

  handleSelectUnitChange = (value) => {
    this.setState = {
      selectUnit: value,
    };
  }

  render() {
    const { selectUnit } = this.props;
    const { units, selectUnitValue } = this.state;
    return (
      <Select
        defaultValue={selectUnitValue}
        style={{ width: 200 }}
        onChange={this.handleSelectUnitChange}
      >
        {
          selectUnit === 'all'
            ? (
              <Option value={selectUnit}>全部</Option>
            )
            : null
        }
        {
          Object.keys(units).map(key => (
            <OptGroup label={units[key].unit} key={key}>
              {
                units[key].lengths.map(val => (
                  <Option value={val} key={val}>{val}</Option>
                ))
              }
            </OptGroup>
          ))
        }
      </Select>
    );
  }
}

UnitSelect.defaultProps = {
  selectUnit: 'px',
};

UnitSelect.propTypes = {
  selectUnit: PropTypes.string,
};
