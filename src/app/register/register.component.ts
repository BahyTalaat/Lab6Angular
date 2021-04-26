import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  socialmedia=["facebook","twitter","google"];
  userRegister=new User('bahy','bahy@gmail.com','123','123','facebook');
  constructor() { }

  ngOnInit(): void {

  }
  onSubmit(data:any)
  {
    console.log(data)
    console.log(this.userRegister);
  }

}
