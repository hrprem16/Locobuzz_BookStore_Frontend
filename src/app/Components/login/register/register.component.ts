import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../Services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  hide: boolean = true;
  constructor(private fromBuilder: FormBuilder, private userService: UserService) { }
  ngOnInit(): void {
    this.registerForm = this.fromBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      number: ['', [Validators.required]]
    })
  }
  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
  registerSubmit() {
    let Data = {
      fullName: this.registerForm.value.fullname,
      emailId: this.registerForm.value.email,
      password: this.registerForm.value.password,
      mobileNumber: this.registerForm.value.number,
      userRole: "user"
    }
    return this.userService.Register(Data).subscribe((response: any) => {
      console.log(response);
    })
  }
}
