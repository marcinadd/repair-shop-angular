import {Client} from './Client';
import {Repairable} from './Repairable';
import {Item} from './Item';

export class Form {
  description: string;
  client: Client;
  repairable: Repairable;
  clientId: number;
  repairableId: number;
  items: Item[];
}
