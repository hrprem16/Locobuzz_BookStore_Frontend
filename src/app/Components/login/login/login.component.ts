import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../Services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]]
    })
  }
  hide: boolean = true;
  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  LoginSubmit() {
    if (this.loginForm.valid) {
      let Data = {
        emailId: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      this.userService.Login(Data).subscribe((response: any) => {
        if (response.success == true) {
          console.log(response);
          localStorage.setItem("token", response.data);
          this.route.navigateByUrl("/home");
        }
      })
    }
  }


}
