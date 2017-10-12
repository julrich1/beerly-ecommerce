import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { UserService } from "./user.service";

@Injectable()
export class LoggedIn implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canActivate(): Promise<boolean> {
    return this.userService.isLoggedIn().then((res) => {
      if (res) { return res; }
      
      this.router.navigateByUrl("login");
      return res;
    })
  }
}