import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent implements OnInit {
  @Input() book!: any
  constructor(private route: Router) { }
  ngOnInit(): void {
    console.log(this.book + "\n");
  }
  sendId(bookId: any) {
    this.route.navigate(['home/viewbook', bookId]);
  }
}
