import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  TimelineMax,
  TweenMax,
  Power2,
  Power3,
  Elastic,
} from 'gsap';

import fadeIn from './animation/fade-in';

import Cube from './Cube';
import media from './media';
import getScrollPos from './canvas/scroll';

const RADIUS = 235;
const Container = styled.div`
  flex: 2;
  transform: translateX(135px) translateY(125px);
  ${fadeIn(0)};
  ${media.tablet`
    flex: 2;
    width: 100%;
    transform: translateX(135px) translateY(400px);
    justify-content: center;
    align-items: center;
  `};
`;

const SmallCube = styled(
  class SmallCubeInner extends React.Component {
    shouldComponentUpdate() {
      return false;
    }

    render() {
      const { cubeRef, ...props } = this.props;
      return (
        <div style={{ willChange: 'transform' }} ref={cubeRef} {...props} />
      );
    }
  },
)`
  position: absolute;
  cursor: pointer;
  transform: scale(0.4, 0.4);
  will-change: transform;
`;

const OFFSETS = [84, 32, 54, 110];

// eslint-disable-next-line react/no-multi-comp
export default class Cubes extends React.Component {
  els = {};

  growTimelines = {};

  shrinkTimelines = {};

  constructor(props) {
    super(props);
    this.state = {
      templates: props.templates.map((template, i) => {
        const angle = ((Math.PI * 2) / props.templates.length) * i;
        const x = RADIUS * Math.cos(angle);
        const y = RADIUS * Math.sin(angle);

        return {
          template,
          x,
          y,
          offset: OFFSETS[i],
        };
      }),
    };
  }

  componentDidMount() {
    const { state, props } = this;
    const { template } = state;
    const { canvas } = props;
    requestAnimationFrame(() => {
      this.growCube(template, canvas).add(
        this.updateCubePos,
        '-=.7',
      );
    });

    this.lastTick = Date.now();
    this.time = 0;

    this.animating = false && window.innerWidth > 1600;

    if (this.animating) {
      this.animate();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { template } = this.props;
    const { templates } = this.state;
    const nextTemplate = nextProps.template;
    const currentTemplate = templates[templates.map(t => t.template).indexOf(template)];

    if (nextTemplate !== currentTemplate.template) {
      this.shrinkCube(currentTemplate);
      if (nextTemplate.name) {
        this.growCube(nextTemplate, nextProps.canvas);
      }
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  updateCubePos = () => {
    const { canvas, template } = this.props;
    if (canvas) {
      const pos = this.els[template.name].getBoundingClientRect();
      canvas.setCubePos(pos.x + 50, pos.y + 70 + getScrollPos().y);
    }
  };

  animate = () => {
    const { state, props } = this;
    const { templates, lastTemplate } = state;
    const { template } = props;

    const delta = Date.now() - this.lastTick;

    if (delta < 0.3) {
      requestAnimationFrame(this.animate);
      return;
    }

    this.lastTick = Date.now();
    this.time = this.time + delta / 16000;

    templates.forEach((tem, i) => {
      if (tem.template === template) {
        return;
      }

      const angle = ((Math.PI * 2) / templates.length) * i + this.time;
      const x = RADIUS * Math.cos(angle);
      const y = RADIUS * Math.sin(angle);

      const isLastTemplate = lastTemplate === template;

      TweenMax.to(
        this.els[template.template.name],
        isLastTemplate ? 0.8 : 0.3,
        {
          left: x,
          bottom: y,
        },
      );
    });
    requestAnimationFrame(this.animate);
  };

  growCube = (template, canvas) => {
    const el = this.els[template.name];
    const { templates } = this.state;
    const rgb = template.color;
    const { x, y } = templates[
      templates.map(({ template: t }) => t).indexOf(template)
    ];

    this.growTimelines[template.name] = this.growTimelines[template.name]
      || new TimelineMax({ paused: true })
        .to(el, 0.8, { x: -x, y, ease: Power3.easeIn })
        .to(el, 0.7, {
          scale: 1,
          ease: Elastic.easeOut,
        })
        .add(() => {
          if (canvas) {
            canvas.makeWave(canvas.cubeX, canvas.cubeY, rgb);
          }
        }, '-=.8');

    return this.growTimelines[template.name].restart();
  };

  shrinkCube = (template) => {
    const el = this.els[template.template.name];

    if (this.animating) {
      new TimelineMax().to(el, 0.7, { scale: 0.4, ease: Power2.easeOut });
    } else {
      this.shrinkTimelines[template.template.name] = this.shrinkTimelines[template.template.name]
        || new TimelineMax()
            .to(el, 0.8, { x: 0, y: 0 })
            .to(el, 0.7, { scale: 0.4, ease: Power2.easeOut }, '-=0.7');

      return this.shrinkTimelines[template.template.name].restart();
    }
    return null;
  };

  hoverCube = (nextTemplate) => {
    const { template } = this.props;
    const el = this.els[nextTemplate.template.name];

    if (nextTemplate.template === template) {
      return;
    }

    TweenMax.to(el, 0.3, {
      scale: 0.5,
    });
  };

  unhoverCube = (nextTemplate) => {
    const { template } = this.props;
    const el = this.els[nextTemplate.template.name];

    if (nextTemplate.template === template) {
      return;
    }

    TweenMax.to(el, 0.3, {
      scale: 0.4,
    });
  };

  render() {
    const { template, setTemplate } = this.props;
    const { templates } = this.state;
    if (typeof window === 'undefined') {
      return null;
    }

    return (
      <Container>
        {templates.map((t, i) => {
          const selected = template === t.template;

          return (
            <SmallCube
              title={t.template.name}
              cubeRef={(el) => {
                this.els[t.template.name] = el;
              }}
              style={{ bottom: t.y, left: t.x }}
              key={t.template.name}
              selected={selected}
              i={i}
              onMouseEnter={() => this.hoverCube(t)}
              onMouseLeave={() => this.unhoverCube(t)}
              onClick={() => setTemplate(t.template)}
            >
              <Cube
                color={t.template.color}
                offset={t.offset}
                speed={120}
                size={170}
              />
            </SmallCube>
          );
        })}
      </Container>
    );
  }
}

Cubes.propTypes = {
  template: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  setTemplate: PropTypes.func.isRequired,
  canvas: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  templates: PropTypes.arrayOf(PropTypes.object).isRequired,
};
