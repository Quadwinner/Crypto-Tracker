import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-home-home',
  templateUrl: './home-home.component.html',
  styleUrls: ['./home-home.component.css']
})
export class HomeHomeComponent implements OnInit {

  constructor(public userService: UserService) { }

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
  }

}
