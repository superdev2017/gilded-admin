// Model User to be used in database firebase for entries
export interface IUser {
  id?: string;
  name: string;
  username: string;
  email: string;
  phone?: string;
  // website: string;
  created_at: any; // contains object from firebase.database.ServerValue.TIMESTAMP (obj type)
  updated_at: any;
  last_login?: any;
  user_type?: string;
  photo?: string;
  plan: string;
  isAdmin?: boolean
}

export class User implements IUser {
  id?: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  // website: string;
  created_at: any; // contains object from firebase.database.ServerValue.TIMESTAMP (obj type)
  updated_at: any;
  last_login: any;
  user_type: string;
  photo?: string;
  plan = 'free';
  isAdmin = false;
  constructor(data: any) {
    Object.assign(this, data);
  }
}

export class Authenticate {
  email: string;
  password: string;
}

export class CloudUser {
  displayName: string;
  email: string;
  phoneNumber?: string;
  photoURL: string;
  providerId: string;
  uid: string;
  providers: Array<any> = [];

  constructor(data: any) {
    Object.assign(this, data);
  }
}

export enum Plan {
  FREE = 'free',
  SUBSCRIBER = 'subscriber',
  FORLIFE = 'forlife'
}
