import { Component, OnInit } from '@angular/core';
import { IPost } from '../IPost';
import { IUser } from '../IUser';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts:IPost[]=[];
 
  constructor(private ProductService:ProductServiceService) { }

  ngOnInit(): void {
    this.ProductService.GetAllPosts().subscribe(Data=>
        {
          this.posts=Data;
        }); 
         
  }
}
