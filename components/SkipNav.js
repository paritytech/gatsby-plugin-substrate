import React from 'react';

export default function SkipNav({ main }) {
  return (
    <button
      onClick={e => {
        e.preventDefault();
        if (main && main.current) {
          main.current.focus({ preventScroll: true });
        }
      }}
      className="fixed -top-20 left-4 xl:left-8 z-50 focus:top-5 py-3 px-6 bg-white dark:bg-substrateBlackish rounded shadow-md"
    >
      Skip navigation
    </button>
  );
}
