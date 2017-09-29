import { Component, OnInit } from '@angular/core';
import { UserService } from "./users/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.isLoggedIn();
  }

  logout(): void {
    this.userService.logout().then((response) => {
      // this.isLoggedIn = response;
    })
  }
  // loggedInUpdate(event: object) {
  //   this.isLoggedIn = event.count;
  // }
}
