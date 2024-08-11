'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { StateMachine } from "@src/lib/stateMachine";

interface ServerStatus {
  serverState: StateMachine;
  setServerState: React.Dispatch<React.SetStateAction<StateMachine>>;
  playerCount: number;
  setPlayerCount: React.Dispatch<React.SetStateAction<number>>;
}

const ServerStatusContext = createContext<ServerStatus | undefined>(undefined);

export function ServerStatusProvider({ children }: { children: ReactNode }) {
  const [ serverState, setServerState ] = useState<StateMachine>(new StateMachine('STOPPED'));
  const [ playerCount, setPlayerCount ] = useState<number>(0);

  return (
    <ServerStatusContext.Provider value={{ serverState, setServerState, playerCount, setPlayerCount }}>
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
