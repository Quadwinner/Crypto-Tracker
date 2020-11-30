import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  username = "";
  password = "";

  setUsername(username: string) {
    this.username = username;
  }

  setPassword(password: string) {
    this.password = password;
  }

  handleLogin() {
    const data = {
      username: this.username,
      password: this.password
    };
    try {
      this.userService.loginUser(data).subscribe((response: any) => {
        this.userService.user = response.username;
        this.router.navigateByUrl('');
      })
    } catch (error: any) {
      console.log(error);
    }
  }

  ngOnInit(): void {
  }

}
