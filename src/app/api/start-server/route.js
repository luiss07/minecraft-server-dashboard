// api/start-server.js
import { spawn } from 'child_process';

const javaCommand = 'java';
const javaArgs = ['-Xmx1024M', '-Xms1024M', '-jar', 'spigot-1.20.1.jar', 'nogui'];
const cwd = 'D:/react/minecraftTestServer/'; // Replace this with the desired working directory

export async function GET(req) {
  if (req.method === 'GET') {
    // Replace 'java', 'server.jar', and other options with your specific Minecraft server startup command
    const serverProcess = spawn(javaCommand, javaArgs, { cwd });
    console.log("PID" + serverProcess.pid);

    let status = 'Starting...';

    serverProcess.stdout.on('data', (data) => {
      console.log(`Minecraft Server: ${data}`);
      // Check for success messages in the data
      if (data.includes('Done') || data.includes('Server started')) {
        status = 'Running';
      }
    });

    serverProcess.stderr.on('data', (data) => {
      console.error(`Minecraft Server Error: ${data}`);
      status = 'Error';
    });

    serverProcess.on('exit', (code) => {
      console.log(`Minecraft Server exited with code ${code}`);
      // If the server exits with a non-zero code, it indicates a failure
      if (code !== 0) {
        status = 'Error';
      }
      return new Response(JSON.stringify({ status }));
    });
  } else {
    console.log('Not a GET request');
  }
}
