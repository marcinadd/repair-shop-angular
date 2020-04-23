import {Client} from './Client';
import {Repairable} from './Repairable';
import {Buyable} from './Buyable';

export class Form {
  description: string;
  client: Client;
  repairable: Repairable;
  clientId: number;
  repairableId: number;
  items: Buyable[];
}
