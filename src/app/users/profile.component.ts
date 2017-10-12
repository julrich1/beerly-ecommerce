import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from "../users/user.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  // styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {

  }
}