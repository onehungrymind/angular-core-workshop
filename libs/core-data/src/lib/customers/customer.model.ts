export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  title: string;
  status: Status
}

export enum Status {
  WON = 1,
  PROSPECT = 2,
  QUEUED = 3,
  LOST = 4
}
