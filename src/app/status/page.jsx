"use client";

import { useState } from 'react';

import StartStopCard from "@src/components/startStop"
import { Button } from "@src/components/ui/button"
import { LedLight } from "@src/components/ui/ledLight"

const Status = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  const [status, setStatus] = useState('');

  const handleStartServer = async () => {
    try {
      const response = await fetch('/api/start-server', { method: 'GET' });
      const data = await response.json();
      setStatus(data.status);
      toggle();
    } catch (error) {
      console.error('Error starting server:', error);
    }
  };
  
  return (
    <div className='content_layout'>
        <StartStopCard button={<Button onClick={handleStartServer} >Button</Button>} isOn={isOn} />
        <p>{status}</p>
    </div>
  )
}

export default Status