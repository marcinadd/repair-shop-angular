import {Client} from './Client';
import {Repairable} from './Repairable';
import {Item} from './Item';

export class Form {
  id: number;
  description: string;
  client: Client;
  repairable: Repairable;
  clientId: number;
  repairableId: number;
  items: Item[];
  status: string;
}
