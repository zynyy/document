import styled from 'styled-components';
import media from '../media';

export default styled.div`
  position: relative;
  display: flex;
  ${props => props.vertical && 'justify-content: center;'}
  ${props => props.horizontal && 'align-items: center;'}
  flex-direction: column;
  height: 100vh;
  flex: auto;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  ${media.tablet`
  display: block;
  flex-direction: column;
  margin-top: 6rem;
  margin-bottom: 8rem;
  height: initial;
`};
`;
