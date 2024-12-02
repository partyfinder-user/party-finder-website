'use client';
import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const ParallaxImage = ({ imageSrc }) => {
  const scrollY = useMotionValue(0);
  const scale = useTransform(scrollY, [0, 500], [1, 1.3]);
  const y = useTransform(scrollY, [0, 200], [0, 100]);

  useEffect(() => {
    const updateScrollY = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener('scroll', updateScrollY);
    return () => {
      window.removeEventListener('scroll', updateScrollY);
    };
  }, [scrollY]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${imageSrc})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        y,
        scale,
      }}
      className='relative h-[60vh]'
    />
  );
};

export default ParallaxImage;
