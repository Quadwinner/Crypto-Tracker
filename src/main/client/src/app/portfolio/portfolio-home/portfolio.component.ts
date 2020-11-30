import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetCurrenciesService } from '../../get-currencies.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  @Output() selected = new EventEmitter<Object>();

  currencies;

  constructor(private getCurrenciesService: GetCurrenciesService) {
  }

  getPortfolio() {
    this.getCurrenciesService.getCurrencies().subscribe((fullCurrencyList: any) => {
      this.getCurrenciesService.getPortfolio().subscribe((response) => {
        const portfolioCurrencies = [];
        console.log(response);
        for (let symbol of response) {
          for (let currency of fullCurrencyList.Data) {
            if (currency.CoinInfo.Name === symbol) {
              portfolioCurrencies.push(currency);
            }
          }
        }
        this.currencies = portfolioCurrencies;
      });
    });
  }

  viewDetails(details: any) {
    this.selected.emit(details);
  }

  ngOnInit(): void {
    this.getPortfolio();
  }

}
