import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login/login.component';
import { RegisterComponent } from './Components/login/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MyCartComponent } from './Components/my-cart/my-cart.component';
import { MyWishlistComponent } from './Components/my-wishlist/my-wishlist.component';
import { ViewBookComponent } from './Components/view-book/view-book.component';
import { DisplaybooksComponent } from './Components/displaybooks/displaybooks.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'home', component: DashboardComponent,
    children: [
      { path: '', component: DisplaybooksComponent },
      { path: 'viewbook/:id', component: ViewBookComponent },
      { path: 'displaybook', component: DisplaybooksComponent },
      {path:'mycart',component:MyCartComponent}
    ]
  },

  //for checking components layout designing
  { path: 'viewbook', component: ViewBookComponent },
  { path: 'mycart', component: MyCartComponent },
  { path: 'mywishlist', component: MyWishlistComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
