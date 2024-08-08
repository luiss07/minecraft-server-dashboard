'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ServerStatus {
  isServerLaunched: boolean;
  setIsServerLaunched: React.Dispatch<React.SetStateAction<boolean>>;
  isServerOnline: boolean;
  setIsServerOnline: React.Dispatch<React.SetStateAction<boolean>>;
  playerCount: number;
  setPlayerCount: React.Dispatch<React.SetStateAction<number>>;
}

const ServerStatusContext = createContext<ServerStatus | undefined>(undefined);



export function ServerStatusProvider({ children }: { children: ReactNode }) {
  const [isServerLaunched, setIsServerLaunched] = useState<boolean>(false);
  const [isServerOnline, setIsServerOnline] = useState<boolean>(false);
  const [playerCount, setPlayerCount] = useState<number>(0);

  return (
    <ServerStatusContext.Provider value={{ isServerLaunched, setIsServerLaunched, isServerOnline, setIsServerOnline, playerCount, setPlayerCount }}>
      {children}
    </ServerStatusContext.Provider>
  );
}

export function useServerStatus() {
  const context = useContext(ServerStatusContext);
  if (context === undefined) {
    throw new Error('useServerStatus must be used within a ServerStatusProvider');
  }
  return context;
}
