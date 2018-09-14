import React from 'react';
import PropTypes from 'prop-types';
import { TimelineMax, TweenMax } from 'gsap';

export default class RollingText extends React.Component {
  state = {
    oldChildren: null,
  };

  componentDidMount() {
    this.fadeInTL = new TimelineMax({ paused: true });
    this.fadeInTL.fromTo(
      this.fadein,
      0.8,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 },
    );

    this.fadeOutTL = new TimelineMax({ paused: true });
    this.fadeOutTL.fromTo(
      this.fadeout,
      0.8,
      { opacity: 1, y: 0 },
      { opacity: 0, y: -20 },
    );

    TweenMax.set(this.fadein, { opacity: 1, y: 0 });
  }

  shouldComponentUpdate(nextProps) {
    const { updateCheck } = this.props;
    return (
      !updateCheck || nextProps.updateCheck !== updateCheck
    );
  }

  componentDidUpdate(nextProps) {
    const { children } = this.props;
    if (nextProps.children !== children) {
      this.oldChildren = children;
      this.fadeInTL.restart();
      this.fadeOutTL.restart();
    }
  }

  render() {
    const { oldChildren } = this.state;
    const { children } = this.props;

    return (
      <div
        // className={className}
        style={{ display: 'inline-block', position: 'relative' }}
      >
        <div
          style={{ position: 'absolute', left: 0 }}
          ref={(el) => {
            this.fadeout = el;
          }}
        >
          {oldChildren}
        </div>
        <div
          style={{ display: 'inline-block', width: 'inherit' }}
          ref={(el) => {
            this.fadein = el;
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

RollingText.propTypes = {
  // className: PropTypes.string.isRequired,
  // style: PropTypes.string.isRequired,
  children: PropTypes.shape().isRequired,
  updateCheck: PropTypes.string.isRequired,
};
