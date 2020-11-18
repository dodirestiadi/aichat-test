import styled from 'styled-components';

const Text = styled.span`
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight};
  ${props => props.isBlock ? 'display: block' : ''};
  ${props => props.pointer ? 'cursor: pointer' : ''};
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
`;

export default Text;