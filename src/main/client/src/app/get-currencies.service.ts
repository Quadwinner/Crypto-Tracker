import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const Url = 'whatever we are calling our back end';

@Injectable({
  providedIn: 'root'
})

export class GetCurrenciesService {

  accesskey: '25beef7fd94a2f8063ebd8a1d884d5bd5c723f307ddb49cdadd7ec62bc695b99';

  // url for full search: https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD
  // url for individual search: https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD

  // url for icon search: https://www.cryptocompare.com/media/*

  constructor(private http: HttpClient) {}

  getCurrencies() {
    return this.http.get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD`)
  }

  getSearchedCurrency(filterText: string) {
    return this.http.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${filterText}&tsyms=USD`)
  }

  get24HourData(symbol: string) {
    return this.http.get(`https://min-api.cryptocompare.com/data/v2/histominute?fsym=${symbol}&tsym=USD&limit=1439`)
  }

  get30DayData(symbol: string) {
    return this.http.get(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&limit=29`)
  }

  getPortfolio(): Observable<any> {
    return this.http.get("/api/portfolio");
  }

  insertCurrency(data): Observable<any> {
    return this.http.post(`/api/portfolio/add?symbol=${data}`, data);
  }

  deleteCurrency(id): Observable<any> {
    return this.http.delete(`/api/portfolio/remove?symbol=${id}`);
  }
}

