import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import fadeIn from './animation/fade-in';
import setupCanvas from './canvas';

const delay = fadeIn(0);

const Container = styled.div`
  transition: 0.8s ease background-color;
  transition-delay: 1s;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  pointer-events: none;
  max-width: 100vw;
  overflow-x: hidden;
  ${delay};
`;

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
      <Container
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
      </Container>
    );
  }
}

Background.propTypes = {
  setCanvas: PropTypes.func.isRequired,
};
