import { Request } from './Request';
import { Response } from './Response';

export interface Log {
  id: string;
  service: string;
  timestamp: string;   // ISO-String
  duration: string;    // z. B. "30ms"
  tags: string[];
  request: Request;
  response: Response;
}
