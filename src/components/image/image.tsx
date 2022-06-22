import { useState } from 'react';
import Spinner from '../spinner/spinner';
import './image.css';

interface IImageProps {
  src: string;
  width: number | string;
  height: number | string;
  alt?: string;
  loading?: 'lazy' | 'eager';
  phantomWidth?: number;
  phantomHeight?: number;
}

const Image = ({
  src,
  width,
  height,
  alt,
  phantomWidth,
  phantomHeight
}: IImageProps) => {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  return (
    <>
      <img
        style={imgLoaded ? {} : { display: 'none' }}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setImgLoaded(true)}
      />
      <div
        style={{
          width: phantomWidth,
          height: phantomHeight,
          display: imgLoaded ? 'none' : 'flex'
        }}
        className="image-spinner"
      >
        <Spinner />
      </div>
    </>
  );
};

export default Image;
