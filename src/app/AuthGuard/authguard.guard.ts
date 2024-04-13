import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Route, Router } from '@angular/router';
import { AuthService } from '../Services/auth/auth.service';


@Injectable({providedIn:'root'})

export class  AuthGuard implements CanActivate{
  constructor(private auth:AuthService,private route:Router){}
  canActivate():boolean{
    if(!this.auth.getTokenForAuth()){
      this.route.navigateByUrl("/login");
    }
    return this.auth.getTokenForAuth()
  }
}
// export const authguardGuard: CanActivateFn = (route, state) => {
//   return true;
// };