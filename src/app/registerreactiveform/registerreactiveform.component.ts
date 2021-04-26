import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPassword } from '../Password.validator';

@Component({
  selector: 'app-registerreactiveform',
  templateUrl: './registerreactiveform.component.html',
  styleUrls: ['./registerreactiveform.component.scss']
})
export class RegisterreactiveformComponent implements OnInit {
   pattName=/(^[a-zA-Z]{3,})+/
   pattEmail=/(^[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}\.(com|net|edu|org))/
   pattphone=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  constructor(private fb:FormBuilder) { }
  RegisterForm=this.fb.group(
    {
      username:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.pattern(this.pattEmail)]],
      password:['',[Validators.required]],
      confirmpassword:['',[Validators.required]]
    },{validators:[ConfirmPassword]})
    get userName()
    {
      return this.RegisterForm.get('username');
    }
  
    get email()
    {
      return this.RegisterForm.get('email');
    }
    get password()
    {
      return this.RegisterForm.get('password');
    }
    
  ngOnInit(): void {
  }
  
}
