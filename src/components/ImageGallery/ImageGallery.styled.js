import styled from 'styled-components';

export const ImageGalleryStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-gap: 16px;
  max-width: calc(100vw - 48px);
`;
