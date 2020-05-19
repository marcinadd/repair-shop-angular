import {Repairable} from './Repairable';

export class Client {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  repairables: Repairable[];

  fullName: string;
}
