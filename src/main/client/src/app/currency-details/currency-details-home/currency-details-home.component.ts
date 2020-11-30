import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { GetCurrenciesService } from '../../get-currencies.service';
import * as moment from 'moment';

@Component({
  selector: 'app-currency-details-home',
  templateUrl: './currency-details-home.component.html',
  styleUrls: ['./currency-details-home.component.css']
})
export class CurrencyDetailsHomeComponent implements OnInit {
  @Input() name = "";
  @Input() symbol = "";
  @Input() imageUrl = "";
  @Input() addCurrency = false;
  @Input() removeCurrency = false;
  @Input() redirectLogin = false;

  @Output() back = new EventEmitter<boolean>();

  constructor(private router: Router, private getCurrenciesService: GetCurrenciesService) { }
  price = "";
  render24Hour: boolean = false;
  x24Hour: Array<string> = [];
  y24Hour: Array<number> = [];
  render30Day: boolean = false;
  x30Day: Array<string> = [];
  y30Day: Array<number> = [];

  goBack() {
    this.back.emit(true);
  }

  setRender24Hour(event: any) {
    event.preventDefault();
    this.render30Day = false;
    this.render24Hour = true;
  }

  setRender30Day(event: any) {
    event.preventDefault();
    this.render24Hour = false;
    this.render30Day = true;
  }

  handleAddCurrency() {
    const data = {
      symbol: this.symbol
    };
    this.getCurrenciesService.insertCurrency(data).subscribe((response: any) => {
      this.router.navigateByUrl('');
    });
  }

  handleRemoveCurrency() {
    this.getCurrenciesService.deleteCurrency(this.symbol).subscribe((response: any) => {
      this.back.emit(true);
    });
  }

  handleRedirectLogin() {
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {
    this.getCurrenciesService.get24HourData(this.symbol).subscribe((response: any) => {
      for (let data of response.Data.Data) {
        const date = moment.unix(data.time);
        this.x24Hour.push(date.format("YYYY-MM-DD kk:mm:ss"));
        this.y24Hour.push(data.close);
      }
      this.price = this.y24Hour[this.y24Hour.length - 1].toString();
      this.render24Hour = true;
    });

    this.getCurrenciesService.get30DayData(this.symbol).subscribe((response: any) => {
      for (let data of response.Data.Data) {
        const date = moment.unix(data.time);
        this.x30Day.push(date.format("YYYY-MM-DD kk:mm:ss"));
        this.y30Day.push(data.close);
      }
      this.price = this.y30Day[this.y30Day.length - 1].toString();
    });
  }

}
