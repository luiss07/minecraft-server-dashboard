import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';

//const javaCommand = './';
const javaArgs = ['/home/ldelleva/serverMinecraft/start-spigot.sh'];
const cwd = '/home/ldelleva/serverMinecraft';

export async function handler(req: NextRequest) {
  if (req.method === 'GET') {
    try {
      const serverProcess = spawn('bash', javaArgs, { cwd });
      console.log("PID: " + serverProcess.pid);

      serverProcess.stdout.on('data', (data) => {
        console.log(`mc-server > ${data}`);
      });

      serverProcess.stderr.on('data', (data) => {
        console.error(`mc-error > ${data}`);
      });

      serverProcess.on('exit', (code) => {
        console.log(`Minecraft Server exited with code ${code}`);
        // If the server exits with a non-zero code, it indicates a failure
      });
    } catch (error) {
      console.error('Error starting server:', error);
      return new NextResponse(JSON.stringify({ "status": "error" }));
    }
    return new NextResponse(JSON.stringify({ "status": "online" }));
  }
  console.log("Outside if");
  return new NextResponse(null, { status: 404 });
}
/* This works
export async function GET(req: NextRequest) {
  try {
    const serverProcess = spawn('bash', javaArgs, { cwd });
    console.log("PID: " + serverProcess.pid);

    serverProcess.stdout.on('data', (data) => {
      console.log(`mc-server > ${data}`);
    });

    serverProcess.stderr.on('data', (data) => {
      console.error(`mc-error > ${data}`);
    });

    serverProcess.on('exit', (code) => {
      console.log(`Minecraft Server exited with code ${code}`);
      // If the server exits with a non-zero code, it indicates a failure
    });
  } catch (error) {
    console.error('Error starting server:', error);
    return new NextResponse(JSON.stringify({ "status": "error" }));
  }
  return new NextResponse(JSON.stringify({ "status": "online" }));
}*/
