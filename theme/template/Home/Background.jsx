import React from 'react';
import setupCanvas from './canvas';

export default class Background extends React.Component {
  componentWillUnmount() {
    if (this.canvas) {
      this.canvas.destroy();
    }
    this.canvas = null;
  }

  startCanvas = (el: HTMLElement) => {
    this.canvas = setupCanvas(el);
  };

  render() {
    return (
      <canvas
        className="canvas-star"
        ref={this.startCanvas}
      />
    );
  }
}
