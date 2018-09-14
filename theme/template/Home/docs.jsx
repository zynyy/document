import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import media from './media';
import fadeIn from './animation/fade-in';
import RollingText from './RollingText';
import Button from './Button';

const Container = styled.div`
  color: white;
  flex: 2;
  ${media.tablet`
    flex: 1;
    transform: none;
  `};
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 4rem;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
  ${media.tablet`
    text-align: center;
  `};
  ${media.phone`
    font-size: 3rem;
  `};
`;

const SubTitle = styled.h2`
  font-weight: 300;
  font-size: 2.5rem;
  line-height: 1.2;
  padding-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  ${fadeIn(0.4)};
  ${media.tablet`
    text-align: center;
  `};
  ${media.phone`
    font-size: 1.5rem;
  `};
`;

const Buttons = styled.div`
  display: flex;
  width: 550px;
  ${fadeIn(0.5)};
  font-size: 1.25rem;
  a {
    margin-right: 1rem;
    ${media.tablet`
      margin: 0;
      text-align: center;
      margin-right: 0;
    `};
  }
  ${media.tablet`
    margin: 0 1rem;
    justify-content: space-around;
    width: 100%;
    text-align: center;
  `};
  ${media.phone`
    font-size: .875rem;
    a {
      width: inherit;
    }
  `};
`;

const ResponsiveRollingText = styled(RollingText)`
  ${media.tablet`
    width: 100%;
  `};
`;

const Primary = styled.div`
  display: inline-block;
  ${fadeIn(0.3)};
  color: ${props => props.theme.primary};
`;

const Secondary = styled.div`
  transition: 0.3s ease color;
  display: inline-block;
  ${fadeIn(0.2)};
`;

// const isBot = () => /google|baidu|bing|msn|duckduckgo|teoma|slurp|yandex/i.test(navigator.userAgent);

export default function Docs({ template }) {
  const { index, name, color } = template;
  // || isBot() 103
  return (
    <Container>
      <Title title="CodeSandbox">
        <Secondary style={{ color }}>Code</Secondary>
        <Primary>Sandbox</Primary>
      </Title>
      <SubTitle title={name}>
        {typeof window === 'undefined' ? (
          <span>The online code editor for web applications</span>
        ) : (
          <span>
            The online code editor for
            {' '}
            <RollingText updateCheck={name} width="12rem">
              <span style={{ color }}>
                {name}
              </span>
            </RollingText>
          </span>
          )}
      </SubTitle>

      <ResponsiveRollingText updateCheck={template.name}>

        {
          Object.keys(index).map(key => (
            <Buttons>
              <Button
                href={index[key]}
                color={color}
                style={{ width: 220 }}
              >
                {key}
              </Button>

              <Button
                href={index[key]}
                color={color}
                secondary
              >
                {key}
              </Button>
            </Buttons>
          ))
        }

      </ResponsiveRollingText>
    </Container>
  );
}

Docs.propTypes = {
  template: PropTypes.shape().isRequired,
};
