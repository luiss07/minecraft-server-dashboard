"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@src/components/ui/card"
import StartStopCard from "@src/components/startStop"
import { LedLight } from "@src/components/ui/ledLight"

const Home = () => {
  return (
    <div className='content_layout'>
        <StartStopCard />

        <Card className='flex flex-col items-center justify-center w-2/5 h-56 m-5 shadow-lg border-none'>
          <CardHeader className='flex flex-col items-center justify-center p-0 my-7'>
            <CardTitle className=''> Players </CardTitle>
            <CardDescription className='text-lg'></CardDescription>
          </CardHeader>
          <CardContent className='flex justify-center items-center p-0 font-bold text-lg w-5/6 h-1/5 rounded-lg'>
            <p>WORK IN PROGRESS</p>
          </CardContent>
          <CardFooter className='font-bold text-lg m-3 p-0'>
          </CardFooter>
        </Card>

        <Card className='flex flex-col items-center justify-center w-2/5 h-56 m-5 shadow-lg border-none'>
          <CardHeader className='flex flex-col items-center justify-center p-0 my-7'>
            <CardTitle className=''> Ram usage </CardTitle>
            <CardDescription className='text-lg'></CardDescription>
          </CardHeader>
          <CardContent className='flex justify-center items-center p-0 font-bold text-lg w-5/6 h-1/5 rounded-lg'>
            <p>WORK IN PROGRESS</p>
          </CardContent>
          <CardFooter className='font-bold text-lg m-3 p-0'>
          </CardFooter>
        </Card>
    </div>
  )
}

export default Home