import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from "./user";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});  
  private usersUrl = 'api/users';
  
  constructor(private http: Http) {}

  register(user: Object): Promise<User> {
    return this.http.post(this.usersUrl, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then((response) => {
        console.log(response);
        return response[0];
      })
      .catch(console.log)
  }
}