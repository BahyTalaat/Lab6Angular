import { Component, OnInit } from '@angular/core';
import { IUser } from '../IUser';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:IUser[]=[];
  constructor(private ProductService:ProductServiceService) { }

  ngOnInit(): void {
    this.ProductService.GetAllUsers().subscribe(Data=>
        {
          this.users=Data;
        });
       
  }

}
