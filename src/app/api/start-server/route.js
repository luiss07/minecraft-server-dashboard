import { NextResponse } from 'next/server';
import { spawn } from 'child_process';

//const javaCommand = './';
const javaArgs = ['/home/ldelleva/serverMinecraft/start-spigot.sh'];
const cwd = '/home/ldelleva/serverMinecraft'; // Replace this with the desired working directory

export function GET(req) {
  if (req.method === 'GET') {
    try {
      const serverProcess = spawn('bash', [javaArgs], { cwd });
      console.log("PID" + serverProcess.pid);

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
    }
    return new NextResponse(JSON.stringify({ "status": "online" }));
  }
}