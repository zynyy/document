import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option, OptGroup } = Select;

function getSelectUnitTypes(types: Array<String>) {
  const unitTypes = {
    length: [{
      name: '视角',
      units: ['px'],
    }, {
      name: '视区',
      units: ['vw', 'vh'],
    }, {
      name: '字体',
      units: ['em', 'ex', 'ch', 'rem'],
    }, {
      name: '物理',
      units: ['cm', 'mm', 'Q', 'in', 'pc', 'pt'],
    }],
    percentage: [{
      name: '百分比',
      units: ['%'],
    }],
    time: [{
      name: '时间',
      units: ['ms', 's'],
    }],
    angle: [{
      name: '角度',
      units: ['deg', 'grad', 'rad', 'turn'],
    }],
    resolution: [{
      name: '分辨率',
      units: ['dpi', 'dpcm', 'dppx'],
    }],
    frequency: [{
      name: '频率',
      units: ['Hz', 'kHz'],
    }],
  };

  return types.map(type => unitTypes[type]);
}

export default class UnitSelect extends React.Component {
  constructor(props) {
    super(props);
    const unit = getSelectUnitTypes(props.selectUnitTypes);
    this.state = {
      selectUnit: props.defaultUnit,
      units: [].concat(...unit),
    };
  }

  render() {
    const { selectUnit, units } = this.state;
    const { onChange } = this.props;
    return (
      <Select
        defaultValue={selectUnit}
        style={{ width: 100 }}
        onChange={onChange}
      >
        {
          units.map(val => (
            <OptGroup label={val.name} key={val.name}>
              {
                val.units.map(unit => (
                  <Option
                    value={unit}
                    key={unit}
                  >
                    {unit}
                  </Option>
                ))
              }
            </OptGroup>
          ))
        }
      </Select>
    );
  }
}

UnitSelect.propTypes = {
  selectUnitTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultUnit: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
