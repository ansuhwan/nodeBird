import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './ImagesZoom';
import { backUrl } from '../config/config';

const PostImages = ({ images }) => {
  const [showImagesZoome, setShowImagesZoome] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoome(true);
  }, []);
  const onClose = useCallback(() => {
    setShowImagesZoome(false);
  }, []);
  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
                    // style={{ maxWidth: "200px" }}
          src={`${backUrl}/${images[0].src}`}
          alt={images[0].src}
          onClick={onZoom}
        />
        {showImagesZoome && (
        <ImagesZoom images={images} onClose={onClose} />
        )}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img
          role="presentation"
          style={{ width: '50%', display: 'inline-block' }}
          src={`${backUrl}/${images[0].src}`}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          role="presentation"
          style={{ width: '50%', display: 'inline-block' }}
          src={`${backUrl}/${images[1].src}`}
          alt={images[1].src}
          onClick={onZoom}
        />
        {showImagesZoome && (
        <ImagesZoom images={images} onClose={onClose} />
        )}
      </>
    );
  }
  return (
    <>
      <div>
        <img
          role="presentation"
          style={{ width: '50%' }}
          src={`${backUrl}/${images[0].src}`}
          alt={images[0].src}
          onClick={onZoom}
        />
        <div
          role="presentation"
          style={{
            display: 'inline-block',
            width: '50%',
            textAlign: 'center',
            verticalAlign: 'middle',
          }}
          onClick={onZoom}
        >
          <PlusOutlined />
          <br />
          {images.length - 1}개 더 보기
        </div>
      </div>
      {showImagesZoome && (
        <ImagesZoom images={images} onClose={onClose} />
      )}
    </>
  );
};

PostImages.propTypes = {
  // eslint-disable-next-line react/require-default-props
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
