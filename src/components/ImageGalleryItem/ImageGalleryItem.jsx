import { ImageGalleryImageStyled } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  image: { tags, largeImageURL, webformatURL },
  onSelect,
}) => {
  return (
    <ImageGalleryImageStyled
      src={webformatURL}
      alt={tags}
      onClick={() => {
        onSelect(largeImageURL);
      }}
    />
  );
};
ImageGalleryItem.propTypes = {
  image: PropTypes.shape(
    {
      tags: PropTypes.string,
      largeImageURL: PropTypes.string,
      webformatURL: PropTypes.string,
    }
  ),
  onSelect: PropTypes.func,
};
