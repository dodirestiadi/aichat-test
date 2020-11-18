import styled from 'styled-components';

const Box = styled.div`
  text-align: ${props => props.isCentered ? 'center' : ''};
  margin-top: ${props => props.marginTop || 0}rem;
  margin-bottom: ${props => props.marginBottom || 0}rem;
  margin-right: ${props => props.marginRight || 0}rem;
  margin-left: ${props => props.marginLeft || 0}rem;
  padding-top: ${props => props.paddingTop || 0}rem;
  padding-bottom: ${props => props.paddingBottom || 0}rem;
  padding-right: ${props => props.paddingRight || 0}rem;
  padding-left: ${props => props.paddingLeft || 0}rem;
  ${props => props.marginY ? `margin: ${props.marginY}rem 0 ${props.marginY}rem 0` : ''};
  ${props => props.marginX ? `margin: 0 ${props.marginX}rem 0 ${props.marginX}rem` : ''};
  ${props => props.paddingY ? `padding: ${props.paddingY}rem 0 ${props.paddingY}rem 0` : ''};
  ${props => props.paddingX ? `padding: 0 ${props.paddingX}rem 0 ${props.paddingX}rem` : ''};
  ${props => props.isFullHeight ? 'height: 100%' : ''};
  ${props => props.isRounded ? 'border-radius: 5px' : ''};
  ${props => props.withBorder ? 'border: solid 1px #eaeaea;' : ''};
  ${props => props.withBoxShadow ? 'box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2)' : ''};
  ${props => props.scrollable ? `
    max-height: calc(100vh - 220px);
    overflow: auto;
  ` : ''};
`;

export default Box;