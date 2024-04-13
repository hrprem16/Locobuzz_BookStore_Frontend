import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;
  constructor(private httpService: HttpService) { }

  Login(Data: any) {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.httpService.PostMethod('https://localhost:7185/api/User/Login', Data, false, header);
  }

  Register(Data: any) {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.httpService.PostMethod('https://localhost:7185/api/User/Reg', Data, false, header);
  }
}
