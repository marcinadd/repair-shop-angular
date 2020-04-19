import {Client} from './Client';

export class Repairable {
  id: number;
  name: string;
  serial: string;
  owner: Client;
  ownerId: number;
}
