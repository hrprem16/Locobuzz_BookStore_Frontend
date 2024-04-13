import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/book/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.scss'
})
export class ViewBookComponent implements OnInit {
  constructor(private bookservice: BookService, private route: ActivatedRoute) {

  }
  bookId: any;
  book !: any;
  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id');
    this.bookservice.viewBookById(this.bookId).subscribe((response) => {
      this.book = response;
      this.book = this.book.data;
      console.log(this.book);
    });
  }

  dropdownOpen: boolean = false;
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }


}
