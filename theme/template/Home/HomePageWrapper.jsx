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
      activeModule: 'front-end',
    };
  }

  componentDidMount() {
    // this.intervalTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  intervalTimer = () => {
    let i = 0;
    const { modules } = this.props;
    const { length } = modules;
    this.timer = setInterval(() => {
      i += 1;
      this.setState({
        activeModule: modules[i % length],
      });
    }, 1500);
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
    const { isCheck, selectModule, activeModule } = this.state;
    const { module, moduleData } = this.props;

    return (
      <div className={classnames('home-page-wrapper', { active: module === activeModule })}>
        <div className="docs-mian">
          <div className={classnames('module')}>
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
  modules: PropTypes.arrayOf(PropTypes.string).isRequired,
};
