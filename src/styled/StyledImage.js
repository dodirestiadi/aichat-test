import styled from 'styled-components';

const Image = styled.img`
  height: ${props => props.height || ''};
  width: ${props => props.width || ''};
  ${props => props.fit ? `object-fit: ${props.fit}` : ''};
  ${props => props.isCentered ? `
    display: block;
    margin-left: auto;
    margin-right: auto;
  `: ''};
`;

export default Image;