import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from "./user.service";

import { PasswordValidation } from './password-validation';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  private submitted = false;
  private pwmatch = false;
  private password = "";
  private passwordMatch = "";
  private registerForm: FormGroup;
  

  constructor(
    private userService: UserService,
    private router: Router,
    fb: FormBuilder)
  {
    this.registerForm = fb.group({
      email: [""],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      firstname: [""],
      lastname: [""]

    }, {
      validator: PasswordValidation.MatchPassword
    })
  }
           
  onSubmit(form: NgForm): void {
    this.submitted = true;

    this.userService.register(form.value).then((response) => {
      this.userService.isLoggedIn().then(() => {
        this.router.navigate(["home"]);
      });
    })
    .catch((err) => {
      // Show error message to user
      console.log("There was an error in registration.")
      this.submitted = false;
    });
  }
}