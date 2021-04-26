import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';
import { DiscountOffers, ICategory, IProduct } from '../Shared Classes/shared';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Discount:DiscountOffers;
  StoreName:string;
  StoreLogo:string;
  // Day2
  // ProductList:Array<IProduct>;
  
  ProductList:Array<IProduct>;
  SelectedProduct:any;
  CategoryList:Array<ICategory>;
  ClientName:string;
  IsPurshased:boolean;
  IsProductNull:boolean;

  constructor(private ProductService:ProductServiceService,private route:Router,private activatedroute:ActivatedRoute) 
  {
    this.ProductList=[];
    
// let p1:IProduct={ID:1,Img:"1.jpg",Name:"T-shirt",Price:250,Quantity:15};
// let p2:IProduct={ID:2,Img:"2.jpg",Name:"sweet-shirt",Price:400,Quantity:8};
// let p3:IProduct={ID:3,Img:"3.jpg",Name:"shirt",Price:320,Quantity:10};

let c1:ICategory={ID:1,Name:"clothes"};
let c2:ICategory={ID:2,Name:"shoes"};
let c3:ICategory={ID:3,Name:"dress"};

  this.Discount=DiscountOffers.secondDiscount;
  this.StoreName="AllPeople";
  this.StoreLogo="allPeople.jpg";
  // this.ProductList=[p1,p2,p3];
  this.CategoryList=[c1,c2,c3];
  this.ClientName="bahy";
  this.IsPurshased=false;
  this.IsProductNull=true;
   }

  ngOnInit(): void {
    this.ProductList=this.ProductService.GetAllProducts();
  }
  purchase():void
    {
      this.IsPurshased=true;
    }
    getProduct(ProID:any)
    {

      console.log("enter");
      let Id=parseInt(ProID);
      console.log(typeof(Id));
     this.SelectedProduct=this.ProductService.GetProductById(Id);
     console.log(this.SelectedProduct);
     if(this.SelectedProduct==null)
     {
        
       this.IsProductNull=true;
     }
     else
     {
      this.IsProductNull=false;
     }
    }
    renderValues()
    {
      return this.ProductService.GetAllProducts();
    }
    getProductwithDiscout()
    {
      this.route.navigate(['productwithdiscount'],{relativeTo:this.activatedroute});
    }
    getProductwithoutDiscount()
    {
      this.route.navigate(['productwithOutdiscount'],{relativeTo:this.activatedroute})
    }
}
