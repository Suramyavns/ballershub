import React,{useState} from 'react'

const ImageWFallback = ({ style,src, fallback, alt='' }) => {
    const [imgSrc, setImgSrc] = useState(src);
  
    return (
      <img
        src={imgSrc}
        alt={alt}
        onError={() => setImgSrc(fallback)}
        className={style}
      />
    );
  };

export default ImageWFallback
