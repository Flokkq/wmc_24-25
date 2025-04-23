import { Header } from './Header';

export interface Response {
  status: number;
  headers: Header[];
  body: string;
}
