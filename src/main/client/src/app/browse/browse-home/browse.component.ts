import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetCurrenciesService } from '../../get-currencies.service'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  @Output() selected = new EventEmitter<Object>();

  currencies;
  filteredCurrencies;
  singleCurrency;
  filterText: string;
  logoUrl;
  price;

  constructor(private getCurrenciesService: GetCurrenciesService) {
  }

  setFilterText(filterText: string) {
    this.filterText = filterText;
  }

  getSearchedCurrency() {
    console.log('inside getSearchedCurrency()');
    this.filterText = this.filterText.toUpperCase();
    this.getCurrenciesService.getSearchedCurrency(this.filterText).subscribe((response) => {
      this.singleCurrency = response;
      this.price = this.singleCurrency.RAW[this.filterText].USD.PRICE;
      this.logoUrl = 'https://cryptocompare.com' + this.singleCurrency.RAW[this.filterText].USD.IMAGEURL;
      console.log(this.singleCurrency.RAW[this.filterText].USD);
    })
  }

  setFilteredCurrencies() {
    const newFilteredCurrencies = [];
    for (let currency of this.currencies) {
      if (currency.CoinInfo.Name.toLowerCase().includes(this.filterText.toLowerCase())) {
        newFilteredCurrencies.push(currency);
      }
    }
    this.filteredCurrencies = newFilteredCurrencies;
  }

  resetCurrencySearch() {
    this.filteredCurrencies = this.currencies;
  }

  getCurrencies() {
    this.singleCurrency = this.getCurrenciesService.getCurrencies().subscribe((response: any) => {
      this.currencies = response.Data;
      this.filteredCurrencies = this.currencies;
    })
  }

  viewDetails(details: any) {
    this.selected.emit(details);
  }

  ngOnInit() {
    this.getCurrencies();
  }

}


