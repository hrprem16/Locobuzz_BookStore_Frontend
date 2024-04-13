import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart/cart.service';
import { BookService } from '../../Services/book/book.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrl: './my-cart.component.scss'
})
export class MyCartComponent implements OnInit {
  showCustomerDetails: boolean = false;
  showOrderSummary: boolean = false;
  cartsData: any;
  cartDataItems: any;
  book_id: any;
  myArray: any[] = [];
  constructor(private cartService: CartService, private bookService: BookService) {

  }
  ngOnInit(): void {
    this.getcart();
  }
  getcart() {
    this.cartService.getCartItems().subscribe((response: any) => {
      this.cartsData = response;
      this.cartsData = this.cartsData.data;
      console.log(this.cartsData);
      for (let index = 0; index < this.cartsData.length; index++) {
        this.book_id = this.cartsData[index].book_id;
        console.log(this.book_id);
        this.bookService.viewBookById(this.book_id).subscribe((response1: any) => {
          this.cartDataItems = response1.data;
          this.myArray.push(this.cartDataItems);
          console.log(this.cartDataItems);
        })
      }
    })
  }

  ShowCustomerDetails() {
    this.showCustomerDetails = true
  }
  ShowOrderSummary() {
    this.showOrderSummary = true
  }
  update(str: string, num: number) {
    if (str === "minus") {
      const cart = this.cartsData[num]
      if (cart.quantity > 0) {
        //request bheej na
      }
    }
  }
}
