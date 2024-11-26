'use client'

import React, { createContext, useContext, useState } from 'react';

// Create the Cursor Context
const CursorContext = createContext<{
  hideCursor: boolean;
  setHideCursor: (state: boolean) => void;
}>({
  hideCursor: false,
  setHideCursor: () => {}, // Placeholder function
});

// Cursor Provider Component
export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hideCursor, setHideCursorState] = useState(false);

  const setHideCursor = (state: boolean) => {
    setHideCursorState(state); // Update state
  };

  return (
    <CursorContext.Provider value={{ hideCursor, setHideCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

// Custom hook to use the Cursor Context
export const useCursor = () => useContext(CursorContext);
