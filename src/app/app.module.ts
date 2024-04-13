import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Components/login/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { BookCardComponent } from './Components/book-card/book-card.component';
import { DisplaybooksComponent } from './Components/displaybooks/displaybooks.component';
import { MyCartComponent } from './Components/my-cart/my-cart.component';
import { MyWishlistComponent } from './Components/my-wishlist/my-wishlist.component';
import { ViewBookComponent } from './Components/view-book/view-book.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    BookCardComponent,
    DisplaybooksComponent,
    MyCartComponent,
    MyWishlistComponent,
    ViewBookComponent,
    FeedbackComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
  
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
