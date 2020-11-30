import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register-home',
  templateUrl: './register-home.component.html',
  styleUrls: ['./register-home.component.css']
})
export class RegisterHomeComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  username = "";
  email = "";
  password = "";
  confirmPassword = "";

  setUsername(username: string) {
    this.username = username;
  }

  setEmail(email: string) {
    this.email = email;
  }

  setPassword(password: string) {
    this.password = password;
  }

  setConfirmPassword(confirmPassword: string) {
    this.confirmPassword = confirmPassword;
  }

  register() {
    if (this.password !== this.confirmPassword) {
      return console.log("password and confirm password must match");
    }
    const data = {
      username: this.username,
      email: this.email,
      password: this.password
    };
    try {
      this.userService.registerUser(data).subscribe((response: any) => {
        this.router.navigateByUrl('/login');
      })
    } catch (error: any) {
      console.log(error);
    }
  }

  ngOnInit(): void {
  }

}
