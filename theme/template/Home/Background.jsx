import React from 'react';
import PropTypes from 'prop-types';
import setupCanvas from './canvas';

export default class Background extends React.PureComponent {
  componentWillUnmount() {
    if (this.canvas) {
      this.canvas.destroy();
    }
    this.canvas = null;
  }

  startCanvas = (el: HTMLElement) => {
    const { setCanvas } = this.props;
    this.canvas = setupCanvas(el);
    setCanvas(this.canvas);
  };

  render() {
    return (
      <div
        className="container"
        style={{
          background: `linear-gradient(rgba(228, 3, 3, 0.05),
          rgba(255, 140, 0, 0.05), rgba(255, 237, 0, 0.05),
          rgba(0, 128, 38, 0.05), rgba(0, 77, 255, 0.05),
          rgba(117, 7, 135, 0.05))`,
        }}
      >
        <canvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          ref={this.startCanvas}
        />
      </div>
    );
  }
}

Background.propTypes = {
  setCanvas: PropTypes.func.isRequired,
};
