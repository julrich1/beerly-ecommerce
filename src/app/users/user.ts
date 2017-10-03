export class User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  phone: number;

  constructor(id = null, firstname = null, lastname = null, email = null) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
}