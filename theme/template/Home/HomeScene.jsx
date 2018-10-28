import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class HomeScene extends React.Component {
  handleActiveModuleClick = (event) => {
    const { setActiveScene } = this.props;
    setActiveScene(event.target.value);
  }

  render() {
    const { modules, activeIndex } = this.props;
    return (
      <ul className="slick-dots" style={{ display: 'block' }}>
        {
          modules.map((module, index) => {
            return (
              <li
                className={
                  classnames(
                    {
                      'slick-active': index === activeIndex,
                    },
                  )
                }
                key={module}
              >
                <button
                  onClick={this.handleActiveModuleClick}
                  type="button"
                  title={module}
                  value={index}
                >
                  {module}
                </button>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

HomeScene.propTypes = {
  modules: PropTypes.arrayOf(PropTypes.string).isRequired,
  setActiveScene: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
};
