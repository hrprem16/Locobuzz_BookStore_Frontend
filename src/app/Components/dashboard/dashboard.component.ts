import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart/cart.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isProfileMenuOpen = false;
  cartnumber: number = 0;
  value: any;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe((response: any) => {
      this.value = response.data;
      this.cartnumber = this.value.length;
      console.log(this.cartnumber);
    });
  }

  profileMenuToggle() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
}
