import React from 'react';
import classNames from 'classnames';
import { Radio } from 'antd';

import CopyCharaRef from './CopyCharaRef';
import characters from './characters';

const { Group, Button } = Radio;

export default class CharRef extends React.Component {
  state = {
    justCopied: '',
    type: 'entities',
  };

  handleTypeChange = (e) => {
    this.setState({ type: e.target.value });
  }

  onCopied = (entitieName) => {
    this.setState({ justCopied: entitieName }, () => {
      setTimeout(() => {
        this.setState({ justCopied: '' });
      }, 2000);
    });
  }

  render() {
    const { state, props } = this;
    const { justCopied, type } = state;
    const { className, category } = props;
    const charRefs = characters(category);
    const listClassName = classNames({
      'charRef-list': true,
      clearfix: true,
      [className]: !!className,
    });

    return (
      <section>
        <Group value={type} onChange={this.handleTypeChange}>
          <Button value="entities">实体符名称</Button>
          <Button value="decimal">十进制</Button>
          <Button value="hex">十六进制</Button>
        </Group>
        <ul className={listClassName}>
          {
            Array.isArray(charRefs)
              ? charRefs.map(char => (
                <CopyCharaRef
                  key={char.entities}
                  entitieName={char[type]}
                  text={char[type]}
                  justCopied={justCopied}
                  onCopied={this.onCopied}
                />
              ))
              : null
          }
        </ul>
      </section>

    );
  }
}
