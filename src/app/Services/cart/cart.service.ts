import { Injectable, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';
import { OnReadOpts } from 'net';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token: any;
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem("token");
  }
  getCartItems() {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getMethod('https://localhost:7185/api/Cart/GetAllCartItems', true, header);
  }
}
