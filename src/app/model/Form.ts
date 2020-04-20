import {Client} from './Client';
import {Repairable} from './Repairable';

export class Form {
  description: string;
  client: Client;
  repairable: Repairable;
  clientId: number;
  repairableId: number;
}
