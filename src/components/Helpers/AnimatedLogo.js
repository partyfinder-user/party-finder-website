import React from 'react';
import { motion } from 'framer-motion';

// Component for Equalizer Bars used as eyes
const EqualizerBar = ({ delay }) => {
  return (
    <motion.div
      className='w-2 h-6 bg-gradient-to-t from-background via-accent-500 to-[#ff00cc] rounded-xl'
      initial={{ scaleY: 0.4 }}
      animate={{ scaleY: [0.4, 1, 0.2] }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay: delay,
      }}
    />
  );
};

// Component for the logo with equalizer eyes
const LogoWithEqualizerEyes = () => {
  return (
    <motion.svg
      width='64'
      height='64'
      viewBox='0 0 756 600'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='relative'
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Example SVG path content */}
      <path
        d='M123.814 203.032C125.971 132.231 168.088 68.7779 232.494 39.2956L237.35 37.0726C288.612 13.6069 347.698 14.3766 398.332 39.1697C429.48 54.4217 455.805 77.99 474.394 107.269L492.91 136.43L497.481 134.607C553.078 112.436 616.602 127.295 656.596 171.827C710.633 231.996 703.956 324.993 641.878 376.826L634.621 382.885L634.705 383.929C637.127 413.918 629.781 443.885 613.766 469.354C602.206 487.737 586.272 503.31 567.693 514.553C528.914 538.022 480.789 542.052 438.838 524.883L429.535 521.076L415.88 537.406C388.162 570.553 348.49 591.433 305.474 595.514L303.694 595.683C273.968 598.503 244.052 592.839 217.414 579.349C184.961 562.913 159.176 535.778 144.415 502.53L138.191 488.509L117.684 484.034C70.1877 473.672 31.3404 439.645 14.8117 393.927C5.16091 367.233 3.84539 337.936'
        fill='#ffffff'
      />

      <g transform='translate(320, 230)'>
        <EqualizerBar delay={0} />
        <EqualizerBar delay={0.2} />
      </g>

      {/* Right Eye */}
      <g transform='translate(420, 230)'>
        <EqualizerBar delay={0.4} />
        <EqualizerBar delay={0.6} />
      </g>
    </motion.svg>
  );
};

export default function AnimatedLogo() {
  return (
    <div className='flex items-center justify-center'>
      <LogoWithEqualizerEyes />
    </div>
  );
}
