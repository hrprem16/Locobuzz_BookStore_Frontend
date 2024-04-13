import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/book/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaybooks',
  templateUrl: './displaybooks.component.html',
  styleUrl: './displaybooks.component.scss'
})
export class DisplaybooksComponent implements OnInit {
  dropdownOpen: boolean = false;
  data: any;
  num!: number; //  took var for calculate the total number of books available 
  value: number = 1; // fixing the value taaki hume sort by relevance start ho
  constructor(private bookService: BookService, private route: Router) { }

  ngOnInit() {
    this.bookService.displayBook().subscribe(
      (response) => {
        this.data = response;
        this.data = this.data.data;
        console.log(this.data);
        this.num = this.data.length;
      },
      (error) => {
        console.error('Error fetching book data:', error);
      }
    );
  }
  toggleDropdown() {

    this.dropdownOpen = !this.dropdownOpen;
  }
  // Making function for button , agar button click krenge to uske liye kuch particular value set kr dega
  sortByRelevance() {
    this.value = 1;
    this.Sorts();
  }
  sortByLowHigh() {
    this.value = 2;
    this.Sorts();
  }
  sortByHighLow() {
    this.value = 3;
    this.Sorts();
  }
  sortByCreation() {
    this.value = 4;
    this.Sorts();
  }

  // case to sort the value
  Sorts() {
    switch (this.value) {
      case 1:
        this.data = this.data;
        break;
      case 2:
        this.data = this.data.sort((a: any, b: any) => a.book_Discount_Price - b.book_Discount_Price);
        break;
      case 3:
        this.data = this.data.sort((a: any, b: any) => b.book_Discount_Price - a.book_Discount_Price);
        break;
      case 4:
        this.data = this.data.sort((a: any, b: any) => new Date(b.CreatedAt).getTime() - new Date(a.CreatedAt).getTime());
        break;
    }
  }




}
