import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  userLogin=new User('','','','','');

  ngOnInit(): void {
  }

  onSubmit(data:any)
  {
    console.log(data)
    console.log(this.userLogin);
  }

}
