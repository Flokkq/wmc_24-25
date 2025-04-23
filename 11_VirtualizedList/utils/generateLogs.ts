import { Log } from '../models/Log';
import { Request } from '../models/Request';
import { Response } from '../models/Response';
import { Header } from '../models/Header';

export function generateLogs(count = 1000): Log[] {
  const services = ['BOOdle', 'LosVault', 'JourNoWay'];
  const types    = ['FLAG_IN', 'FLAG_OUT', 'RESEARCH'];
  const baseTime = new Date('2025-04-23T09:15:00.000Z');
  const exploits = [
    { name: 'SQL Injection',     payload: "' OR '1'='1'; SELECT * FROM flags;" },
    { name: 'Path Traversal',    payload: '../../flag.txt' },
    { name: 'XSS',               payload: '<script>alert($flag)</script>' },
    { name: 'Local File Include',payload: '/flag.txt' },
    { name: 'Cmd Injection',     payload: '$(echo $FLAG)' }
  ];
  const LEET_FLAG = 'v1rtu4l1z3d_l1sts_4r3_c00l';

  const logs: Log[] = [];

  for (let i = 0; i < count; i++) {
    const id        = String(i + 1);
    const service   = services[i % services.length];
    const type      = types[i % types.length];
    const timestamp = new Date(baseTime.getTime() + 45_000 * (i + 1)).toISOString();
    const duration  = `${26 + Math.floor(Math.random() * 5)}ms`;
    const tags      = [type, 'ENEMY'] as string[];

    const exploit = exploits[i % exploits.length];
    if (type !== 'FLAG_IN') tags.push(exploit.name);

    const reqHeaders: Header[] = [
      { name: 'User-Agent',   value: 'Mozilla/5.0 (X11; Linux x86_64)…' },
      { name: 'Content-Type', value: 'application/x-www-form-urlencoded' }
    ];
    const reqBody = `payload=${encodeURIComponent(exploit.payload)}`;

    const isFlag = type === 'FLAG_OUT';
    const resHeaders: Header[] = [
      { name: 'Content-Type', value: 'application/json' }
    ];
    const resBody = isFlag
      ? `WMC{${LEET_FLAG}}`
      : '{"status":"ok","data":"–"}';

    const request: Request = { path: `/api/products/${id}/download`, headers: reqHeaders, body: reqBody };
    const response: Response = { status: 200, headers: resHeaders, body: resBody };

    logs.push({ id, service, timestamp, duration, tags, request, response });
  }

  return logs;
}

