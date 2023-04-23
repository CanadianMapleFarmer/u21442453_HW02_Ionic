import { iUser } from './iuser';

export class user implements iUser {
  id!: number;
  full_name!: string;
  cellNum!: string;
  email!: string;
}
