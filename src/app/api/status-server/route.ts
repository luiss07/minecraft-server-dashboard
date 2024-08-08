import { NextRequest, NextResponse } from 'next/server';
const mcping = require('mcping-js');

const serverIP = '172.28.138.132';
const server = new mcping.MinecraftServer(serverIP, 25565);

const timeout = 3000;
const protocolVersion = 763;

interface Err {
  errno: number;
  code: string;
  syscall: string;
  address: string;
  port: number;
}

interface Res {
  version: {
    name: string;
    protocol: number;
  };
  enforcesSecureChat: boolean;
  description: {
    extra: [
      {
        text: string;
      }
    ];
    text: string;
  };
  players: {
    max: number;
    online: number;
  };
}

function pingServer(): Promise<{ status: string }> {
  return new Promise((resolve, reject) => {
    server.ping(timeout, protocolVersion, (err: Err | {}, res: Res) => {
      if (err) {
        console.error(err);
        resolve({ status: 'offline' });
      } else {
        console.log(res);
        resolve({ status: 'online' });
      }
    });
  });
}

export async function GET(req: NextRequest) {
  try {
    const result = await pingServer();
    return new NextResponse(JSON.stringify(result));
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ status: 'error' }));
  }
}
