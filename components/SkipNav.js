import React from 'react';

export default function SkipNav({ main }) {
  return (
    <button
      onClick={() => {
        if (main && main.current) {
          main.current.focus({ preventScroll: true });
        }
      }}
      className="fixed z-50 -top-20 left-4 xl:left-8 focus:top-5 py-3 px-6 bg-white dark:bg-substrateBlackish rounded shadow-md"
    >
      Skip navigation
    </button>
  );
}
