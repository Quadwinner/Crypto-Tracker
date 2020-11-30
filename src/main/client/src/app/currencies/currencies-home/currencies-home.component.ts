import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-currencies-home',
  templateUrl: './currencies-home.component.html',
  styleUrls: ['./currencies-home.component.css']
})
export class CurrenciesHomeComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  showDetails: boolean = false;
  chosenName: string = "";
  chosenSymbol: string = "";
  chosenImageUrl: string = "";

  renderDetails(details: any) {
    this.chosenName = details.name;
    this.chosenSymbol = details.symbol;
    this.chosenImageUrl = details.imageUrl;
    this.showDetails = true;
  }

  renderList() {
    this.chosenName = "";
    this.chosenSymbol = "";
    this.chosenImageUrl = "";
    this.showDetails = false;
  }

  ngOnInit(): void {
    if (!this.userService.user) {
      this.router.navigateByUrl('/login');
    }
  }

}