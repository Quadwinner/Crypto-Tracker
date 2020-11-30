import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public userService: UserService) { }

  handleLogout() {
    try {
      this.userService.logoutUser().subscribe((response: any) => {
        this.userService.user = null;
        this.router.navigateByUrl('');
      });
    } catch (error: any) {
      console.log(error);
    }
    
  }

  ngOnInit(): void {
  }

}
