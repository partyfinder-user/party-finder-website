'use client';

import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const ToggleDescription = ({ text, visibleChars = 130 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldTruncate = text.length > visibleChars;
  const visibleText = text.slice(0, visibleChars);
  const hiddenText = text.slice(visibleChars);

  return (
    <div>
      <span>
        <span dangerouslySetInnerHTML={{ __html: visibleText }} />
        <Transition
          show={isExpanded}
          enter='transition-opacity duration-200'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <span dangerouslySetInnerHTML={{ __html: hiddenText }} />
        </Transition>
      </span>

      {shouldTruncate && (
        <button onClick={toggleExpanded} className='text-accent-700 ml-2'>
          {isExpanded ? '- mostra meno' : '+ mostra tutto'}
        </button>
      )}
    </div>
  );
};

export default ToggleDescription;
