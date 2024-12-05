'use client';

import React from 'react';
import Image from 'next/image';

import defaultImage from '/public/images/default-image.png';
import { cx } from '@/tools/tools';

const lazyLoader = ({ src, width, quality }) => {
  return src ? `${src}?w=${width}&q=${quality || 70}` : '';
};

const placeholderImage = (src) => {
  return src ? `/_next/image?url=${src}&q=1&w=100` : '';
};

const LazyImage = ({
  src,
  width = 1024,
  height = 500,
  alt = 'Image',
  className = '',
  priority = false,
  sizes,
  ...rest
}) => {
  const resolvedSrc = typeof src === 'object' && src?.src ? src.src : src;
  const isValidSrc = typeof resolvedSrc === 'string' && resolvedSrc.trim() !== '';
  const imageSrc = isValidSrc ? resolvedSrc : defaultImage;

  return (
    <Image
      loader={isValidSrc ? lazyLoader : undefined}
      loading={priority ? 'eager' : 'lazy'}
      priority={priority}
      placeholder={isValidSrc ? 'blur' : undefined}
      blurDataURL={isValidSrc ? placeholderImage(resolvedSrc) : undefined}
      className={cx(!isValidSrc ? 'max-h-48 object-fill': '', className)}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      {...rest}
    />
  );
};

export default LazyImage;
