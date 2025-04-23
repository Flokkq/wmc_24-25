import { Header } from './Header';

export interface Request {
  path: string;
  headers: Header[];
  body: string;
}
