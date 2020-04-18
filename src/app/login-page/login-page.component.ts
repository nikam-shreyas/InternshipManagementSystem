import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],

})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }
  UserNameField: string = "";
  PasswordField: string = "";
  UsernameSignUp: string = "";
  SignUpPassword: string = "";
  ConfirmSignUpPassword: string = "";
  errorMessage: string="";
  ngOnInit() {
  }
  ClearFields() {
    this.UserNameField = "";
    this.PasswordField = "";
  }
  SignIn() {
    if (this.UserNameField.length == 11) {
        if (this.UserNameField.slice(0, 3) == 'C2K' || this.UserNameField.slice(0, 3) == 'E2K' || this.UserNameField.slice(0, 3) == 'I2K') {
          this.router.navigate(['/student-profile', { id: this.UserNameField }]);
        }
    }
    else
      document.getElementById('invalid').innerHTML='<p style="color:indigo">Invalid Username/Password!</p>';

  }
  CreateProfile() {
    if (this.UsernameSignUp.length == 11 && this.SignUpPassword.localeCompare(this.ConfirmSignUpPassword) == 0) {
      if (this.UsernameSignUp.slice(0, 3) == 'C2K' || this.UsernameSignUp.slice(0, 3) == 'E2K' || this.UsernameSignUp.slice(0, 3) == 'I2K') {
        this.router.navigate(['./create-profile']);
      }
    }
    else
      document.getElementById('invalid1').innerHTML='<p style="color:indigo">Invalid Username/Password!</p>';
  }
}
