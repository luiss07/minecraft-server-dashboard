"use client"

import { useState } from 'react';

import StartStopCard from "@src/components/startStop"
import { Button } from "@src/components/ui/button"
import { LedLight } from "@src/components/ui/ledLight"

const Status = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };
  
  return (
    <div className='content_layout'>
        <StartStopCard button={<Button onClick={() => toggle()} >Button</Button>} isOn={isOn} />
    </div>
  )
}

export default Status