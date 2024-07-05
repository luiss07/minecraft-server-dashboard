/* Source: https://ui.shadcn.com/docs/components/card */

import React, { ReactElement } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@src/components/ui/card";

interface StartStopProps {
  button?: ReactElement | null;
  isOn: boolean;
}

const StartStop: React.FC<StartStopProps> = ({ button = null, isOn = false }) => {
  return (
    <Card className='flex flex-col items-center justify-center w-11/12 h-56 m-5 shadow-lg border-none'>
      <CardHeader className='flex flex-col items-center justify-center p-0 my-7'>
        <CardTitle className=''> Server status </CardTitle>
        <CardDescription className='text-lg'> ip: localhost </CardDescription>
      </CardHeader>
      <CardContent className={`flex justify-center items-center p-0 font-bold text-lg w-5/6 h-1/5 rounded-lg ${(isOn ? 'bg-green-700' : 'bg-red-700')}`}>
        <p>{isOn ? "ONLINE" : "OFFLINE"}</p>
        {/* <LedLight isOn={isOn} /> */}
      </CardContent>
      <CardFooter className='font-bold text-lg m-3 p-0'>
        {button}
        {/* <Button variant="outline" onClick={() => toggle()} >Button</Button> */}
      </CardFooter>
    </Card>
  );
};

export default StartStop;