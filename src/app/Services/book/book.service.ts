import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpService: HttpService) { }

  displayBook() {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.httpService.getMethod('https://localhost:7185/api/Book/getAllBooks', true, header);
  }
  viewBookById(BookId: number) {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.httpService.getMethod(`https://localhost:7185/api/Book/viewBook?BookId=${BookId}`, true, header);
  }
}
