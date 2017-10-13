import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from "../users/user.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  //TO-DO: This component should probably eliminated and replaced as a drop-down menu on the user profile icon.
  constructor(
    private userService: UserService,
    private router: Router
  ) {}
}