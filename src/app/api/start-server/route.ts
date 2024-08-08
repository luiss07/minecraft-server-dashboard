import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';

const javaArgs = ['/home/ldelleva/serverMinecraft/start-spigot.sh'];
const cwd = '/home/ldelleva/serverMinecraft';

export async function GET(req: NextRequest) {
  try {
    const serverProcess = spawn('bash', javaArgs, { cwd });
    // console.log("PID: " + serverProcess.pid);

    serverProcess.on('exit', (code) => {
      if (code !== 0)
        throw new Error(`Minecraft Server exited with code ${code}`);
      // If the server exits with a non-zero code, it indicates a failure
    });
  } catch (error) {
    console.error('Error starting server:', error);
    return new NextResponse(JSON.stringify({ "status": "error" }));
  }
  return new NextResponse(JSON.stringify({ "status": "executed" }));
}