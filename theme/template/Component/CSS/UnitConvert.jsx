import React from 'react';
import { Input, Icon } from 'antd';


import UnitSelect from './UnitSelect';
// const { SubMenu } = Menu;

export default function UnitConvert() {
  return (
    <div>
      <Input addonAfter={<UnitSelect selectUnit="all" />} defaultValue="96" />
      <Icon type="swap" theme="outlined" />
    </div>
  );
}
