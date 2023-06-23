import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formData = {
    email: '',
    password: '',
    confirmPassword: ''
  };
  onSubmit(){
    console.log(this.formData)
  }
}
