import { Headers, Http } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from "./user";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService implements OnInit {
  private headers = new Headers({'Content-Type': 'application/json'});  
  private usersUrl = 'api/users';
  private tokenUrl = 'api/token';  
  public userIsLoggedIn: boolean = false;
  
  constructor(private http: Http) {}

  ngOnInit(): void {
    // this.userIsLoggedIn = this.isLoggedIn();
  }

  register(user: Object): Promise<User> {
    return this.http.post(this.usersUrl, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then((response) => {
        console.log(response);
        return response[0];
      })
      .catch(console.log);
  }

  isLoggedIn(): Promise<boolean> {
    console.log("Running isLoggedIn");
    return this.http.get(this.tokenUrl, {headers: this.headers})
      .toPromise()
      .then((response) => {
        if (response.text() === "true") {
          this.userIsLoggedIn = true;
          return true;
        }
        this.userIsLoggedIn = false;
        return false; 
      })
      .catch((err) => {
        console.log(err);
        this.userIsLoggedIn = false;        
        return false;
      });
  }

  login(userObject: object): Promise<boolean> {
    console.log(userObject);
    return this.http.post(this.tokenUrl, userObject, {headers: this.headers})
      .toPromise()
      .then((response) => {
        console.log(response);
        this.userIsLoggedIn = true;
        return true;
      })
      .catch((err) => {
        this.userIsLoggedIn = false;
        return false;
      })
  }

  logout(): Promise<boolean> {
    return this.http.delete(this.tokenUrl, {headers: this.headers})
      .toPromise()
      .then((response) => {
        console.log(response);
        this.userIsLoggedIn = false;
        return false;
      })
      .catch((err) => {
        console.log(err);
        return true;
      })
  }
}