import { ImageListItem, ImageList } from '@mui/material';

export const ImageGallery = ({ images = [] }) => {
    return (

      <ImageList sx={{ width: "100%", height: 600 }} cols={4} rowHeight={200}>
        {images.map((image) => (
          <ImageListItem key={image}>
            <img
              srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${image}?w=164&h=164&fit=crop&auto=format`}
              alt="Image"
              loading="lazy"
              style={{ borderRadius: 2 }}
            />
          </ImageListItem>
        ))}
      </ImageList>

    );
}

