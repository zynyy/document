import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'bisheng/router';
import classnames from 'classnames';

export default class HomePageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck: false,
      selectModule: 'front-end',
      topLength: 0,
    };
  }

  componentDidMount() {
    // this.intervalTimer();
    const Height = window.innerHeight;
    const topLength = Height / 4 - 20;
    this.setState({
      topLength,
    });
  }

  handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const module = target.id;
    this.setState({
      isCheck: value,
      selectModule: module,
    });
  }

  render() {
    const {
      isCheck, selectModule,
      topLength,
    } = this.state;

    const { module, moduleData, activeScene } = this.props;

    return (
      <div className={classnames('home-page-wrapper', { active: module === activeScene })}>
        <div className="docs-mian">
          <div className={classnames('module')} style={{ top: `${topLength}px` }}>
            <label htmlFor={module} className={classnames('module-btn', 'transBg', { check: isCheck && (selectModule === module) })} role="button">
              <input
                id={module}
                type="checkbox"
                checked={isCheck}
                onChange={this.handleInputChange}
              />
              {moduleData.name}
            </label>
            {
              Object.keys(moduleData.index).map(moduleVal => (
                <Link to={moduleData.index[moduleVal]} className={classnames('module-docs', `${module}-${moduleVal}`)} key={moduleVal}>
                  {moduleVal}
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

HomePageWrapper.propTypes = {
  module: PropTypes.string.isRequired,
  moduleData: PropTypes.shape({
    name: PropTypes.string,
    index: PropTypes.object,
  }).isRequired,
  activeScene: PropTypes.string.isRequired,
};
