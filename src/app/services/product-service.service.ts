import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IUser } from '../IUser';
import {catchError}  from 'rxjs/operators';
import { IPost } from '../IPost';
import { DiscountOffers, IProduct } from '../Shared Classes/shared';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  
  
  ProductList:Array<IProduct>=[
    {ID:1,Img:"1.jpg",Name:"T-shirt",Price:250,Quantity:15,discont:DiscountOffers.NoDiscount},
    {ID:2,Img:"2.jpg",Name:"sweet-shirt",Price:400,Quantity:8,discont:DiscountOffers.firstDiscount},
    {ID:3,Img:"3.jpg",Name:"shirt",Price:320,Quantity:10,discont:DiscountOffers.secondDiscount}
  ];
  
  constructor(private http:HttpClient) { 
    
  }
    
  url="https://jsonplaceholder.typicode.com/users";
  url2="https://jsonplaceholder.typicode.com/posts";

  GetAllUsers():Observable<IUser[]>
  {
    
    return this.http.get<IUser[]>(this.url).pipe(catchError((err)=>
       {
         return throwError(err.message || "there is an Error");
        }));
  }
  GetAllPosts():Observable<IPost[]>
  {
    
    return this.http.get<IPost[]>(this.url2).pipe(catchError((err)=>
       {
         return throwError(err.message || "there is an Error");
        }));
  }
  GetAllProducts()
  {
    return this.ProductList;
  }
  getAllProductswithDiscount()
  {
    let ProductList2:Array<IProduct>=[];
    for (let product of this.ProductList) 
    {
      if(product.discont>0)
      {
        ProductList2.push(product);
      }

    }
    return ProductList2;
  }
  getAllProductswithOutDiscount()
  {
    let ProductList2:Array<IProduct>=[];
    for (let product of this.ProductList) 
    {
      if(product.discont==0)
      {
        ProductList2.push(product);
      }

    }
    return ProductList2;
  }
  GetProductById(prdId:any)
  {
    
    
   if(prdId!=null)
    {
      for(let product of this.ProductList)
      {
        if(product.ID==prdId)
        {
          return product;
        }
      }
      
      return null;
    }
    return null;
  }
}

