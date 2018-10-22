import React from 'react';
import PropTypes from 'prop-types';

export default class HomeScene extends React.Component {
  handleActiveModuleClick = (event) => {
    console.warn(event);
  }

  render() {
    const { modules } = this.props;
    return (
      <div className="scene">
        {
          modules.map(module => (
            <button
              key={module}
              onClick={this.handleActiveModuleClick}
              type="button"
              className="scene-nav-button scene-active"
            >
              {module}
            </button>
          ))
        }
      </div>
    );
  }
}

HomeScene.propTypes = {
  modules: PropTypes.arrayOf(PropTypes.string).isRequired,
};
