'use client'

import React, {useState, useEffect} from "react";
import { useServerStatus } from "@src/context/serverStatus.context";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@src/components/ui/card";
import StartStopCard from "@src/components/startStop";
import { Button } from "@src/components/ui/button";
import { StateMachine, StateName } from "@src/lib/stateMachine";
import { DataArray } from "@mui/icons-material";
// import { LedLight } from "@src/components/ui/ledLight";

const Home: React.FC = () => {

  const { serverState, setServerState, playerCount, setPlayerCount } = useServerStatus();

  /* Have to return a new object since useEffect runs on reference change */
  const updateServerState = (toState : StateName) => {
    setServerState((prev) => {
      const newState = new StateMachine(prev.getCurrentStatus()); // Preserve the current status
      newState.transitionTo(toState);
      return newState;
    });
  }

  /* useEffect(() => {
    const fetchInitialServerState = async () => {
      try {
        const response = await fetch('/api/status-server', { method: 'GET' });
        const data = await response.json();

        if (data.status === 'online') {
          setServerState((prev) => {
            prev.transitionTo('RUNNING');
            return new StateMachine('RUNNING');
          });
        }
      } catch (error) {
        console.error('Failed to fetch server status:', error);
        setServerState(new StateMachine('ERROR'));
      }
    };

    fetchInitialServerState();
  }, []); // Empty dependency array means this runs once when the component mounts. */

  /* Request to check whether the server is online or not */
  const fetchServerStatus = async () => {
    try {
      const response = await fetch('/api/status-server', { method: 'GET' });
      const data = await response.json();

      if (data.status === 'online' && serverState.getCurrentStatus() === ('STARTING' || 'STOPPED')) {
        updateServerState('RUNNING');
      } else if (data.status === 'offline' && serverState.getCurrentStatus() === 'RUNNING') {
        throw new Error('The server seems to have stopped unexpectedly! Go check the logs.');
      }
    } catch (error) {
      console.error('Failed to fetch server status:', error);
      updateServerState('ERROR');
    }
  };

  /* When the server has been launched check if it is accessible by players every 10 seconds */
  useEffect(() => {
    let interval: NodeJS.Timeout;
    console.log("inside useEffect timeout" + serverState.getCurrentStatus());
    if (serverState.getCurrentStatus() === 'STARTING' || serverState.getCurrentStatus() === 'RUNNING') {
      console.log("inside useEffect timeout if");
      interval = setInterval(fetchServerStatus, 10000);
    } else if (serverState.getCurrentStatus() === 'ERROR') {
      //stopServer();
    }

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [serverState.getCurrentStatus()]);

  /* Request to launch the server */
  const startServer = async () => {
    try {
      const response = await fetch('/api/start-server', { method: 'GET' });
      const data = await response.json();

      if (data.status === 'executed') {
        updateServerState('STARTING');
      } else {
        throw new Error('The server could not be launched! Go check the logs.');
      }
    } catch (error) {
      console.error('Failed to start the server:', error);
      updateServerState('ERROR');
    }
  };

  const stopServer = async () => {
    console.log('called stop function');
    // TODO implement the stop server API
    updateServerState('STOPPED');
  };

  return (
    <div className='content_layout'>
      <StartStopCard button={
        serverState.getCurrentStatus() === 'RUNNING' ?
          <div>
            <Button onClick={stopServer}>RESTART</Button>
            <Button onClick={stopServer}>STOP</Button>
          </div> :
          <Button onClick={startServer}>START</Button>
      } status={serverState.getStateInfo()} />

      <Card className='flex flex-col items-center justify-center w-2/5 h-56 m-5 shadow-lg border-none'>
        <CardHeader className='flex flex-col items-center justify-center p-0 my-7'>
          <CardTitle className=''> Players </CardTitle>
          <CardDescription className='text-lg'></CardDescription>
        </CardHeader>
        <CardContent className='flex justify-center items-center p-0 font-bold text-lg w-5/6 h-1/5 rounded-lg'>
          <p>WORK IN PROGRESS</p>
        </CardContent>
        <CardFooter className='font-bold text-lg m-3 p-0'></CardFooter>
      </Card>

      <Card className='flex flex-col items-center justify-center w-2/5 h-56 m-5 shadow-lg border-none'>
        <CardHeader className='flex flex-col items-center justify-center p-0 my-7'>
          <CardTitle className=''> Ram usage </CardTitle>
          <CardDescription className='text-lg'></CardDescription>
        </CardHeader>
        <CardContent className='flex justify-center items-center p-0 font-bold text-lg w-5/6 h-1/5 rounded-lg'>
          <p>WORK IN PROGRESS</p>
        </CardContent>
        <CardFooter className='font-bold text-lg m-3 p-0'></CardFooter>
      </Card>
    </div>
  );
}

export default Home;
