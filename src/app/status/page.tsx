'use client'

import React, { useEffect, useState } from 'react';
import { useServerStatus } from '@src/context/serverStatus.context';
import StartStopCard from "@src/components/startStop";
import { Button } from "@src/components/ui/button";
// import { LedLight } from "@src/components/ui/ledLight";

const Status: React.FC = () => {
  const { isServerRunning, setServerRunning } = useServerStatus();

  const [logContent, setLogContent] = useState<string>('');
  const [checkLogs, setCheckLogs] = useState<boolean>(false);

  const fetchLogContent = async () => {
    await fetch('/api/status-server', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setLogContent(data.logs);
        } else {
          setLogContent('error-occurred');
        }
      })
      .catch(error => {
        console.log('Error: ' + error);
      });
  };

  useEffect(() => {
    if (logContent !== '') {
      if (logContent === 'error-occurred') {
        setServerRunning(false);
      } else if (logContent.includes('All dimensions are saved')) {
        setServerRunning(false);
      } else if (logContent.includes('Done')) {
        setServerRunning(true);
      }
    }
  }, [logContent, setServerRunning]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (checkLogs) {
      interval = setInterval(fetchLogContent, 4000); // Call your function every 4 seconds
    }

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts or when isRunning changes to false
    };
  }, [checkLogs]);

  // used to start the server script 
  const startServer = async () => {
    fetch('http://localhost:3000/api/start-server', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        console.log("data returned");
        console.log(data);
        setCheckLogs(true);
      })
      .catch(error => { console.log("error returned"); console.log(error); });
  };

  const stopServer = async () => {
    setCheckLogs(false);
  };

  return (
    <div className='content_layout'>
      <StartStopCard button={
        (isServerRunning) ?
          <div>
            <Button onClick={stopServer}>RESTART</Button>
            <Button onClick={stopServer}>STOP</Button>
          </div> :
          <Button onClick={startServer}>START</Button>
      } isOn={isServerRunning} />
    </div>
  );
}

export default Status;
