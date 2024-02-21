// ServerStatusContext.js
'use client';

import { createContext, useContext, useState } from 'react';

const ServerStatusContext = createContext();

export function ServerStatusProvider({ children }) {
  const [isServerRunning, setServerRunning] = useState(false);
  const [playerCount, setPlayerCount] = useState(0); // New global variable

  return (
    <ServerStatusContext.Provider value={{ isServerRunning, setServerRunning, playerCount, setPlayerCount }}>
      {children}
    </ServerStatusContext.Provider>
  );
}

export function useServerStatus() {
  return useContext(ServerStatusContext);
}
