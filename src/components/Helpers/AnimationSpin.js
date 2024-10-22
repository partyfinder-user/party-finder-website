import React from 'react';
import { motion } from 'framer-motion';

const EqualizerBar = ({ delay }) => {
  return (
    <motion.div
      className='w-1 h-8 bg-gradient-to-t from-background via-accent-500 to-[#ff00cc] rounded-xl'
      initial={{ scaleY: 0.2 }}
      animate={{ scaleY: [0.4, 1, 0.2] }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay: delay,
      }}
    />
  );
};

const AnimationSpin = () => {
  return (
    <div className='flex items-end justify-center gap-1 h-8'>
      <EqualizerBar delay={0} />
      <EqualizerBar delay={0.2} />
      <EqualizerBar delay={0.4} />
      <EqualizerBar delay={0.6} />
    </div>
  );
};

export default AnimationSpin;